import * as types from '../types';

export interface BlockProvider {
	connect(): Promise<void>;
	disconnect(): Promise<void>;
	reconnect(count: number): Promise<void>;

	getSyncedBlockNumber(): number | undefined;
	getBlockByNumber(blockNumber: number): Promise<types.BlockInfo | null>;

	onNewBlock(callback: (block: types.BlockInfo) => void): Promise<void>;
	offNewBlock(callback?: () => void): Promise<void>;
}
