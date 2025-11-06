import type { Block, TransactionResponse } from 'ethers';
import { JsonRpcProvider } from 'ethers';
import { writable } from 'svelte/store';
import type { BlockInfo, SyncStatus, TxInfo } from './types';

export const blockCacheStore = writable<Map<string, Block>>(new Map());
export const blockIndexStore = writable<Map<number, string>>(new Map());
export const blockListStore = writable<BlockInfo[]>([]);
export const txCacheStore = writable<Map<string, TransactionResponse>>(new Map());
export const txListStore = writable<TxInfo[]>([]);
export const blockNumberStore = writable<number | undefined>();
export const syncStatusStore = writable<SyncStatus>('pending');
export const syncJobIdStore = writable<NodeJS.Timeout | undefined>();
export const providerStore = writable<JsonRpcProvider | undefined>();
