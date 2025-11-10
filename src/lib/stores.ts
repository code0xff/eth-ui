import { WebSocketProvider } from 'ethers';
import { writable } from 'svelte/store';
import * as types from './types';

export const blockStore = writable<Map<number, types.BlockInfo>>(new Map());
export const txStore = writable<Map<string, types.TxInfo>>(new Map());
export const syncStatusStore = writable<types.SyncStatus>('idle');
export const providerStore = writable<WebSocketProvider | undefined>();
