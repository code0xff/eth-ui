import { EthersAbiParser, EthersBlockProvider } from './ethers';
import type { BlockProvider } from './interfaces';

export type { BlockProvider } from './interfaces';

export function defaultBlockProvider(url: string, connectUrl?: string): BlockProvider {
	return new EthersBlockProvider(url, connectUrl);
}

export const AbiParser = new EthersAbiParser();
