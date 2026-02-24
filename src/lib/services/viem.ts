import * as ethers from 'ethers';
import { createPublicClient, createWalletClient, custom, http, webSocket, type PublicClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import * as constants from '@/constants';
import * as helpers from '@/helpers';
import * as stores from '@/stores';
import * as types from '@/types';
import type * as interfaces from './interfaces';
import { AbiParser } from '.';

function normalizeTxType(type: unknown): number {
	if (typeof type === 'number') {
		return type;
	}
	if (typeof type === 'string') {
		switch (type) {
			case 'legacy':
			case '0x0':
				return 0;
			case 'eip2930':
			case '0x1':
				return 1;
			case 'eip1559':
			case '0x2':
				return 2;
			case 'eip4844':
			case '0x3':
				return 3;
			case 'eip7702':
			case '0x4':
				return 4;
		}
	}
	return Number.NaN;
}

function stringifyOutput(output: unknown): string {
	if (output == null) return '';
	if (typeof output === 'bigint') return output.toString();
	if (Array.isArray(output)) {
		return output.map((item) => stringifyOutput(item)).join(',');
	}
	if (typeof output === 'object') {
		if ('toString' in output && typeof output.toString === 'function') {
			return output.toString();
		}
		return JSON.stringify(output);
	}
	return String(output);
}

function safeStringify(value: unknown): string {
	return JSON.stringify(value, (_, v) => (typeof v === 'bigint' ? v.toString() : v), 2);
}

export class ViemBlockProvider implements interfaces.BlockProvider {
	private url: string;
	private connectUrl: string;
	private client: PublicClient | undefined;
	private network: types.Network | undefined;
	private pollingActive: boolean = false;
	private pollingTimer: ReturnType<typeof setTimeout> | undefined;
	private syncedBlockNumber: number | undefined;

	constructor(url: string, connectUrl?: string) {
		this.url = url;
		this.connectUrl = connectUrl ?? url;
	}

	getUrl(): string {
		return this.url;
	}

	async connect(): Promise<void> {
		console.debug(`${this.connect.name}()`);

		if (!this.connectUrl) {
			throw new Error(`invalid url: ${this.connectUrl}`);
		}

		if (this.connectUrl.startsWith('http://') || this.connectUrl.startsWith('https://')) {
			this.client = createPublicClient({
				transport: http(this.connectUrl)
			});
		} else if (this.connectUrl.startsWith('ws://') || this.connectUrl.startsWith('wss://')) {
			this.client = createPublicClient({
				transport: webSocket(this.connectUrl)
			});
		} else {
			throw new Error(`unsupported url: ${this.connectUrl}`);
		}

		const chainId = await this.client.getChainId();
		this.network = {
			chainId: BigInt(chainId),
			name: `chain-${chainId}`
		};
	}

	async disconnect(): Promise<void> {
		console.debug(`${this.disconnect.name}()`);

		await this.offNewBlock();
		this.client = undefined;
		this.network = undefined;
	}

	async reconnect(count: number = constants.DEFAULT_RETRY_COUNT): Promise<void> {
		console.debug(`${this.reconnect.name}(${count})`);

		try {
			await this.disconnect();

			if (!this.connectUrl) {
				throw new Error(`invalid url: ${this.connectUrl}`);
			}

			await this.connect();
			if (this.client && this.network) {
				return;
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.warn(e.message);
			}

			if (count > 0) {
				setTimeout(async () => {
					await this.reconnect(count - 1);
				}, 1000);
			} else {
				throw new Error(`failed to connect to ${this.connectUrl}`);
			}
		}
	}

	connected(): boolean {
		return !!this.client;
	}

	async getBlock(blockTag: string | number, prefetchTxs?: boolean): Promise<types.Block | null> {
		console.debug(`${this.getBlock.name}(${blockTag},${prefetchTxs})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		let _block;
		try {
			if (typeof blockTag === 'number') {
				_block = await this.client!.getBlock({
					blockNumber: BigInt(blockTag),
					includeTransactions: !!prefetchTxs
				});
			} else if (blockTag.startsWith('0x')) {
				_block = await this.client!.getBlock({
					blockHash: blockTag as `0x${string}`,
					includeTransactions: !!prefetchTxs
				});
			} else {
				_block = await this.client!.getBlock({
					blockTag: blockTag as 'latest',
					includeTransactions: !!prefetchTxs
				});
			}
		} catch (e: unknown) {
			if (e instanceof Error && e.name === 'BlockNotFoundError') {
				return null;
			}
			throw e;
		}
		if (!_block) return null;

		const transactions = _block.transactions.map((tx) =>
			typeof tx === 'string' ? tx : tx.hash
		) as string[];
		const prefetchedTransactions = _block.transactions
			.filter((tx): tx is Exclude<typeof tx, string> => typeof tx !== 'string')
			.map((tx) => ({
				hash: tx.hash,
				from: tx.from,
				to: tx.to,
				index: tx.transactionIndex ?? 0,
				value: tx.value,
				blockNumber: tx.blockNumber ? Number(tx.blockNumber) : null,
				type: normalizeTxType(tx.type),
				gasLimit: tx.gas,
				gasPrice: tx.gasPrice ?? 0n,
				maxFeePerGas: tx.maxFeePerGas ?? null,
				maxPriorityFeePerGas: tx.maxPriorityFeePerGas ?? null,
				data: tx.input
			}));

		return {
			number: Number(_block.number ?? 0n),
			hash: _block.hash,
			parentHash: _block.parentHash,
			timestamp: Number(_block.timestamp),
			miner: _block.miner ?? '',
			baseFeePerGas: _block.baseFeePerGas ?? null,
			gasUsed: _block.gasUsed,
			gasLimit: _block.gasLimit,
			transactions,
			prefetchedTransactions
		};
	}

	async getTx(hash: string): Promise<types.TxResponse | null> {
		console.debug(`${this.getTx.name}(${hash})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const _tx = await this.client!.getTransaction({
			hash: hash as `0x${string}`
		});
		if (!_tx) return null;

		return {
			hash: _tx.hash,
			type: normalizeTxType(_tx.type),
			from: _tx.from,
			to: _tx.to,
			index: _tx.transactionIndex ?? 0,
			value: _tx.value,
			gasLimit: _tx.gas,
			blockNumber: _tx.blockNumber ? Number(_tx.blockNumber) : null,
			gasPrice: _tx.gasPrice ?? 0n,
			maxFeePerGas: _tx.maxFeePerGas ?? null,
			maxPriorityFeePerGas: _tx.maxPriorityFeePerGas ?? null,
			data: _tx.input
		};
	}

	async getTxReceipt(hash: string): Promise<types.TxReceipt | null> {
		console.debug(`${this.getTxReceipt.name}(${hash})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const _txReceipt = await this.client!.getTransactionReceipt({
			hash: hash as `0x${string}`
		});
		if (!_txReceipt) return null;

		return {
			status: _txReceipt.status === 'success' ? 1 : 0,
			gasUsed: _txReceipt.gasUsed,
			gasPrice: _txReceipt.effectiveGasPrice,
			contractAddress: _txReceipt.contractAddress ?? null,
			logsBloom: _txReceipt.logsBloom ?? '0x',
			logs: _txReceipt.logs.map((log) => safeStringify(log))
		};
	}

	async getTxWithReceipt(hash: string): Promise<types.TxWithReceipt | null> {
		console.debug(`${this.getTxWithReceipt.name}(${hash})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const [tx, receipt] = await Promise.all([this.getTx(hash), this.getTxReceipt(hash)]);
		if (!tx) return null;

		return {
			...tx,
			receipt
		};
	}

	async getBalance(address: string): Promise<bigint> {
		console.debug(`${this.getBalance.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.client!.getBalance({ address: address as `0x${string}` });
	}

	async getTransactionCount(address: string): Promise<number> {
		console.debug(`${this.getTransactionCount.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.client!.getTransactionCount({ address: address as `0x${string}` });
	}

	async getCode(address: string): Promise<string> {
		console.debug(`${this.getCode.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return (await this.client!.getCode({ address: address as `0x${string}` })) ?? '0x';
	}

	async getAccount(address: string): Promise<types.Account> {
		console.debug(`${this.getAccount.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const [balance, nonce, code] = await Promise.all([
			this.client!.getBalance({ address: address as `0x${string}` }),
			this.client!.getTransactionCount({ address: address as `0x${string}` }),
			this.client!.getCode({ address: address as `0x${string}` })
		]);

		return {
			address,
			balance,
			nonce,
			code: code ?? '0x'
		};
	}

	async getStorage(address: string, slot: string): Promise<string> {
		console.debug(`${this.getStorage.name}(${address},${slot})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return (
			(await this.client!.getStorageAt({
			address: address as `0x${string}`,
			slot: slot as `0x${string}`
			})) ?? '0x'
		);
	}

	async call(address: string, abi: string, inputs: string): Promise<string> {
		console.debug(`${this.call.name}(${address},${abi},${inputs})`);

		const _func = AbiParser.parse(abi);

		if (!this.connected()) {
			await this.reconnect();
		}

		const data = helpers.encodeFunctionData(abi, inputs) as `0x${string}`;
		const _result = await this.client!.call({
			to: address as `0x${string}`,
			data
		});
		if (!_result.data) {
			return '';
		}

		const iface = new ethers.Interface([abi]);
		const decoded = iface.decodeFunctionResult(_func.name, _result.data);
		if (!decoded || decoded.length === 0) {
			return '';
		}
		if (decoded.length === 1) {
			return stringifyOutput(decoded[0]);
		}
		return [...decoded].map((output) => stringifyOutput(output)).join(',');
	}

	async sendTx(
		testKey: string,
		address: string,
		abi: string,
		inputs: string,
		value: string
	): Promise<string> {
		console.debug(`${this.sendTx.name}(${testKey},${address},${abi},${inputs},${value})`);

		const [_amount, _unit] = value.trim().split(/\s+/);
		if (!_amount) {
			throw new Error('invalid value');
		}
		const _value = _unit ? ethers.parseUnits(_amount, _unit) : BigInt(_amount);
		const txData = abi.trim().length > 0 ? helpers.encodeFunctionData(abi, inputs) : undefined;

		if (helpers.isValidTestKey(testKey)) {
			if (!this.connected()) {
				await this.reconnect();
			}

			const account = privateKeyToAccount(testKey as `0x${string}`);
			const walletClient = createWalletClient({
				account,
				transport: this.connectUrl.startsWith('ws') ? webSocket(this.connectUrl) : http(this.connectUrl)
			});

			return await walletClient.sendTransaction({
				account,
				chain: null,
				to: address as `0x${string}`,
				value: _value,
				data: txData as `0x${string}` | undefined
			});
		}

		if (!(globalThis as any).ethereum) {
			globalThis.open('https://metamask.io/download');
			throw new Error('wallet not exist');
		}

		const walletClient = createWalletClient({
			transport: custom((globalThis as any).ethereum)
		});
		const [account] = await walletClient.requestAddresses();
		if (!account) {
			throw new Error('wallet account not found');
		}

		return await walletClient.sendTransaction({
			account,
			chain: null,
			to: address as `0x${string}`,
			value: _value,
			data: txData as `0x${string}` | undefined
		});
	}

	async onNewBlock(callback: (block: types.Block) => Promise<void> | void): Promise<void> {
		console.debug(`${this.onNewBlock.name}()`);

		if (!this.connected()) {
			await this.reconnect();
		}
		await this.offNewBlock();

		const pollBlock = async (provider: ViemBlockProvider): Promise<void> => {
			try {
				if (provider.syncedBlockNumber === undefined) {
					const latest = await provider.client!.getBlockNumber();
					provider.syncedBlockNumber = Number(latest);
				} else {
					const _block = await provider.getBlock(provider.syncedBlockNumber + 1, true);
					if (_block) {
						provider.syncedBlockNumber = _block.number;
						await callback(_block);
					}
				}
			} catch (e: unknown) {
				if (e instanceof Error) {
					console.error(e);
				}
				} finally {
					if (provider.pollingActive) {
						const _interval = stores.intervalStore.get();
						provider.pollingTimer = setTimeout(async () => pollBlock(provider), _interval);
					}
				}
			};

			this.pollingActive = true;
			const _interval = stores.intervalStore.get();
			this.pollingTimer = setTimeout(async () => pollBlock(this), _interval);
	}

	async offNewBlock(callback?: () => void): Promise<void> {
		console.debug(`${this.offNewBlock.name}()`);

		this.pollingActive = false;
		this.syncedBlockNumber = undefined;
		if (this.pollingTimer) {
			clearTimeout(this.pollingTimer);
			this.pollingTimer = undefined;
		}
		callback?.();
	}
}
