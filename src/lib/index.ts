import { writable } from 'svelte/store';
import { Block } from 'ethers';

export const blockStore = writable(new Map<string, Block>());
export const blockIndexStore = writable(new Map<number, string>());
export const blockListStore = writable(new Array<Block>());
export const txListStore = writable(new Array<{ hash: string; number: number }>());
export const blockNumberStore = writable<number>();
export const syncingStore = writable<boolean>(false);
export const syncJobStore = writable<NodeJS.Timeout|undefined>();

export function timestampToDate(timestamp: number): string {
	const datetime = new Date(timestamp * 1000).toISOString();
	const date = datetime.slice(0, 10);
	const time = datetime.slice(11, 19);

	return `${date} ${time}`;
}
