import * as ethers from 'ethers';
import * as constants from '@/constants';
import * as types from '@/types';
import type { BlockProvider } from './interfaces';

export class EthersBlockProvider implements BlockProvider {
	private url: string | undefined;
	private provider: ethers.Provider | undefined;
	private network: types.Network | undefined;
	private intervalId: NodeJS.Timeout | undefined;
	private syncedBlockNumber: number | undefined;

	constructor(url: string) {
		this.url = url;
	}

	async connect(): Promise<void> {
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
		this.url = undefined;
		this.provider?.destroy();
		this.provider = undefined;
		this.network = undefined;
		this.syncedBlockNumber = undefined;
	}

	async reconnect(_count: number = constants.DEFAULT_RETRY_COUNT): Promise<void> {
		if (!this.url || _count <= 0) return;
		try {
			await this.connect();
			if (this.provider && this.network) {
				return;
			}
		} catch (_e: unknown) {
			if (_e instanceof Error) {
				console.warn((_e as Error).toString());
			}

			if (_count > 0) {
				setTimeout(async () => {
					await this.reconnect(_count - 1);
				}, 1000);
			} else {
				throw new Error(`failed to connect to ${this.url}`);
			}
		}
	}

	getSyncedBlockNumber(): number | undefined {
		return this.syncedBlockNumber;
	}

	async getBlockByNumber(
		_blockNumber: number,
		prefetchTxs?: boolean
	): Promise<types.BlockInfo | null> {
		if (!this.provider) {
			await this.reconnect();
		}

		const _block = await this.provider?.getBlock(_blockNumber, prefetchTxs);
		if (!_block) return null;

		return {
			number: _block.number,
			hash: _block.hash,
			parentHash: _block.parentHash,
			timestamp: _block.timestamp,
			transactions: [..._block.transactions],
			prefetchedTransactions: _block.prefetchedTransactions.map((_tx) => {
				return { hash: _tx.hash, from: _tx.from, to: _tx.to, blockNumber: _tx.blockNumber };
			})
		};
	}

	async onNewBlock(_callback: (block: types.BlockInfo) => void): Promise<void> {
		if (!this.provider) {
			await this.reconnect();
		}

		if (this.provider instanceof ethers.JsonRpcProvider) {
			this.intervalId = setInterval(async () => {
				if (!this.syncedBlockNumber) {
					this.syncedBlockNumber = await this.provider!.getBlockNumber();
				} else {
					const _blockInfo = await this.getBlockByNumber(this.syncedBlockNumber + 1, true);
					if (_blockInfo) {
						this.syncedBlockNumber = _blockInfo.number;
						_callback(_blockInfo);
					}
				}
			}, 1000);
		} else {
			this.provider!.on('block', async (_blockNumber: number) => {
				const _blockInfo = await this.getBlockByNumber(_blockNumber, true);
				if (_blockInfo) {
					this.syncedBlockNumber = _blockInfo.number;
					_callback(_blockInfo);
				}
			});
		}
	}

	async offNewBlock(_callback?: () => void): Promise<void> {
		if (this.provider instanceof ethers.WebSocketProvider) {
			this.provider.off('block');
		} else if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = undefined;
		}
		_callback?.();
	}
}
