import { EthersBlockProvider } from './ethers';
import type { BlockProvider } from './interfaces';

export * from './interfaces';

export function defaultBlockProvider(url: string): BlockProvider {
	return new EthersBlockProvider(url);
}
