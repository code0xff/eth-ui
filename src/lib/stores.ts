import { JsonRpcProvider } from 'ethers';
import { writable } from 'svelte/store';
import * as types from './types';

export const blockCacheStore = writable<Map<string, types.Block>>(new Map());
export const blockIndexStore = writable<Map<number, string>>(new Map());
export const blockListStore = writable<types.BlockInfo[]>([]);
export const txListStore = writable<types.TxInfo[]>([]);
export const blockNumberStore = writable<number | undefined>();
export const syncStatusStore = writable<types.SyncStatus>('pending');
export const syncJobIdStore = writable<NodeJS.Timeout | undefined>();
export const providerStore = writable<JsonRpcProvider | undefined>();
