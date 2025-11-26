<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import { Plus } from '@lucide/svelte';
	import Button from '@/components/ui/button/button.svelte';
	import * as Card from '@/components/ui/card/index.js';
	import Input from '@/components/ui/input/input.svelte';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table/index.js';
	import * as stores from '@/stores';
	import * as helpers from '@/helpers';
	import * as constants from '@/constants';
	import * as services from '@/services';
	import * as types from '@/types';
	import Editor from './Editor.svelte';

	let provider: services.BlockProvider | undefined;

	let rpc = '';
	let rpcs: string[] = [];

	let syncStatus: types.SyncStatus = 'idle';

	let blockList: types.Block[] = [];
	let txList: types.TxResponse[] = [];

	let searchParam: string = '';

	stores.syncStatusStore.subscribe((_syncStatus) => {
		syncStatus = _syncStatus;
	});
	stores.blockStore.subscribe((_blocks) => {
		blockList = [..._blocks.values()];
	});
	stores.txStore.subscribe((_txs) => {
		txList = [..._txs.values()];
	});
	stores.rpcStore.subscribe((_rpc) => {
		rpc = _rpc;
	});
	stores.providerStore.subscribe((_provider) => {
		provider = _provider;
	});
	stores.rpcsStore.subscribe((_rpcs) => {
		rpcs = _rpcs;
	});

	onMount(async () => {
		rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
		stores.rpcStore.set(rpc);
		const _rpcs = localStorage.getItem('rpcs');
		if (_rpcs) {
			rpcs = [...JSON.parse(_rpcs)];
		}

		const _blockListLimit = localStorage.getItem('blockListLimit');
		if (_blockListLimit) {
			stores.blockListLimitStore.set(parseInt(_blockListLimit));
		}

		const _interval = localStorage.getItem('interval');
		if (_interval) {
			stores.intervalStore.set(parseInt(_interval));
		}

		if (syncStatus === 'idle') {
			await startSync();
		}
	});

	async function startSync() {
		if (syncStatus === 'processing') {
			return;
		}

		rpc = rpc.trim();
		if (!rpc || rpc === '') {
			console.warn(`invalid rpc: ${rpc}`);
			toast(`invalid rpc: ${rpc}`);
			return;
		}

		try {
			stores.blockStore.set(new Map());
			stores.txStore.set(new Map());

			const _provider = get(stores.providerStore);
			if (_provider) {
				await _provider.disconnect();
				stores.providerStore.set(undefined);
			}

			stores.rpcStore.set(rpc);
			localStorage.setItem('rpc', rpc);

			stores.syncStatusStore.set('processing');

			provider = services.defaultBlockProvider(rpc);
			await provider.connect();

			const _interval = get(stores.intervalStore);
			provider.onNewBlock(updateNewBlock, _interval);

			stores.providerStore.set(provider);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}

			stopSync();
		}
	}

	async function stopSync() {
		try {
			provider?.offNewBlock();

			stores.providerStore.set(undefined);
			stores.syncStatusStore.set('stopped');
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
		}
	}

	function updateNewBlock(newBlock: types.Block) {
		const _blockStore = get(stores.blockStore);
		if (_blockStore.has(newBlock.number)) {
			return;
		}

		const _blockListLimit = get(stores.blockListLimitStore);
		if (_blockListLimit && _blockStore.size >= _blockListLimit) {
			const _blockList = [..._blockStore.values()];
			const _pruneBlockList = _blockList.slice(_blockListLimit - 1);
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

	function search() {
		try {
			searchParam = searchParam.trim();
			if (searchParam.length === 0) {
				return;
			}

			if (searchParam.startsWith('0x')) {
				if (searchParam.length === constants.ADDRESS_SIZE) {
					goto(`/account/${searchParam}`);
				} else if (searchParam.length === constants.HASH_SIZE) {
					goto(`/tx/${searchParam}`);
				} else {
					throw new Error('unsupported search condition');
				}
			} else {
				const _blockNumber = parseInt(searchParam.trim());
				if (isNaN(_blockNumber)) {
					throw new Error('invalid block number');
				}
				goto(`/block/${_blockNumber}`);
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
		}
	}
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Select.Root type="single" disabled={syncStatus === 'processing'} bind:value={rpc}>
							<Select.Trigger class="w-full cursor-pointer">{rpc}</Select.Trigger>
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
					<div>
						<Editor name="RPC" storage="rpcs" store={stores.rpcsStore} />
					</div>
					<div>
						<Button
							onclick={async () =>
								syncStatus === 'processing' ? await stopSync() : await startSync()}
							class="w-[80px] cursor-pointer"
							>{syncStatus === 'processing' ? 'Stop' : 'Start'}</Button
						>
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
						<Input
							placeholder="Search by Address / Tx Hash / Block Number"
							bind:value={searchParam}
						/>
					</div>
					<div>
						<Button class="cursor-pointer" onclick={search}>Search</Button>
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
