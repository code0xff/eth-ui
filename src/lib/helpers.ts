import { CHUNK_SIZE, ETH, GWEI, SELECTOR_SIZE } from './constants';

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

export function printWei(wei: bigint | null, withOrigin = false): string {
	if (wei === null) {
		return '';
	}

	let value: bigint;
	let unit: string;
	if (wei > ETH) {
		value = wei / ETH;
		unit = 'eth';
	} else if (wei > GWEI) {
		value = wei / GWEI;
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
	} else if (data.length <= CHUNK_SIZE) {
		return data;
	} else {
		data = data.startsWith('0x') ? data.slice(2) : data;
		const chunks: string[] = [`0x${data.slice(0, SELECTOR_SIZE)}`];

		data = data.slice(SELECTOR_SIZE);
		for (let i = 0; i < data.length; i += CHUNK_SIZE) {
			chunks.push('0x' + data.slice(i, i + CHUNK_SIZE));
		}
		return chunks.join('\n');
	}
}

export function compactHash(hash: string | null): string {
	if (hash) {
		return `${hash.slice(0, 18)}...${hash.slice(-16)}`;
	} else {
		return '';
	}
}

export function compactAddress(address: string | null): string {
	if (address) {
		return `${address.slice(0, 10)}...${address.slice(-8)}`;
	} else {
		return '';
	}
}
