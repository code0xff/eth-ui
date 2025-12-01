import { toast } from 'svelte-sonner';
import * as constants from './constants';
import * as services from './services';
import * as stores from './stores';

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

	return `${value.toLocaleString()} ${unit} ${withOrigin ? `(${wei.toLocaleString()})` : ''}`;
}

export function splitToChunks(data: string): string {
	if (data.startsWith('0x') && data.length <= 2) {
		return '0x';
	} else if (data.length <= constants.CHUNK_SIZE) {
		return data;
	} else {
		data = data.startsWith('0x') ? data.slice(2) : data;
		const chunks: string[] = [];
		if (data.length % constants.CHUNK_SIZE === constants.SELECTOR_SIZE) {
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

export function ensureProvider(): services.BlockProvider {
	let _provider = stores.providerStore.get();
	if (!_provider) {
		const _rpc = stores.rpcStore.get();

		_provider = services.defaultBlockProvider(_rpc);
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
