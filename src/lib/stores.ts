import { type Provider } from 'ethers';
import { writable } from 'svelte/store';
import * as types from './types';
import { DEFAULT_BLOCK_LIST_LIMIT } from './constants';

export const blockStore = writable<Map<number, types.BlockInfo>>(new Map());
export const txStore = writable<Map<string, types.TxInfo>>(new Map());
export const syncStatusStore = writable<types.SyncStatus>('idle');
export const providerStore = writable<Provider | undefined>();
export const blockListLimitStore = writable<number>(DEFAULT_BLOCK_LIST_LIMIT);
