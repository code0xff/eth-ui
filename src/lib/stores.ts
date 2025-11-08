import { JsonRpcProvider } from 'ethers';
import { writable } from 'svelte/store';
import * as types from './types';

export const blockStore = writable<Map<number, types.BlockInfo>>(new Map());
export const txStore = writable<Map<string, types.TxInfo>>(new Map());
export const blockNumberStore = writable<number | undefined>();
export const syncStatusStore = writable<types.SyncStatus>('pending');
export const syncJobIdStore = writable<NodeJS.Timeout | undefined>();
export const providerStore = writable<JsonRpcProvider | undefined>();
