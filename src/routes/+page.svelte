<script lang="ts">
	import { Block, JsonRpcProvider } from 'ethers';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { toggleMode } from 'mode-watcher';
	import { SunMoon } from '@lucide/svelte';
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import Button from '@/components/ui/button/button.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import * as stores from '@/stores';
	import * as helpers from '@/helpers';
	import * as constants from '@/constants';
	import type { BlockInfo, SyncStatus, TxInfo } from '@/types';

	let rpc: string = '';
	let provider: JsonRpcProvider;

	let syncStatus: SyncStatus = 'pending';
	let syncJobId: NodeJS.Timeout | undefined;

	let number: number | undefined;
	let blockList: BlockInfo[] = [];
	let txList: TxInfo[] = [];

	let searchParam: string = '';

	stores.blockNumberStore.subscribe((_number) => {
		number = _number;
	});
	stores.syncStatusStore.subscribe((_syncStatus) => {
		syncStatus = _syncStatus;
	});
	stores.syncJobIdStore.subscribe((_syncJobId) => {
		syncJobId = _syncJobId;
	});
	stores.blockListStore.subscribe((_blockList) => {
		blockList = [..._blockList];
	});
	stores.txListStore.subscribe((_txList) => {
		txList = [..._txList];
	});

	onMount(async () => {
		rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPC;
		if (syncStatus === 'pending') {
			await startSync(rpc);
		}
	});

	async function startSync(_rpc: string) {
		if (syncStatus === 'processing') {
			return;
		}

		rpc = _rpc.trim();
		if (!rpc || rpc === '') {
			rpc = constants.DEFAULT_RPC;
		}

		const _storedRpc = localStorage.getItem('rpc');
		if (rpc !== _storedRpc) {
			stores.blockCacheStore.set(new Map());
			stores.blockIndexStore.set(new Map());
			stores.blockListStore.set([]);

			stores.txCacheStore.set(new Map());
			stores.txListStore.set([]);

			stores.blockNumberStore.set(undefined);
			stores.providerStore.set(undefined);
		}

		stores.syncStatusStore.set('processing');

		provider = new JsonRpcProvider(rpc);
		stores.providerStore.set(provider);

		localStorage.setItem('rpc', rpc);

		if (!number) {
			number = await provider.getBlockNumber();
			const _block = await provider.getBlock(number, true);

			if (_block) {
				updateNewBlock(_block);
			}
		}

		const _syncJobId = setInterval(async () => {
			const _block = await provider.getBlock(number! + 1, true);

			if (_block) {
				updateNewBlock(_block);
			}
		}, 1000);
		stores.syncJobIdStore.set(_syncJobId);
	}

	function stopSync() {
		stores.syncStatusStore.set('stopped');
		if (syncJobId) {
			clearInterval(syncJobId);
			stores.syncJobIdStore.set(undefined);
		}
	}

	function updateNewBlock(_block: Block) {
		if (get(stores.blockCacheStore).get(_block.hash!)) {
			return;
		}

		while (get(stores.blockCacheStore).size >= constants.DEFAULT_CACHE_SIZE) {
			stores.blockCacheStore.update((_blockCache) => {
				const _cachedBlock = _blockCache.values().next().value;

				if (_cachedBlock) {
					stores.txCacheStore.update((_txCache) => {
						_cachedBlock.transactions.forEach((_txHash) => {
							_txCache.delete(_txHash);
						});
						return _txCache;
					});

					stores.blockIndexStore.update((_blockIndex) => {
						_blockIndex.delete(_cachedBlock.number);
						return _blockIndex;
					});

					_blockCache.delete(_cachedBlock.hash!);
				}
				return _blockCache;
			});
		}

		stores.blockNumberStore.set(_block.number);
		stores.blockIndexStore.update((_blockIndex) => {
			_blockIndex.set(_block.number, _block.hash!);
			return _blockIndex;
		});
		stores.blockCacheStore.update((_blockCache) => {
			_blockCache.set(_block.hash!, _block);
			return _blockCache;
		});
		stores.blockListStore.update((_blockList) => {
			_blockList = [
				{ number: _block.number, hash: _block.hash!, timestamp: _block.timestamp },
				..._blockList
			];
			return _blockList;
		});
		stores.txCacheStore.update((_txCache) => {
			_block.prefetchedTransactions.forEach((_tx) => {
				_txCache.set(_tx.hash, _tx);
			});
			return _txCache;
		});
		stores.txListStore.update((_txList) => {
			_block.prefetchedTransactions.forEach((_tx) => {
				_txList = [{ hash: _tx.hash, from: _tx.from, number: _block.number }, ..._txList];
			});
			return _txList;
		});
	}

	function search() {
		try {
			searchParam = searchParam.trim();
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
		} catch (e: any) {
			console.warn(e.toString());
			toast.error('invalid search condition');
		}
	}
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Input
							placeholder="RPC endpoint"
							bind:value={rpc}
							readonly={syncStatus === 'processing'}
						/>
					</div>
					<div>
						<Button
							onclick={() => (syncStatus === 'processing' ? stopSync() : startSync(rpc))}
							class="w-[80px] cursor-pointer"
							>{syncStatus === 'processing' ? 'Pause' : 'Start'}</Button
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
						<Input
							placeholder="Search by Address / Tx Hash / Block Number"
							bind:value={searchParam}
						/>
					</div>
					<div>
						<Button onclick={search}>Search</Button>
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
								{#each blockList as block}
									<Table.Row onclick={() => goto(`/block/${block.number}`)} class="cursor-pointer">
										<Table.Cell>{helpers.printNumber(block.number)}</Table.Cell>
										<Table.Cell>{helpers.compactHash(block.hash)}</Table.Cell>
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
								{#each txList as tx}
									<Table.Row onclick={() => goto(`/tx/${tx.hash}`)} class="cursor-pointer">
										<Table.Cell>{helpers.compactHash(tx.hash)}</Table.Cell>
										<Table.Cell>{helpers.compactAddress(tx.from)}</Table.Cell>
										<Table.Cell>{helpers.printNumber(tx.number)}</Table.Cell>
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
