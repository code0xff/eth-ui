import * as ethers from 'ethers';
import { writable } from 'svelte/store';
import * as types from './types';
import * as constants from './constants';

export const blockStore = writable<Map<number, types.BlockInfo>>(new Map());
export const txStore = writable<Map<string, types.TxInfo>>(new Map());
export const syncStatusStore = writable<types.SyncStatus>('idle');
export const rpcStore = writable<string>(constants.DEFAULT_RPC);
export const providerStore = writable<ethers.Provider | undefined>();
export const blockListLimitStore = writable<number>(constants.DEFAULT_BLOCK_LIST_LIMIT);
