import * as ethers from 'ethers';
import { toast } from 'svelte-sonner';
import * as constants from './constants';
import * as services from './services';
import * as stores from './stores';
import * as types from './types';

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

export function printWei(wei: bigint | null, withOrigin: boolean = false): string {
	if (wei === null) {
		return '';
	}

	let value: bigint;
	let unit: string;
	if (wei >= constants.ETH) {
		value = wei / constants.ETH;
		unit = 'eth';
	} else if (wei >= constants.GWEI) {
		value = wei / constants.GWEI;
		unit = 'gwei';
	} else {
		value = wei;
		unit = 'wei';
	}

	return `${value.toLocaleString()} ${unit}${withOrigin ? ` (${wei.toLocaleString()})` : ''}`;
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

export async function ensureProvider(): Promise<services.BlockProvider> {
	let _provider = stores.providerStore.get();
	if (!_provider || !_provider.connected()) {
		_provider?.disconnect();

		const _rpc = stores.rpcStore.get();

		_provider = services.defaultBlockProvider(_rpc);
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

export function deriveStorageKey(
	baseSlot: bigint,
	keyType: types.KeyType,
	key?: string
): string {
	if (!key) {
		return ethers.keccak256(abiCoder.encode(['uint256'], [baseSlot]));
	}
	if (keyType === constants.NONE) {
		throw new Error('keyType is required when key is provided');
	}

	return ethers.keccak256(abiCoder.encode([keyType, 'uint256'], [key, baseSlot]));
}
