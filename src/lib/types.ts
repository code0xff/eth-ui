export type BlockInfo = {
	number: number;
	hash: string | null;
	timestamp: number;
	transactions: string[];
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
