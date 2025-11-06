export type BlockInfo = {
	number: number;
	hash: string;
	timestamp: number;
};

export type TxInfo = {
	hash: string;
	from: string;
	number: number;
};

export type SyncStatus = 'pending' | 'processing' | 'stopped';
