import * as ethers from 'ethers';
import * as constants from '@/constants';
import * as types from '@/types';
import * as interfaces from './interfaces';
import { AbiParser } from '.';

export class EthersBlockProvider implements interfaces.BlockProvider {
	private url: string | undefined;
	private provider: ethers.Provider | undefined;
	private network: types.Network | undefined;
	private intervalId: NodeJS.Timeout | undefined;
	private syncedBlockNumber: number | undefined;

	constructor(url: string) {
		this.url = url;
	}

	async connect(): Promise<void> {
		console.log(`${this.connect.name}()`);

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
		console.log(`${this.disconnect.name}()`);

		this.url = undefined;
		this.provider?.destroy();
		this.provider = undefined;
		this.network = undefined;
		this.syncedBlockNumber = undefined;
	}

	async reconnect(count: number = constants.DEFAULT_RETRY_COUNT): Promise<void> {
		console.log(`${this.reconnect.name}(${count})`);

		try {
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
		console.log(`${this.connected.name}()`);

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
		console.log(`${this.getBlock.name}(${blockTag},${prefetchTxs})`);

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
		console.log(`${this.getTx.name}(${hash})`);

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
		console.log(`${this.getTxReceipt.name}(${hash})`);

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
		console.log(`${this.getTxWithReceipt.name}(${hash})`);

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
		console.log(`${this.getBalance.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getBalance(address);
	}

	async getTransactionCount(address: string): Promise<number> {
		console.log(`${this.getTransactionCount.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getTransactionCount(address);
	}

	async getCode(address: string): Promise<string> {
		console.log(`${this.getCode.name}(${address})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getCode(address);
	}

	async getAccount(address: string): Promise<types.Account> {
		console.log(`${this.getAccount.name}(${address})`);

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
		console.log(`${this.getStorage.name}(${address},${slot})`);

		if (!this.connected()) {
			await this.reconnect();
		}
		return await this.provider!.getStorage(address, slot);
	}

	async call(address: string, abi: string, inputs: string): Promise<string> {
		console.log(`${this.call.name}(${address},${abi},${inputs})`);

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

	async sendTx(testKey: string, address: string, abi: string, inputs: string): Promise<string> {
		console.log(`${this.sendTx.name}(${testKey},${address},${abi},${inputs})`);

		let _signer: ethers.Signer;
		if (testKey.startsWith('0x') && testKey.length === constants.HASH_SIZE) {
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
		const _contract = new ethers.Contract(address, new ethers.Interface([abi]), _signer);

		const _func = AbiParser.parse(abi);

		let _response: ethers.TransactionResponse;
		if (_func.inputs.length > 0) {
			const _inputs = inputs.split(',');
			_response = await _contract[_func.name](..._inputs);
		} else {
			_response = await _contract[_func.name]();
		}
		return _response.hash;
	}

	async onNewBlock(
		callback: (block: types.Block) => void,
		interval: number = constants.MIN_INTERVAL
	): Promise<void> {
		console.log(`${this.onNewBlock.name}(${interval})`);

		if (!this.connected()) {
			await this.reconnect();
		}

		if (this.provider instanceof ethers.JsonRpcProvider) {
			this.intervalId = setInterval(async () => {
				if (!this.syncedBlockNumber) {
					this.syncedBlockNumber = await this.provider!.getBlockNumber();
				} else {
					const _block = await this.getBlock(this.syncedBlockNumber + 1, true);
					if (_block) {
						this.syncedBlockNumber = _block.number;
						callback(_block);
					}
				}
			}, interval);
		} else {
			this.provider!.on('block', async (_blockNumber: number) => {
				const _block = await this.getBlock(_blockNumber, true);
				if (_block) {
					this.syncedBlockNumber = _block.number;
					callback(_block);
				}
			});
		}
	}

	async offNewBlock(callback?: () => void): Promise<void> {
		console.log(`${this.offNewBlock.name}()`);

		if (this.provider instanceof ethers.WebSocketProvider) {
			this.provider.off('block');
		} else if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = undefined;
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
