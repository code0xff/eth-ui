import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process';
import * as helpers from '@/helpers';
import * as stores from '@/stores';

const ANVIL_PORT = 8547;
const ANVIL_URL = `http://127.0.0.1:${ANVIL_PORT}`;
const ANVIL_BIN = process.env.ANVIL_BIN ?? `${process.env.HOME}/.foundry/bin/anvil`;
const RUN_ANVIL_TESTS = process.env.RUN_ANVIL_TESTS === '1';

const SENDER_PRIVATE_KEY =
	'0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const RECEIVER_ADDRESS = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

let anvil: ChildProcessWithoutNullStreams | undefined;

async function sleep(ms: number): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForAnvilReady(timeoutMs = 10_000): Promise<void> {
	const start = Date.now();

	while (Date.now() - start < timeoutMs) {
		try {
			const response = await fetch(ANVIL_URL, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					jsonrpc: '2.0',
					method: 'eth_blockNumber',
					params: [],
					id: 1
				})
			});

			if (response.ok) {
				const json = (await response.json()) as { result?: string };
				if (typeof json.result === 'string' && json.result.startsWith('0x')) {
					return;
				}
			}
		} catch {
			// Retry until timeout.
		}

		await sleep(100);
	}

	throw new Error('anvil did not become ready in time');
}

async function waitForReceipt(hash: string, timeoutMs = 10_000): Promise<void> {
	const start = Date.now();
	const provider = await helpers.ensureProvider();

	while (Date.now() - start < timeoutMs) {
		const txWithReceipt = await provider.getTxWithReceipt(hash);
		if (txWithReceipt?.receipt) {
			expect(txWithReceipt.receipt.status).toBe(1);
			return;
		}
		await sleep(100);
	}

	throw new Error(`timed out waiting for receipt: ${hash}`);
}

describe.sequential.runIf(RUN_ANVIL_TESTS)('Foundry Anvil integration', () => {
	beforeAll(async () => {
		anvil = spawn(ANVIL_BIN, ['--host', '127.0.0.1', '--port', String(ANVIL_PORT)], {
			stdio: ['ignore', 'pipe', 'pipe']
		});
		await waitForAnvilReady();
	}, 20_000);

	beforeEach(async () => {
		await stores.providerStore.get()?.disconnect();
		stores.providerStore.reset();
		stores.rpcStore.set(ANVIL_URL);
	});

	afterAll(async () => {
		await stores.providerStore.get()?.disconnect();
		stores.providerStore.reset();

		anvil?.kill('SIGTERM');
		anvil = undefined;
	});

	it(
		'connects and fetches latest block through ensureProvider',
		async () => {
			const provider = await helpers.ensureProvider();
			expect(provider.connected()).toBe(true);

			const latest = await provider.getBlock('latest', true);
			expect(latest).not.toBeNull();
			expect(latest!.number).toBeGreaterThanOrEqual(0);
		},
		20_000
	);

	it(
		'sends a transaction with anvil default key and confirms receipt',
		async () => {
			const provider = await helpers.ensureProvider();
			const hash = await provider.sendTx(SENDER_PRIVATE_KEY, RECEIVER_ADDRESS, '', '', '1');

			expect(hash).toMatch(/^0x[0-9a-fA-F]{64}$/);
			await waitForReceipt(hash);
		},
		20_000
	);
});
