<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '@/components/ui/button/button.svelte';
	import * as Card from '@/components/ui/card';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as stores from '@/stores';
	import * as helpers from '@/helpers';
	import * as constants from '@/constants';
	import * as types from '@/types';
	import Editor from './Editor.svelte';
	import Search from './Search.svelte';

	let rpc = '';
	$: if (rpc) {
		stores.rpcStore.set(rpc);
	}
	let rpcs: string[] = [];

	let syncStatus: types.SyncStatus = 'idle';

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
	stores.initializedStore.subscribe(async (initialized) => {
		if (initialized) {
			await startSync();
		}
	});

	async function startSync() {
		if (syncStatus === 'processing') {
			return;
		}

		await helpers.tryExecuteAsync(
			async () => {
				stores.blockStore.reset();
				stores.txStore.reset();

				let _provider = stores.providerStore.get();
				if (_provider) {
					await _provider.disconnect();
					stores.providerStore.reset();
				}

				stores.syncStatusStore.set('processing');

				_provider = helpers.ensureProvider();
				await _provider.connect();

				const _interval = stores.intervalStore.get();
				_provider.onNewBlock(updateNewBlock, _interval);

				stores.providerStore.set(_provider);
			},
			false,
			stopSync
		);
	}

	async function stopSync() {
		helpers.tryExecute(() => {
			stores.providerStore.get()?.offNewBlock();

			stores.providerStore.reset();
			stores.syncStatusStore.set('stopped');
		});
	}

	function updateNewBlock(newBlock: types.Block) {
		const _blockStore = stores.blockStore.get();
		if (_blockStore.has(newBlock.number)) {
			return;
		}

		const _blocklistLimit = stores.blocklistLimitStore.get();
		if (_blocklistLimit && _blockStore.size >= _blocklistLimit) {
			const _blockList = [..._blockStore.values()];
			const _pruneBlockList = _blockList.slice(_blocklistLimit - 1);
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
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-col gap-4 md:flex-row">
					<div class="min-w-0 flex-1">
						<Select.Root type="single" disabled={syncStatus === 'processing'} bind:value={rpc}>
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
					</div>
					<div class="flex flex-row gap-4 max-md:w-full">
						<div>
							<Editor name="RPC" store={stores.rpcsStore} />
						</div>
						<div class="max-md:w-full">
							<Button
								onclick={async () =>
									syncStatus === 'processing' ? await stopSync() : await startSync()}
								class="w-full cursor-pointer md:w-[80px]"
							>
								{syncStatus === 'processing' ? 'Stop' : 'Start'}
							</Button>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Search />
	</div>
	<div class="m-4">
		<div class="lg:flex lg:flex-row lg:gap-4">
			<div class="lg:flex-1">
				<Card.Root>
					<Card.Header>
						<Card.Title>Blocks</Card.Title>
					</Card.Header>
					<Card.Content class="h-110 overflow-y-auto">
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
									<Table.Row onclick={() => goto(`/block/${block.number}`)} class="cursor-pointer">
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
			<div class="max-lg:mt-4 lg:flex-1">
				<Card.Root>
					<Card.Header>
						<Card.Title>Transactions</Card.Title>
					</Card.Header>
					<Card.Content class="h-110 overflow-y-auto">
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
									<Table.Row onclick={() => goto(`/tx/${tx.hash}`)} class="cursor-pointer">
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
