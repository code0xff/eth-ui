import { get } from 'svelte/store';
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
	if (num !== undefined && num !== null) {
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
		let chunks: string[] = [];
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

// Must be called after the application initialization step.
// The providerStore and rpcStore are populated only after initialization,
// when values restored from localStorage are fully loaded.
// Calling this function earlier may result in empty or uninitialized stores.
export function ensureProvider(): services.BlockProvider {
	let _provider = get(stores.providerStore);
	if (!_provider) {
		const _rpc = get(stores.rpcStore);

		_provider = services.defaultBlockProvider(_rpc);
		stores.providerStore.set(_provider);
	}
	return _provider;
}
