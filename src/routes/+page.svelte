<script lang="ts">
	import * as ethers from 'ethers';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { toggleMode } from 'mode-watcher';
	import { CogIcon, SunMoon } from '@lucide/svelte';
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import Button from '@/components/ui/button/button.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import * as Dialog from '@/components/ui/dialog/index.js';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import * as stores from '@/stores';
	import * as helpers from '@/helpers';
	import * as constants from '@/constants';
	import * as types from '@/types';

	let provider: ethers.Provider | undefined;

	let rpc: string = '';
	let blockListLimit: number = constants.DEFAULT_BLOCK_LIST_LIMIT;
	let syncStatus: types.SyncStatus = 'idle';

	let settingOpen: boolean = false;

	let blockList: types.BlockInfo[] = [];
	let txList: types.TxInfo[] = [];

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
	stores.providerStore.subscribe((_provider) => {
		provider = _provider;
	});

	onMount(async () => {
		rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPC;
		stores.rpcStore.set(rpc);

		const _blockListLimit = localStorage.getItem('blockListLimit');
		blockListLimit = _blockListLimit
			? parseInt(_blockListLimit)
			: constants.DEFAULT_BLOCK_LIST_LIMIT;
		stores.blockListLimitStore.set(blockListLimit);

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
			rpc = constants.DEFAULT_RPC;
		}

		try {
			stores.blockStore.set(new Map());
			stores.txStore.set(new Map());

			const _provider = get(stores.providerStore);
			if (_provider) {
				await _provider.destroy();
				stores.providerStore.set(undefined);
			}

			stores.rpcStore.set(rpc);
			localStorage.setItem('rpc', rpc);

			stores.syncStatusStore.set('processing');

			provider = helpers.getProvider();
			provider.on('block', async (_number) => {
				const _block = await provider?.getBlock(_number, true);
				if (_block) {
					updateNewBlock(_block);
				}
			});
		} catch (_e: any) {
			stopSync();

			console.error(_e.toString());
			toast(_e.toString());
		}
	}

	function stopSync() {
		try {
			if (
				provider &&
				provider instanceof ethers.WebSocketProvider &&
				(provider as ethers.WebSocketProvider).ready
			) {
				provider?.off('block');
			}
			stores.syncStatusStore.set('stopped');
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	}

	function updateNewBlock(_newBlock: ethers.Block) {
		const _blockStore = get(stores.blockStore);
		if (_blockStore.has(_newBlock.number)) {
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

		stores.blockStore.update((_blocks) => {
			return new Map([
				[
					_newBlock.number,
					{
						number: _newBlock.number,
						hash: _newBlock.hash,
						timestamp: _newBlock.timestamp,
						transactions: [..._newBlock.transactions]
					}
				],
				..._blocks
			]);
		});
		stores.txStore.update((_txs) => {
			const _newTxs = new Map(
				_newBlock.prefetchedTransactions.map((_tx) => [
					_tx.hash,
					{ hash: _tx.hash, from: _tx.from, to: _tx.to, blockNumber: _newBlock.number }
				])
			);
			return new Map([..._newTxs, ..._txs]);
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
		} catch (_e: any) {
			console.warn(_e.toString());
			toast.error('invalid search condition');
		}
	}

	function saveSetting() {
		if (!blockListLimit || blockListLimit < constants.MIN_BLOCK_LIST_LIMIT) {
			toast(
				`invalid block list limit: block list limit must be at least ${constants.MIN_BLOCK_LIST_LIMIT}`
			);
			return;
		}
		localStorage.setItem('blockListLimit', blockListLimit.toString());
		stores.blockListLimitStore.set(blockListLimit);
		settingOpen = false;

		toast('successfully saved');
	}
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Input
							placeholder={`RPC endpoint (default: ${constants.DEFAULT_RPC})`}
							bind:value={rpc}
							readonly={syncStatus === 'processing'}
						/>
					</div>
					<div>
						<Button
							onclick={() => (syncStatus === 'processing' ? stopSync() : startSync())}
							class="w-[80px] cursor-pointer"
							>{syncStatus === 'processing' ? 'Stop' : 'Start'}</Button
						>
					</div>
					<div>
						<Button
							class="cursor-pointer"
							onclick={() => {
								settingOpen = true;
							}}
						>
							<CogIcon />
						</Button>
						<Dialog.Root bind:open={settingOpen}>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Setting</Dialog.Title>
									<Dialog.Description>
										<Table.Root>
											<Table.Body>
												<Table.Row>
													<Table.Cell>Block list limit</Table.Cell>
													<Table.Cell>
														<Input
															type="number"
															min={constants.MIN_BLOCK_LIST_LIMIT}
															placeholder={constants.DEFAULT_BLOCK_LIST_LIMIT.toString()}
															bind:value={blockListLimit}
														/>
													</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Dialog.Description>
								</Dialog.Header>
								<Dialog.Footer>
									<Button class="cursor-pointer" onclick={saveSetting}>Save changes</Button>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
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
									<Table.Head>From</Table.Head>
									<Table.Head>Number</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each txList as tx}
									<Table.Row onclick={() => goto(`/tx/${tx.hash}`)} class="cursor-pointer">
										<Table.Cell>{helpers.compactHash(tx.hash)}</Table.Cell>
										<Table.Cell>{helpers.compactHash(tx.from)}</Table.Cell>
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
