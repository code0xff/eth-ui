import * as ethers from 'ethers';
import { toast } from 'svelte-sonner';
import * as constants from './constants';
import * as services from './services';
import * as stores from './stores';
import * as types from './types';
import { AbiParser } from './services';

export function timestampToDate(timestamp: number): string {
	const datetime = new Date(timestamp * 1000).toISOString();
	const date = datetime.slice(0, 10);
	const time = datetime.slice(11, 19);

	return `${date} ${time}`;
}

export function printNumber(num: number | bigint | null): string {
	if (num !== null) {
		return num.toLocaleString();
	} else {
		return '';
	}
}

function formatUnitUpTo3dp(wei: bigint, base: bigint): string {
	const denom4 = base / 10_000n;
	const v4 = wei / denom4;
	const v3 = (v4 + 5n) / 10n;

	const intPart = v3 / 1000n;
	const fracPartNum = v3 % 1000n;

	if (fracPartNum === 0n) {
		return intPart.toLocaleString();
	}

	let fracStr = fracPartNum.toString().padStart(3, '0');
	fracStr = fracStr.replace(/0+$/, '');

	return `${intPart.toLocaleString()}.${fracStr}`;
}

export function printWei(wei: bigint | null, withOrigin: boolean = false): string {
	if (wei === null) return '';

	let result: string;
	let unit: string;

	if (wei >= constants.ETH) {
		result = formatUnitUpTo3dp(wei, constants.ETH);
		unit = 'eth';
	} else if (wei >= constants.GWEI) {
		result = formatUnitUpTo3dp(wei, constants.GWEI);
		unit = 'gwei';
	} else {
		result = wei.toLocaleString();
		unit = 'wei';
	}

	return `${result} ${unit}${withOrigin && unit !== 'wei' ? ` (${wei.toLocaleString()} wei)` : ''}`;
}

export function splitToChunks(data: string, selectorExist?: boolean): string {
	if (data.startsWith('0x') && data.length <= 2) {
		return '0x';
	} else if (data.length <= constants.CHUNK_SIZE) {
		return data;
	} else {
		data = data.startsWith('0x') ? data.slice(2) : data;
		const chunks: string[] = [];
		if (selectorExist && data.length % constants.CHUNK_SIZE === constants.SELECTOR_SIZE) {
			chunks.push(`0x${data.slice(0, constants.SELECTOR_SIZE)}`);
			data = data.slice(constants.SELECTOR_SIZE);
			for (let i = 0; i < data.length; i += constants.CHUNK_SIZE) {
				chunks.push(`0x${data.slice(i, i + constants.CHUNK_SIZE)}`);
			}
			return chunks.join('\n');
		} else {
			for (let i = 0; i < data.length; i += constants.CHUNK_SIZE) {
				chunks.push(data.slice(i, i + constants.CHUNK_SIZE));
			}
			return chunks.join('\n');
		}
	}
}

export function compactHash(hash: string | undefined | null, size: number = 8): string {
	if (hash) {
		return `${hash.slice(0, size + 2)}...${hash.slice(-size)}`;
	} else {
		return '';
	}
}

function normalizeHistoryValue(type: types.QueryType, value: string): string {
	const trimmed = value.trim();
	if (type === 'block') {
		return trimmed;
	}
	return trimmed.toLowerCase();
}

export function buildQueryPath(type: types.QueryType, value: string): string {
	switch (type) {
		case 'block':
			return `/block/${value}`;
		case 'tx':
			return `/tx/${value}`;
		case 'account':
			return `/account/${value}`;
	}
}

export function saveQueryHistory(type: types.QueryType, value: string): void {
	const rpc = stores.rpcStore.get();
	if (!rpc) return;

	const normalizedValue = normalizeHistoryValue(type, value);
	if (!normalizedValue) return;

	stores.queryHistoryStore.update((historyByRpc) => {
		const rpcHistory = historyByRpc[rpc] ?? [];
		const withoutDup = rpcHistory.filter(
			(item) =>
				!(item.type === type && normalizeHistoryValue(item.type, item.value) === normalizedValue)
		);
		const nextRpcHistory: types.QueryHistoryItem[] = [
			{
				type,
				value: normalizedValue,
				queriedAt: Date.now()
			},
			...withoutDup
		].slice(0, constants.QUERY_HISTORY_LIMIT);

		return {
			...historyByRpc,
			[rpc]: nextRpcHistory
		};
	});
}

