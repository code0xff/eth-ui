import { EthersAbiParser, EthersBlockProvider } from './ethers';
import type { BlockProvider } from './interfaces';

export type { BlockProvider } from './interfaces';

export function defaultBlockProvider(url: string): BlockProvider {
	return new EthersBlockProvider(url);
}

export const AbiParser = new EthersAbiParser();
