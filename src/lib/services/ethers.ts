import * as ethers from 'ethers';
import * as constants from '@/constants';
import * as helpers from '@/helpers';
import * as stores from '@/stores';
import * as types from '@/types';
import * as interfaces from './interfaces';
import { AbiParser } from '.';

export class EthersBlockProvider implements interfaces.BlockProvider {
	private url: string;
	private provider: ethers.Provider | undefined;
	private network: types.Network | undefined;
	private pollingActive: boolean = false;
	private syncedBlockNumber: number | undefined;

	constructor(url: string) {
		this.url = url;
	}

	getUrl(): string {
		return this.url;
	}

	async connect(): Promise<void> {
		console.debug(`${this.connect.name}()`);

		if (!this.url) {
			throw new Error(`invalid url: ${this.url}`);
		}
		if (this.url.startsWith('http') || this.url.startsWith('https')) {
			this.provider = new ethers.JsonRpcProvider(this.url);
		} else if (this.url.startsWith('ws') || this.url.startsWith('wss')) {
			this.provider = new ethers.WebSocketProvider(this.url);
		} else {
			throw new Error(`unsupported url: ${this.url}`);
		}

		const { chainId, name } = await this.provider.getNetwork();
		this.network = { chainId, name };
	}

	async disconnect(): Promise<void> {
		console.debug(`${this.disconnect.name}()`);

		await this.provider?.removeAllListeners();

		this.provider?.destroy();
		this.provider = undefined;
		this.network = undefined;
	}

	async reconnect(count: number = constants.DEFAULT_RETRY_COUNT): Promise<void> {
		console.debug(`${this.reconnect.name}(${count})`);

		try {
			await this.disconnect();

			if (!this.url) {
				throw new Error(`invalid url: ${this.url}`);
			}

			await this.connect();
			if (this.provider && this.network) {
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
				throw new Error(`failed to connect to ${this.url}`);
			}
		}
	}

	connected(): boolean {
		console.debug(`${this.connected.name}()`);

		if (!this.provider) {
			return false;
		}

		if (this.provider instanceof ethers.WebSocketProvider) {
			const _provider = this.provider as ethers.WebSocketProvider;
			return _provider.websocket && _provider.websocket.readyState === WebSocket.OPEN;
		} else {
			return true;
		}
	}

