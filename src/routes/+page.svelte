<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import { Block, JsonRpcProvider, TransactionResponse } from 'ethers';
	import {
		blockIndexStore,
		blockListStore,
		blockNumberStore,
		blockStore,
		compactAddress,
		compactHash,
		printNumber,
		providerStore,
		syncingStore,
		syncJobStore,
		timestampToDate,
		txListStore,
		txStore
	} from '@/index';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { toggleMode } from 'mode-watcher';
	import { SunMoon } from '@lucide/svelte';

	let rpc: string = '';
	let provider: JsonRpcProvider;

	let syncing: boolean = false;
	let syncJobId: NodeJS.Timeout | undefined;

	let number: number;
	let blocks: Block[] = [];
	let txs: TransactionResponse[] = [];

	blockNumberStore.subscribe((blockNumber) => {
		number = blockNumber;
	});
	syncingStore.subscribe((isSyncing) => {
		syncing = isSyncing;
	});
	syncJobStore.subscribe((syncJob) => {
		syncJobId = syncJob;
	});
	blockStore.subscribe((blockStore) => {
		blocks = [...blockStore.values()].reverse();
	});
	txStore.subscribe((txStore) => {
		txs = [...txStore.values()].reverse();
	});
	providerStore.subscribe((providerStore) => {
		provider = providerStore;
	});

	onMount(() => {
		rpc = localStorage.getItem('rpc') ?? '';
	});

	async function getBlockNumber(provider: JsonRpcProvider): Promise<number> {
		return provider.getBlockNumber();
	}

	async function getBlockByNumber(provider: JsonRpcProvider, number: number): Promise<any> {
		return provider.getBlock(number, true);
	}

	async function startSync(rpc: string) {
		syncingStore.set(true);
		providerStore.set(new JsonRpcProvider(rpc.trim()));

		localStorage.setItem('rpc', rpc.trim());

		if (!number) {
			number = await getBlockNumber(provider);
			const block = await getBlockByNumber(provider, number);

			if (block) {
				updateNewBlock(block);
			}
		}

		const syncJobId = setInterval(async () => {
			const block = await getBlockByNumber(provider, number + 1);

			if (block) {
				updateNewBlock(block);
			}
		}, 1000);
		syncJobStore.set(syncJobId);
	}

	function stopSync() {
		syncingStore.set(false);
		if (syncJobId) {
			clearInterval(syncJobId);
			syncJobStore.set(undefined);
		}
	}

	function updateNewBlock(block: Block) {
		blockNumberStore.set(block.number);
		blockIndexStore.update((blockIndex) => {
			blockIndex.set(block.number, block.hash!);
			return blockIndex;
		});
		blockStore.update((blockStore) => {
			blockStore.set(block.hash!, block);
			return blockStore;
		});
		blockListStore.update((blockList) => {
			blockList = [
				{ number: block.number, hash: block.hash!, timestamp: block.timestamp },
				...blockList
			];
			return blockList;
		});
		txStore.update((txStore) => {
			block.prefetchedTransactions.forEach((tx) => {
				txStore.set(tx.hash, tx);
			});
			return txStore;
		});
		txListStore.update((txList) => {
			block.transactions.forEach((hash) => {
				txList = [{ hash, number: block.number }, ...txList];
			});
			return txList;
		});
	}
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Input placeholder="RPC endpoint" bind:value={rpc} disabled={syncing} />
					</div>
					<div>
						<Button
							onclick={() => (syncing ? stopSync() : startSync(rpc))}
							class="w-[80px] cursor-pointer">{syncing ? 'Pause' : 'Start'}</Button
						>
					</div>
					<div>
						<Button onclick={toggleMode} class="cursor-pointer">
							<SunMoon />
						</Button>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Input placeholder="Search by..." />
					</div>
					<div>
						<Button>Search</Button>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<div class="lg:flex lg:flex-row lg:gap-4">
			<div class="lg:flex-1">
				<Card.Root>
					<Card.Header>
						<Card.Title>Blocks</Card.Title>
					</Card.Header>
					<Card.Content class="h-120 overflow-y-auto">
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Number</Table.Head>
									<Table.Head>Hash</Table.Head>
									<Table.Head>Time</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each blocks as block}
									<Table.Row onclick={() => goto(`/block/${block.number}`)} class="cursor-pointer">
										<Table.Cell>{printNumber(block.number)}</Table.Cell>
										<Table.Cell>{compactHash(block.hash)}</Table.Cell>
										<Table.Cell>{timestampToDate(block.timestamp)}</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="max-lg:mt-4 lg:flex-1">
				<Card.Root>
					<Card.Header>
						<Card.Title>Transactions</Card.Title>
					</Card.Header>
					<Card.Content class="h-120 overflow-y-auto">
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Hash</Table.Head>
									<Table.Head>From</Table.Head>
									<Table.Head>Number</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each txs as tx}
									<Table.Row onclick={() => goto(`/tx/${tx.hash}`)} class="cursor-pointer">
										<Table.Cell>{compactHash(tx.hash)}</Table.Cell>
										<Table.Cell>{compactAddress(tx.from)}</Table.Cell>
										<Table.Cell>{printNumber(tx.blockNumber)}</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</div>
</div>
