import * as types from '../types';

export interface BlockProvider {
	connect(): Promise<void>;
	disconnect(): Promise<void>;
	reconnect(count: number): Promise<void>;

	getSyncedBlockNumber(): number | undefined;
	getBlock(blockTag: string | number, prefetchTxs?: boolean): Promise<types.Block | null>;
	getTx(hash: string): Promise<types.TxResponse | null>;
	getTxReceipt(hash: string): Promise<types.TxReceipt | null>;
	getBalance(address: string): Promise<bigint>;
	getTransactionCount(address: string): Promise<number>;
	getCode(address: string): Promise<string>;
	getAccount(address: string): Promise<types.Account>;
	getStorage(address: string, slot: string): Promise<string>;

	call(address: string, abi: string, inputs: string): Promise<string>;
	sendTx(address: string, abi: string, inputs: string): Promise<string>;

	onNewBlock(callback: (block: types.Block) => void, interval: number): Promise<void>;
	offNewBlock(callback?: () => void): Promise<void>;
}

export interface AbiParser {
	parse(abi: string): types.Function;
}
