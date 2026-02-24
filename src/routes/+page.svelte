<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import * as Accordion from '@/components/ui/accordion';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as stores from '@/stores';
	import * as helpers from '@/helpers';
	import * as constants from '@/constants';
	import * as types from '@/types';
	import BlockMetrics from '@/components/BlockMetrics.svelte';
	import Editor from '@/components/Editor.svelte';
	import Search from '@/components/Search.svelte';

	let selectedRpc = '';
	$: if (selectedRpc) {
		stores.rpcStore.set(selectedRpc);
	}
	$: if (initialized) {
		const _syncStatus = stores.syncStatusStore.get();
		if (_syncStatus === 'idle') {
			startSync();
		}
	}
	let rpcs: string[] = [];

	let syncStatus: types.SyncStatus = 'idle';
	let initialized = false;

	let blockList: types.Block[] = [];
	let txList: types.TxResponse[] = [];

	let metricsOpen = false;
	let normalizedFilterAddresses: string[] = [];
	let highlightedBlockNumbers = new Set<number>();
	let highlightedTxHashes = new Set<string>();

	function normalizeAddresses(addresses: string[]): string[] {
		return [...new Set(addresses.map((address) => address.trim().toLowerCase()).filter(Boolean))];
	}

	async function txMatchesFilters(
		tx: types.TxResponse,
		filters: Set<string>,
		filtersWithoutPrefix: string[],
		provider: Awaited<ReturnType<typeof helpers.ensureProvider>>
	): Promise<boolean> {
		const from = tx.from?.toLowerCase();
		const to = tx.to?.toLowerCase();
		if ((from && filters.has(from)) || (to && filters.has(to))) {
			return true;
		}

		const receipt = await provider.getTxReceipt(tx.hash);
		if (!receipt) {
			return false;
		}

		for (const log of receipt.logs) {
			try {
				const parsed = JSON.parse(log);
				const topics = Array.isArray(parsed?.topics) ? parsed.topics : [];
				for (const topic of topics) {
					if (typeof topic !== 'string') {
						continue;
					}

					const normalizedTopic = topic.toLowerCase();
					if (filters.has(normalizedTopic)) {
						return true;
					}
					for (const filterWithoutPrefix of filtersWithoutPrefix) {
						if (filterWithoutPrefix && normalizedTopic.includes(filterWithoutPrefix)) {
							return true;
						}
					}
				}
			} catch {
				continue;
			}
		}

		return false;
	}

	async function resetSynced() {
		stores.blockStore.reset();
		stores.txStore.reset();
		stores.highlightedBlockNumbersStore.reset();
		stores.highlightedTxHashesStore.reset();

		let _provider = stores.providerStore.get();
		if (_provider) {
			await _provider.disconnect();
			stores.providerStore.reset();
		}
	}

	async function runSync() {
		stores.syncStatusStore.set('processing');

		const _provider = await helpers.ensureProvider();

		await _provider.onNewBlock(async (newBlock) => {
			if (stores.syncStatusStore.get() !== 'processing') {
				await _provider.offNewBlock();
				return;
			}
			await updateNewBlock(newBlock);
		});
	}

	async function startSync() {
		if (syncStatus === 'processing') {
			return;
		}

		await helpers.tryExecuteAsync(
			async () => {
				const _provider = stores.providerStore.get();
				const _rpc = stores.rpcStore.get();

				if (_provider?.getUrl() !== _rpc) {
					await resetSynced();
				}
				await runSync();
			},
			false,
			stopSync
		);
	}

	async function stopSync() {
		await helpers.tryExecuteAsync(async () => {
			await stores.providerStore.get()?.offNewBlock();

			stores.syncStatusStore.set('stopped');
		});
	}

	async function updateNewBlock(newBlock: types.Block) {
		let filteredTxHashes: string[] = [];
		const hasFilters = normalizedFilterAddresses.length > 0;

		if (hasFilters) {
			const filters = new Set(normalizedFilterAddresses);
			const filtersWithoutPrefix = normalizedFilterAddresses.map((address) =>
				address.startsWith('0x') ? address.slice(2) : address
			);
			const provider = await helpers.ensureProvider();

			const matched = await Promise.all(
				newBlock.prefetchedTransactions.map(async (tx) => ({
					tx,
					matched: await txMatchesFilters(tx, filters, filtersWithoutPrefix, provider)
				}))
			);
			filteredTxHashes = matched.filter(({ matched }) => matched).map(({ tx }) => tx.hash);
		}

		const _blockStore = stores.blockStore.get();
		if (_blockStore.has(newBlock.number)) {
			return;
		}

		const _depth = stores.depthStore.get();
		if (_blockStore.size >= _depth) {
			const _blockList = [..._blockStore.values()];
			const _pruneBlockList = _blockList.slice(_depth - 1);
			const prunedBlockNumbers = new Set(_pruneBlockList.map((block) => block.number));
			const prunedTxHashes = new Set(_pruneBlockList.flatMap((block) => block.transactions));

			highlightedBlockNumbers = new Set(
				[...highlightedBlockNumbers].filter((blockNumber) => !prunedBlockNumbers.has(blockNumber))
			);
			highlightedTxHashes = new Set(
				[...highlightedTxHashes].filter((txHash) => !prunedTxHashes.has(txHash))
			);
			stores.highlightedBlockNumbersStore.set([...highlightedBlockNumbers]);
			stores.highlightedTxHashesStore.set([...highlightedTxHashes]);

			stores.txStore.update((_txs) => {
				_pruneBlockList.forEach((_block) => {
					_block.transactions.forEach((_txHash) => {
						_txs.delete(_txHash);
					});
				});
				return _txs;
			});
			stores.blockStore.update((_blocks) => {
				_pruneBlockList.forEach((_block) => {
					_blocks.delete(_block.number);
				});
				return _blocks;
			});
		}

		stores.blockStore.update((blocks) => {
			return new Map([[newBlock.number, newBlock], ...blocks]);
		});
		stores.txStore.update((txs) => {
			const _newTxs = new Map(newBlock.prefetchedTransactions.map((tx) => [tx.hash, tx]));
			return new Map([..._newTxs, ...txs]);
		});

		if (hasFilters && filteredTxHashes.length > 0) {
			highlightedBlockNumbers = new Set([newBlock.number, ...highlightedBlockNumbers]);
			highlightedTxHashes = new Set([...filteredTxHashes, ...highlightedTxHashes]);
			stores.highlightedBlockNumbersStore.set([...highlightedBlockNumbers]);
			stores.highlightedTxHashesStore.set([...highlightedTxHashes]);
		}
	}

	onMount(() => {
		metricsOpen = stores.metricsStore.get();
		normalizedFilterAddresses = normalizeAddresses(stores.filterAddressesStore.get());

		const unsubscribers = [
			stores.syncStatusStore.subscribe((updatedSyncStatus) => {
				syncStatus = updatedSyncStatus;
			}),
			stores.blockStore.subscribe((updatedBlocks) => {
				blockList = [...updatedBlocks.values()];
			}),
			stores.txStore.subscribe((updatedTxs) => {
				txList = [...updatedTxs.values()];
			}),
			stores.rpcStore.subscribe((updatedRpc) => {
				selectedRpc = updatedRpc;
			}),
			stores.rpcsStore.subscribe((updatedRpcs) => {
				rpcs = updatedRpcs;
			}),
			stores.filterAddressesStore.subscribe(async (updatedFilterAddresses) => {
				const nextNormalizedFilterAddresses = normalizeAddresses(updatedFilterAddresses);
				const previous = normalizedFilterAddresses.join(',');
				const next = nextNormalizedFilterAddresses.join(',');

				if (previous === next) {
					return;
				}

				normalizedFilterAddresses = nextNormalizedFilterAddresses;
				highlightedBlockNumbers = new Set();
				highlightedTxHashes = new Set();
				stores.highlightedBlockNumbersStore.reset();
				stores.highlightedTxHashesStore.reset();

				if (!initialized) {
					return;
				}

				await resetSynced();
				if (stores.syncStatusStore.get() === 'processing') {
					await runSync();
				}
			}),
			stores.initializedStore.subscribe((updatedInitialized) => {
				initialized = updatedInitialized;
			}),
			stores.highlightedBlockNumbersStore.subscribe((updatedHighlightedBlockNumbers) => {
				highlightedBlockNumbers = new Set(updatedHighlightedBlockNumbers);
			}),
			stores.highlightedTxHashesStore.subscribe((updatedHighlightedTxHashes) => {
				highlightedTxHashes = new Set(updatedHighlightedTxHashes);
			})
		];

		const handleVisibilityChange = async () => {
			const _syncStatus = stores.syncStatusStore.get();
			if (_syncStatus === 'processing') {
				const _provider = stores.providerStore.get();
				if (_provider && !_provider.connected()) {
					await runSync();
				}
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			unsubscribers.forEach((unsubscribe) => unsubscribe());
		};
	});
</script>

<div class="mx-4 flex min-h-0 flex-1 flex-col">
	<div class="shrink-0">
		<div>
			<div class="flex flex-col gap-2 xl:flex-row">
				<div class="flex min-w-0 flex-1 flex-row gap-2">
					<Select.Root
						type="single"
						disabled={!initialized || syncStatus === 'processing'}
						bind:value={selectedRpc}
					>
						<Select.Trigger class="w-full cursor-pointer truncate">{selectedRpc}</Select.Trigger>
						<Select.Content>
							{#each constants.DEFAULT_RPCS as rpc}
								<Select.Item value={rpc}>{rpc}</Select.Item>
							{/each}
							{#each rpcs as rpc}
								<Select.Item value={rpc}>{rpc}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					<Editor name="RPC" store={stores.rpcsStore} />
				</div>
				<div class="max-xl:w-full">
					<Button
						disabled={!initialized}
						variant="outline"
						onclick={async () =>
							syncStatus === 'processing' ? await stopSync() : await startSync()}
						class="w-full cursor-pointer xl:w-[80px]"
					>
						{syncStatus === 'processing' ? 'Stop' : 'Start'}
					</Button>
				</div>
			</div>
		</div>
		<div class="mt-4">
			<Search />
		</div>
		<div>
			<Accordion.Root type="single" value={metricsOpen ? 'metrics' : undefined}>
				<Accordion.Item value="metrics">
					<Accordion.Trigger class="cursor-pointer px-4">Block Metrics</Accordion.Trigger>

					<Accordion.Content>
						<BlockMetrics blocks={blockList} />
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	</div>
	<div class="flex min-h-0 min-w-0 flex-1">
		<div class="flex min-h-0 min-w-0 flex-1 flex-col gap-4 xl:flex-row xl:gap-4">
			<div class="flex min-h-0 min-w-0 flex-1">
				<Card.Root class="flex min-h-0 min-w-0 flex-1 flex-col">
					<Card.Header class="shrink-0">
						<Card.Title>Blocks</Card.Title>
					</Card.Header>
					<Card.Content class="min-h-0 flex-1 overflow-y-auto">
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Number</Table.Head>
									<Table.Head>Hash</Table.Head>
									<Table.Head>Txn</Table.Head>
									<Table.Head>Time</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each blockList as block}
									<Table.Row
										onclick={() => goto(resolve(`/block/${block.number}`))}
										class={`cursor-pointer ${
											highlightedBlockNumbers.has(block.number)
												? '!bg-foreground !text-background'
												: ''
										}`}
									>
										<Table.Cell>{helpers.printNumber(block.number)}</Table.Cell>
										<Table.Cell>{helpers.compactHash(block.hash)}</Table.Cell>
										<Table.Cell>{helpers.printNumber(block.transactions.length)}</Table.Cell>
										<Table.Cell>{helpers.timestampToDate(block.timestamp)}</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="flex min-h-0 min-w-0 flex-1">
				<Card.Root class="flex min-h-0 min-w-0 flex-1 flex-col">
					<Card.Header class="shrink-0">
						<Card.Title>Txs</Card.Title>
					</Card.Header>
					<Card.Content class="min-h-0 flex-1 overflow-y-auto">
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Hash</Table.Head>
									<Table.Head>Addresses</Table.Head>
									<Table.Head>Number</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each txList as tx}
									<Table.Row
										onclick={() => goto(resolve(`/tx/${tx.hash}`))}
										class={`cursor-pointer ${
											highlightedTxHashes.has(tx.hash) ? '!bg-foreground !text-background' : ''
										}`}
									>
										<Table.Cell>{helpers.compactHash(tx.hash)}</Table.Cell>
										<Table.Cell>
											<div>
												<div>
													from&nbsp{helpers.compactHash(tx.from)}
												</div>
												<div>
													to&nbsp;&nbsp;&nbsp;{helpers.compactHash(tx.to)}
												</div>
											</div>
										</Table.Cell>
										<Table.Cell>{helpers.printNumber(tx.blockNumber)}</Table.Cell>
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
