// Copyright 2025 code0xff
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Store } from './stores';
import * as constants from '../constants';
import * as services from '../services';
import * as types from '../types';

export const blockStore = new Store<Map<number, types.Block>>(new Map());
export const txStore = new Store<Map<string, types.TxResponse>>(new Map());
export const syncStatusStore = new Store<types.SyncStatus>('idle');
export const providerStore = new Store<services.BlockProvider | undefined>(undefined);

export const rpcStore = new Store<string>('', true, 'rpc');
export const blocklistLimitStore = new Store<number>(
	constants.DEFAULT_BLOCK_LIST_LIMIT,
	true,
	'blocklist_limit'
);
export const intervalStore = new Store<number>(constants.MIN_INTERVAL, true, 'interval');
export const rpcsStore = new Store<string[]>([], true, 'rpcs');
export const callAbisStore = new Store<string[]>([], true, 'call_abis');
export const txAbisStore = new Store<string[]>([], true, 'tx_abis');

export const initializedStore = new Store<boolean>(false);
