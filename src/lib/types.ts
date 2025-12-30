import * as constants from './constants';

export type Block = {
	number: number;
	hash: string | null;
	parentHash: string;
	timestamp: number;
	miner: string;
	baseFeePerGas: bigint | null;
	gasUsed: bigint;
	gasLimit: bigint;
	transactions: string[];
	prefetchedTransactions: TxResponse[];
};

export type TxResponse = {
	hash: string;
	type: number;
	from: string | undefined;
	to: string | null;
	index: number;
	value: bigint;
	gasLimit: bigint;
	gasPrice: bigint;
	maxFeePerGas: bigint | null;
	maxPriorityFeePerGas: bigint | null;
	data: string;
	blockNumber: number | null;
};

export type TxReceipt = {
	status: number | null;
	gasUsed: bigint;
	gasPrice: bigint;
	contractAddress: string | null;
	logsBloom: string;
	logs: string[];
};

export type TxWithReceipt = TxResponse & {
	receipt: TxReceipt | null;
};

export type SyncStatus = 'idle' | 'processing' | 'stopped';

export type Argument = {
	name: string;
	type: string;
};

export type Function = {
	name: string;
	inputs: Argument[];
	outputs: Argument[];
};

export type Network = {
	chainId: bigint;
	name: string;
};

export type Account = {
	address: string;
	balance: bigint;
	nonce: number;
	code: string;
};

export type KeyType = typeof constants.NONE | 'address' | 'uint256' | 'bytes32';

export type Environment = {
	rpcs?: string[];
	callAbis?: string[];
	txAbis?: string[];
	testKeys?: string[];
};

export type Validator = (input: string) => boolean;
