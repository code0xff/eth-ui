export type BlockInfo = {
	number: number;
	hash: string | null;
	parentHash: string;
	timestamp: number;
	transactions: string[];
	prefetchedTransactions: TxInfo[];
};

export type TxInfo = {
	hash: string;
	from: string | undefined;
	to: string | null;
	blockNumber: number | null;
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
