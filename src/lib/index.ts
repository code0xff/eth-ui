import { writable } from 'svelte/store';
import type { Block, TransactionResponse } from 'ethers';
import { JsonRpcProvider } from 'ethers';
import { CHUNK_SIZE, SELECTOR_SIZE } from '@/constants';

export const blockStore = writable(new Map<string, Block>());
export const blockIndexStore = writable(new Map<number, string>());
export const blockListStore = writable<{ number: number; hash: string; timestamp: number }[]>([]);
export const txStore = writable(new Map<string, TransactionResponse>());
export const txListStore = writable<{ hash: string; number: number }[]>([]);
export const blockNumberStore = writable<number>();
export const syncingStore = writable<boolean>(false);
export const syncJobStore = writable<NodeJS.Timeout | undefined>();
export const providerStore = writable<JsonRpcProvider>();

export function timestampToDate(timestamp: number): string {
	const datetime = new Date(timestamp * 1000).toISOString();
	const date = datetime.slice(0, 10);
	const time = datetime.slice(11, 19);

	return `${date} ${time}`;
}

export function printNumber(num: number | bigint | null): string {
	if (num !== undefined && num !== null) {
		return num.toLocaleString();
	} else {
		return '';
	}
}

const GWEI: bigint = 1_000_000_000n;
const ETH: bigint = 1_000_000_000_000_000_000n;

export function printWei(wei: bigint | null): string {
	if (wei === null) {
		return '';
	}

	if (wei > ETH) {
		return `${(wei / ETH).toLocaleString()} eth (${wei.toLocaleString()})`;
	} else if (wei > GWEI) {
		return `${(wei / GWEI).toLocaleString()} gwei (${wei.toLocaleString()})`;
	} else {
		return wei.toLocaleString();
	}
}

export function splitToChunks(data: string): string[] {
	if (data.startsWith('0x') && data.length <= 2) {
		return ['0x'];
	} else if (data.length <= CHUNK_SIZE) {
		return [data];
	} else {
		data = data.startsWith('0x') ? data.slice(2) : data;
		const chunks: string[] = [`0x${data.slice(0, SELECTOR_SIZE)}`];

		data = data.slice(SELECTOR_SIZE);
		for (let i = 0; i < data.length; i += CHUNK_SIZE) {
			chunks.push('0x' + data.slice(i, i + CHUNK_SIZE));
		}
		return chunks;
	}
}

export function compactHash(hash: string | null): string {
	if (hash) {
		return `${hash.slice(0, 18)}...${hash.slice(-16)}`;
	} else {
		return '';
	}
}

export function compactAddress(address: string | null): string {
	if (address) {
		return `${address.slice(0, 10)}...${address.slice(-8)}`;
	} else {
		return '';
	}
}