	async getBlock(blockTag: string | number, prefetchTxs?: boolean): Promise<types.Block | null> {
		console.debug(`${this.getBlock.name}(${blockTag},${prefetchTxs})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const _block = await this.provider?.getBlock(blockTag, prefetchTxs);
		if (!_block) return null;

		return {
			number: _block.number,
			hash: _block.hash,
			parentHash: _block.parentHash,
			timestamp: _block.timestamp,
			miner: _block.miner,
			baseFeePerGas: _block.baseFeePerGas,
			gasUsed: _block.gasUsed,
			gasLimit: _block.gasLimit,
			transactions: [..._block.transactions],
			prefetchedTransactions: _block.prefetchedTransactions.map((_tx) => {
				return {
					hash: _tx.hash,
					from: _tx.from,
					to: _tx.to,
					index: _tx.index,
					value: _tx.value,
					blockNumber: _tx.blockNumber,
					type: _tx.type,
					gasLimit: _tx.gasLimit,
					gasPrice: _tx.gasPrice,
					maxFeePerGas: _tx.maxFeePerGas,
					maxPriorityFeePerGas: _tx.maxPriorityFeePerGas,
					data: _tx.data
				};
			})
		};
	}

	async getTx(hash: string): Promise<types.TxResponse | null> {
		console.debug(`${this.getTx.name}(${hash})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const _tx = await this.provider!.getTransaction(hash);
		if (!_tx) return null;

		return {
			hash: _tx.hash,
			type: _tx.type,
			from: _tx.from,
			to: _tx.to,
			index: _tx.index,
			value: _tx.value,
			gasLimit: _tx.gasLimit,
			blockNumber: _tx.blockNumber,
			gasPrice: _tx.gasPrice,
			maxFeePerGas: _tx.maxFeePerGas,
			maxPriorityFeePerGas: _tx.maxPriorityFeePerGas,
			data: _tx.data
		};
	}

	async getTxReceipt(hash: string): Promise<types.TxReceipt | null> {
		console.debug(`${this.getTxReceipt.name}(${hash})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const _txReceipt = await this.provider!.getTransactionReceipt(hash);
		if (!_txReceipt) return null;

		return {
			status: _txReceipt.status,
			gasUsed: _txReceipt.gasUsed,
			gasPrice: _txReceipt.gasPrice,
			contractAddress: _txReceipt.contractAddress,
			logsBloom: _txReceipt.logsBloom,
			logs: _txReceipt.logs.map((log) => JSON.stringify(log, null, 2))
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
		return await this.provider!.getBalance(address);
	}

	async getTransactionCount(address: string): Promise<number> {
		console.debug(`${this.getTransactionCount.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getTransactionCount(address);
	}

	async getCode(address: string): Promise<string> {
		console.debug(`${this.getCode.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getCode(address);
	}

	async getAccount(address: string): Promise<types.Account> {
		console.debug(`${this.getAccount.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		const [balance, nonce, code] = await Promise.all([
			this.provider!.getBalance(address),
			this.provider!.getTransactionCount(address),
			this.provider!.getCode(address)
		]);

		return {
			address,
			balance,
			nonce,
			code
		};
	}

	async getStorage(address: string, slot: string): Promise<string> {
		console.debug(`${this.getStorage.name}(${address},${slot})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getStorage(address, slot);
	}

	async call(address: string, abi: string, inputs: string): Promise<string> {
		console.debug(`${this.call.name}(${address},${abi},${inputs})`);

		const _func = AbiParser.parse(abi);

		if (!this.connected()) {
			await this.reconnect();
		}

		const _contract = new ethers.Contract(address, new ethers.Interface([abi]), this.provider);
		let _outputs: any;
		if (_func.inputs.length > 0) {
			const _inputs = inputs.split(',');
			_outputs = await _contract[_func.name](..._inputs);
		} else {
			_outputs = await _contract[_func.name]();
		}
		if (_outputs instanceof Array) {
			return _outputs.map((output) => output.toString()).join(',');
		} else {
			return _outputs.toString();
		}
	}

	async sendTx(
		testKey: string,
		address: string,
		abi: string,
		inputs: string,
		value: string
	): Promise<string> {
		console.debug(`${this.sendTx.name}(${testKey},${address},${abi},${inputs},${value})`);

		let _signer: ethers.Signer;
		if (helpers.isValidTestKey(testKey)) {
			if (!this.connected()) {
				await this.reconnect();
			}

			_signer = new ethers.Wallet(testKey, this.provider);
		} else {
			if (!(globalThis as any).ethereum) {
				globalThis.open('https://metamask.io/download');
				throw new Error('wallet not exist');
			}
			const _provider = new ethers.BrowserProvider((globalThis as any).ethereum);
			await _provider.send('eth_requestAccounts', []);

			_signer = await _provider.getSigner();
		}

		const [_amount, _unit] = value.trim().split(/\s+/);
		if (!_amount) {
			throw new Error('invalid value');
		}
		const _value = _unit ? ethers.parseUnits(_amount, _unit) : BigInt(_amount);

		if (abi.trim().length === 0) {
			const _response = await _signer.sendTransaction({
				to: address,
				value: _value
			});

			return _response.hash;
		} else {
			const _func = AbiParser.parse(abi);
			const _contract = new ethers.Contract(address, new ethers.Interface([abi]), _signer);

			let _response: ethers.TransactionResponse;
			if (_func.inputs.length > 0) {
				const _inputs = inputs.split(',');
				_response = await _contract[_func.name](..._inputs, { value: _value });
			} else {
				_response = await _contract[_func.name]({ value: _value });
			}
			return _response.hash;
		}
	}

	async onNewBlock(callback: (block: types.Block) => Promise<void> | void): Promise<void> {
		console.debug(`${this.onNewBlock.name}()`);

		if (!this.connected()) {
			await this.reconnect();
		}

		if (this.provider instanceof ethers.JsonRpcProvider) {
			async function pollBlock(provider: EthersBlockProvider): Promise<void> {
				try {
					if (provider.syncedBlockNumber === undefined) {
						provider.syncedBlockNumber = await provider.provider!.getBlockNumber();
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
					if (!provider.pollingActive) {
						const _interval = stores.intervalStore.get();
						setTimeout(async () => pollBlock(provider), _interval);
					}
				}
			}

			this.pollingActive = false;
			const _interval = stores.intervalStore.get();
			setTimeout(async () => pollBlock(this), _interval);
		} else {
			this.provider!.on('block', async (_blockNumber: number) => {
				const _block = await this.getBlock(_blockNumber, true);
				if (_block) {
					this.syncedBlockNumber = _block.number;
					await callback(_block);
				}
			});
		}
	}

	async offNewBlock(callback?: () => void): Promise<void> {
		console.debug(`${this.offNewBlock.name}()`);

		if (!this.connected()) {
			return;
		}

		if (this.provider instanceof ethers.WebSocketProvider) {
			this.provider.off('block');
		} else {
			this.pollingActive = true;
		}
		callback?.();
	}
}

export class EthersAbiParser implements interfaces.AbiParser {
	parse(abi: string): types.Function {
		const _interface = JSON.parse(new ethers.Interface([abi]).formatJson());
		if (_interface && _interface.length > 0) {
			return _interface[0];
		} else {
			throw new Error(`invalid abi: ${abi}`);
		}
	}
}