function shouldProxyRpc(rpc: string): boolean {
	const isHttpRpc = rpc.startsWith('http://') || rpc.startsWith('https://');
	if (!isHttpRpc || typeof window === 'undefined') {
		return false;
	}

	const localhostSet = new Set(['localhost', '127.0.0.1', '::1']);
	const isLocalHost = localhostSet.has(window.location.hostname);

	return import.meta.env.DEV || isLocalHost;
}

export function resolveRpcConnectUrl(rpc: string): string {
	if (!shouldProxyRpc(rpc)) {
		return rpc;
	}

	const target = encodeURIComponent(rpc);
	return `${window.location.origin}/__rpc_proxy__?target=${target}`;
}

export async function ensureProvider(): Promise<services.BlockProvider> {
	let _provider = stores.providerStore.get();
	if (!_provider || !_provider.connected()) {
		await _provider?.disconnect();

		const _rpc = stores.rpcStore.get();
		const _connectUrl = resolveRpcConnectUrl(_rpc);

		_provider = services.defaultBlockProvider(_rpc, _connectUrl);
		await _provider.connect();

		stores.providerStore.set(_provider);
	}
	return _provider;
}

export function handleError(e: unknown): void {
	let message = 'Unknown error';
	if (e instanceof Error) {
		message = e.message;
	} else if (typeof e === 'string') {
		message = e;
	} else {
		message = JSON.stringify(e);
	}

	console.error(message);
	toast.error(message);
}

// If fallback is async, you must call tryExecuteAsync,
// tryExecute cannot handle async fallback.
export async function tryExecuteAsync<R = void>(
	task: () => Promise<R>,
	rethrow: boolean = false,
	fallback?: () => void | Promise<void>
): Promise<R | undefined> {
	try {
		return await task();
	} catch (e: unknown) {
		handleError(e);
		await fallback?.();
		if (rethrow) {
			throw e;
		}
	}
}

export function tryExecute<R = void>(
	task: () => R,
	rethrow: boolean = false,
	fallback?: () => void
): R | undefined {
	try {
		return task();
	} catch (e: unknown) {
		handleError(e);
		fallback?.();
		if (rethrow) {
			throw e;
		}
	}
}

export function printStatus(status: number | null, withOrigin: boolean = false): string {
	if (status == null) return '';

	const statusMap: Record<number, string> = {
		1: 'success',
		0: 'fail'
	};

	return statusMap[status]
		? `${statusMap[status]}${withOrigin ? ` (${status})` : ''}`
		: `${status}`;
}

export function printTxType(type: number | null, withOrigin: boolean = false): string {
	if (type == null) return '';

	const txTypeMap: Record<number, string> = {
		0: 'legacy',
		1: 'eip2930',
		2: 'eip1559',
		3: 'eip4844',
		4: 'eip7702'
	};

	return txTypeMap[type] ? `${txTypeMap[type]}${withOrigin ? ` (${type})` : ''}` : `${type}`;
}

export function isValidTestKey(key: string): boolean {
	return key.startsWith('0x') && key.length === constants.HASH_SIZE;
}

const abiCoder = ethers.AbiCoder.defaultAbiCoder();

export function deriveStorageKey(baseSlot: bigint, keyType: types.KeyType, key: string): string {
	if (keyType === constants.NONE) {
		return ethers.keccak256(abiCoder.encode(['uint256'], [baseSlot]));
	}
	if (key.trim().length === 0) {
		throw new Error('invalid key');
	}

	return ethers.keccak256(abiCoder.encode([keyType, 'uint256'], [key, baseSlot]));
}

export function encodeFunctionData(abi: string, inputs: string): string {
	const _func = AbiParser.parse(abi);
	const _interface = new ethers.Interface([abi]);

	if (_func.inputs.length > 0) {
		const _inputs = inputs.split(',');
		if (_inputs.length !== _func.inputs.length) {
			throw new Error(`required inputs: ${_func.inputs.length}`);
		}
		return _interface.encodeFunctionData(_func.name, [..._inputs]);
	} else {
		return _interface.encodeFunctionData(_func.name, []);
	}
}
