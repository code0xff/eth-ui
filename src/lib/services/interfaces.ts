import * as types from '../types';

export interface BlockProvider {
	connect(): Promise<void>;
	disconnect(): void;
	reconnect(count: number): Promise<void>;
	connected(): boolean;

	getUrl(): string;
	getBlock(blockTag: string | number, prefetchTxs?: boolean): Promise<types.Block | null>;
	getTx(hash: string): Promise<types.TxResponse | null>;
	getTxReceipt(hash: string): Promise<types.TxReceipt | null>;
	getTxWithReceipt(hash: string): Promise<types.TxWithReceipt | null>;
	getBalance(address: string): Promise<bigint>;
	getTransactionCount(address: string): Promise<number>;
	getCode(address: string): Promise<string>;
	getAccount(address: string): Promise<types.Account>;
	getStorage(address: string, slot: string): Promise<string>;

	call(address: string, abi: string, inputs: string): Promise<string>;
	sendTx(testKey: string, address: string, abi: string, inputs: string): Promise<string>;

	onNewBlock(
		callback: (block: types.Block) => Promise<void> | void,
		interval: number
	): Promise<void>;
	offNewBlock(callback?: () => void): Promise<void>;
}

export interface AbiParser {
	parse(abi: string): types.Function;
}
