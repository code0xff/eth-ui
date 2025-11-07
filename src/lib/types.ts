export type BlockInfo = {
	number: number;
	hash: string;
	timestamp: number;
};

export type TxInfo = {
	hash: string;
	from: string;
	to: string | null;
	number: number;
};

export type SyncStatus = 'pending' | 'processing' | 'stopped';

export type Block = {
	number: number;
	hash: string | null;
	parentHash: string;
	timestamp: number;
	transactions: string[];
	miner: string;
	baseFeePerGas: bigint | null;
	gasUsed: bigint;
	gasLimit: bigint;
};
