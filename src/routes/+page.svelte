<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import { Block, JsonRpcProvider } from 'ethers';
	import {
		blockIndexStore,
		blockListStore,
		blockNumberStore,
		blockCacheStore,
		compactAddress,
		compactHash,
		printNumber,
		providerStore,
		syncingStore,
		syncJobStore,
		timestampToDate,
		txListStore,
		txCacheStore
	} from '@/index';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { toggleMode } from 'mode-watcher';
	import { SunMoon } from '@lucide/svelte';
	import { ADDRESS_SIZE, DEFAULT_RPC, HASH_SIZE } from '@/constants';
	import { get } from 'svelte/store';

	let rpc: string = '';
	let provider: JsonRpcProvider;

	let syncing: boolean = false;
	let syncJobId: NodeJS.Timeout | undefined;

	let number: number | undefined;
	let blockList: BlockInfo[] = [];
	let txList: TxInfo[] = [];

	let searchParam: string = '';

	blockNumberStore.subscribe((_number) => {
		number = _number;
	});
	syncingStore.subscribe((_syncing) => {
		syncing = _syncing;
	});
	syncJobStore.subscribe((_syncJobId) => {
		syncJobId = _syncJobId;
	});
	blockListStore.subscribe((_blockList) => {
		blockList = [..._blockList];
	});
	txListStore.subscribe((_txList) => {
		txList = [..._txList];
	});

	onMount(async () => {
		rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
		await startSync(rpc);
	});

	async function startSync(rpc: string) {
		if (syncing) {
			return;
		}

		rpc = rpc.trim();

		const storedRpc = localStorage.getItem('rpc');
		if (rpc !== storedRpc) {
			blockCacheStore.set(new Map());
			blockIndexStore.set(new Map());
			blockListStore.set([]);

			txCacheStore.set(new Map());
			txListStore.set([]);

			blockNumberStore.set(undefined);
			providerStore.set(undefined);
		}

		syncingStore.set(true);

		provider = new JsonRpcProvider(rpc);
		providerStore.set(provider);

		localStorage.setItem('rpc', rpc);

		if (!number) {
			number = await provider.getBlockNumber();
			const block = await provider.getBlock(number, true);

			if (block) {
				updateNewBlock(block);
			}
		}

		const syncJobId = setInterval(async () => {
			const block = await provider.getBlock(number! + 1, true);

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
		if (get(blockCacheStore).get(block.hash!)) {
			return;
		}

		blockNumberStore.set(block.number);
		blockIndexStore.update((_blockIndex) => {
			_blockIndex.set(block.number, block.hash!);
			return _blockIndex;
		});
		blockCacheStore.update((_blockCache) => {
			_blockCache.set(block.hash!, block);
			return _blockCache;
		});
		blockListStore.update((_blockList) => {
			_blockList = [
				{ number: block.number, hash: block.hash!, timestamp: block.timestamp },
				..._blockList
			];
			return _blockList;
		});
		txCacheStore.update((_txCache) => {
			block.prefetchedTransactions.forEach((tx) => {
				_txCache.set(tx.hash, tx);
			});
			return _txCache;
		});
		txListStore.update((_txList) => {
			block.prefetchedTransactions.forEach((tx) => {
				_txList = [{ hash: tx.hash, from: tx.from, number: block.number }, ..._txList];
			});
			return _txList;
		});
	}

	function search() {
		try {
			if (searchParam.startsWith('0x')) {
				if (searchParam.length === ADDRESS_SIZE) {
					goto(`/account/${searchParam}`);
				} else if (searchParam.length === HASH_SIZE) {
					goto(`/tx/${searchParam}`);
				} else {
					throw new Error('unsupported search condition');
				}
			} else {
				const blockNumber = parseInt(searchParam.trim());
				if (isNaN(blockNumber)) {
					throw new Error('invalid block number');
				}
				goto(`/block/${blockNumber}`);
			}
		} catch (e: any) {
			// TODO: support toast to show info message to user
			console.warn(e.toString());
		}
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
								{#each txList as tx}
									<Table.Row onclick={() => goto(`/tx/${tx.hash}`)} class="cursor-pointer">
										<Table.Cell>{compactHash(tx.hash)}</Table.Cell>
										<Table.Cell>{compactAddress(tx.from)}</Table.Cell>
										<Table.Cell>{printNumber(tx.number)}</Table.Cell>
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
