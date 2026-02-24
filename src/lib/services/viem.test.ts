import { describe, expect, it } from 'vitest';
import { ViemBlockProvider } from './viem';

describe('ViemBlockProvider', () => {
	it('offNewBlock clears polling state', async () => {
		const provider = new ViemBlockProvider('https://rpc.example');
		const timer = setTimeout(() => undefined, 1000);

		(provider as unknown as { pollingActive: boolean }).pollingActive = true;
		(provider as unknown as { syncedBlockNumber: number }).syncedBlockNumber = 123;
		(provider as unknown as { pollingTimer: ReturnType<typeof setTimeout> }).pollingTimer = timer;

		await provider.offNewBlock();

		expect((provider as unknown as { pollingActive: boolean }).pollingActive).toBe(false);
		expect((provider as unknown as { syncedBlockNumber: number | undefined }).syncedBlockNumber).toBe(
			undefined
		);
		expect((provider as unknown as { pollingTimer: ReturnType<typeof setTimeout> | undefined }).pollingTimer).toBe(
			undefined
		);
	});

	it('disconnect clears client and network fields', async () => {
		const provider = new ViemBlockProvider('https://rpc.example');
		(provider as unknown as { client: object }).client = { connected: true };
		(provider as unknown as { network: object }).network = { chainId: 1n, name: 'eth' };

		await provider.disconnect();

		expect((provider as unknown as { client: object | undefined }).client).toBeUndefined();
		expect((provider as unknown as { network: object | undefined }).network).toBeUndefined();
	});
});
