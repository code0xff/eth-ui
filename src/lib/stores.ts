import { writable } from 'svelte/store';
import * as types from './types';
import * as constants from './constants';
import * as services from './services';

export const blockStore = writable<Map<number, types.Block>>(new Map());
export const txStore = writable<Map<string, types.TxResponse>>(new Map());
export const syncStatusStore = writable<types.SyncStatus>('idle');
export const rpcStore = writable<string>('');
export const providerStore = writable<services.BlockProvider | undefined>();
export const blocklistLimitStore = writable<number>(constants.DEFAULT_BLOCK_LIST_LIMIT);
export const rpcsStore = writable<string[]>([]);
export const callAbisStore = writable<string[]>([]);
export const txAbisStore = writable<string[]>([]);
export const intervalStore = writable<number>(constants.MIN_INTERVAL);
export const initializedStore = writable<boolean>(false);
