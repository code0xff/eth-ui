<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as stores from '@/stores';
	import * as helpers from '@/helpers';
	import * as constants from '@/constants';
	import * as types from '@/types';
	import Editor from './Editor.svelte';
	import Search from './Search.svelte';
	import { onMount } from 'svelte';

	let rpc = '';
	$: if (rpc) {
		stores.rpcStore.set(rpc);
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

	stores.syncStatusStore.subscribe((updatedSyncStatus) => {
		syncStatus = updatedSyncStatus;
	});
	stores.blockStore.subscribe((updatedBlocks) => {
		blockList = [...updatedBlocks.values()];
	});
	stores.txStore.subscribe((updatedTxs) => {
		txList = [...updatedTxs.values()];
	});
	stores.rpcStore.subscribe((updatedRpc) => {
		rpc = updatedRpc;
	});
	stores.rpcsStore.subscribe((updatedRpcs) => {
		rpcs = updatedRpcs;
	});
	stores.initializedStore.subscribe(async (updatedInitialized) => {
		initialized = updatedInitialized;
	});

	function resetSynced() {
		stores.blockStore.reset();
		stores.txStore.reset();

		let _provider = stores.providerStore.get();
		if (_provider) {
			_provider.disconnect();
			stores.providerStore.reset();
		}
	}

	async function runSync() {
		stores.syncStatusStore.set('processing');

		const _provider = await helpers.ensureProvider();

		const _interval = stores.intervalStore.get();
		await _provider.onNewBlock(async (newBlock) => {
			if (stores.syncStatusStore.get() !== 'processing') {
				await _provider.offNewBlock();
				return;
			}
			updateNewBlock(newBlock);
		}, _interval);
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
					resetSynced();
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

	function updateNewBlock(newBlock: types.Block) {
		const _blockStore = stores.blockStore.get();
		if (_blockStore.has(newBlock.number)) {
			return;
		}

		const _depth = stores.depthStore.get();
		if (_blockStore.size >= _depth) {
			const _blockList = [..._blockStore.values()];
			const _pruneBlockList = _blockList.slice(_depth - 1);
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
	}

	onMount(() => {
		document.addEventListener('visibilitychange', async () => {
			const _syncStatus = stores.syncStatusStore.get();
			if (_syncStatus === 'processing') {
				const _provider = stores.providerStore.get();
				if (_provider && !_provider.connected()) {
					await runSync();
				}
			}
		});
	});
</script>

<div class="flex min-h-0 flex-1 flex-col">
	<div class="shrink-0">
		<div class="mx-4">
			<div class="flex flex-col gap-4 xl:flex-row">
				<div class="flex min-w-0 flex-1 flex-row gap-4">
					<Select.Root
						type="single"
						disabled={!initialized || syncStatus === 'processing'}
						bind:value={rpc}
					>
						<Select.Trigger class="w-full cursor-pointer truncate">{rpc}</Select.Trigger>
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
		<div class="mx-4 mt-4">
			<Search />
		</div>
	</div>
	<div class="mx-4 mt-4 flex min-h-0 min-w-0 flex-1">
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
										class="cursor-pointer"
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
									<Table.Row onclick={() => goto(resolve(`/tx/${tx.hash}`))} class="cursor-pointer">
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
