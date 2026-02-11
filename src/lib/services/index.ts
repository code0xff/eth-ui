import { EthersAbiParser, EthersBlockProvider } from './ethers';
import type { BlockProvider } from './interfaces';
import { ViemBlockProvider } from './viem';

export type { BlockProvider } from './interfaces';

export function defaultBlockProvider(url: string, connectUrl?: string): BlockProvider {
	const providerType = import.meta.env.VITE_RPC_PROVIDER?.toLowerCase();
	if (providerType === 'viem') {
		return new ViemBlockProvider(url, connectUrl);
	}

	return new EthersBlockProvider(url, connectUrl);
}

export const AbiParser = new EthersAbiParser();
