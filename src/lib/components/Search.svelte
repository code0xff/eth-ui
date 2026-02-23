<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { HistoryIcon, Trash2 } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import type * as types from '@/types';

	let searchParam: string = '';
	let openHistory = false;
	let currentRpc = '';
	let history: types.QueryHistoryItem[] = [];

	function refreshHistory() {
		const historyByRpc = stores.queryHistoryStore.get();
		history = currentRpc ? (historyByRpc[currentRpc] ?? []) : [];
	}

	function search() {
		helpers.tryExecute(() => {
			searchParam = searchParam.trim();
			if (searchParam.length === 0) {
				return;
			}

			if (searchParam.startsWith('0x')) {
				if (searchParam.length === constants.ADDRESS_SIZE) {
					goto(resolve(`/account/${searchParam}`));
				} else if (searchParam.length === constants.HASH_SIZE) {
					goto(resolve(`/tx/${searchParam}`));
				} else {
					throw new Error('unsupported search condition');
				}
			} else {
				const _blockNumber = Number.parseInt(searchParam.trim(), 10);
				if (Number.isNaN(_blockNumber)) {
					throw new Error('unsupported search condition');
				}
				goto(resolve(`/block/${_blockNumber}`));
			}
		});
	}

	function goToHistory(item: types.QueryHistoryItem) {
		switch (item.type) {
			case 'account':
				goto(resolve('/account/[[address]]', { address: item.value }));
				break;
			case 'tx':
				goto(resolve('/tx/[[hash]]', { hash: item.value }));
				break;
			case 'block':
				goto(resolve('/block/[[tag]]', { tag: item.value }));
				break;
		}
		openHistory = false;
	}

	function clearHistory() {
		if (!currentRpc) return;

		stores.queryHistoryStore.update((historyByRpc) => {
			const next = { ...historyByRpc };
			delete next[currentRpc];
			return next;
		});
	}

	function removeHistoryItem(item: types.QueryHistoryItem) {
		if (!currentRpc) return;

		stores.queryHistoryStore.update((historyByRpc) => {
			const rpcHistory = historyByRpc[currentRpc] ?? [];
			const filtered = rpcHistory.filter(
				(historyItem) => !(historyItem.type === item.type && historyItem.value === item.value)
			);

			return {
				...historyByRpc,
				[currentRpc]: filtered
			};
		});
	}

	onMount(() => {
		currentRpc = stores.rpcStore.get();
		refreshHistory();

		const unsubscribers = [
			stores.rpcStore.subscribe((rpc) => {
				currentRpc = rpc;
				refreshHistory();
			}),
			stores.queryHistoryStore.subscribe(() => {
				refreshHistory();
			})
		];

		return () => {
			unsubscribers.forEach((unsubscribe) => unsubscribe());
		};
	});
</script>

<div class="flex flex-row gap-2">
	<div class="w-full">
		<Input placeholder="Search by Address / Tx Hash / Block Number" bind:value={searchParam} />
	</div>
	<div>
		<Button class="cursor-pointer" variant="outline" onclick={search}>Search</Button>
	</div>
	<div>
		<Button class="cursor-pointer" variant="outline" size="icon" onclick={() => (openHistory = true)}>
			<HistoryIcon />
		</Button>
	</div>
</div>

<Dialog.Root bind:open={openHistory}>
	<Dialog.Content class="w-[min(96vw,900px)] sm:min-w-[640px]">
		<Dialog.Header>
			<Dialog.Title>Query History</Dialog.Title>
			<Dialog.Description class="break-all">{currentRpc || 'rpc not selected'}</Dialog.Description>
		</Dialog.Header>

		{#if history.length === 0}
			<div class="py-4 text-sm text-muted-foreground">no history for current rpc</div>
		{:else}
			<div class="max-h-80 overflow-y-auto">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Type</Table.Head>
							<Table.Head>Query</Table.Head>
							<Table.Head>Time</Table.Head>
							<Table.Head>Remove</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each history as item}
							<Table.Row>
								<Table.Cell>{item.type}</Table.Cell>
								<Table.Cell onclick={() => goToHistory(item)}>
									<Input readonly value={item.value} class="cursor-pointer" />
								</Table.Cell>
								<Table.Cell>{helpers.timestampToDate(Math.floor(item.queriedAt / 1000))}</Table.Cell>
								<Table.Cell>
									<Button
										class="cursor-pointer"
										variant="outline"
										size="icon"
										onclick={() => removeHistoryItem(item)}
									>
										<Trash2 />
									</Button>
								</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		{/if}

		<Dialog.Footer>
			<Button class="cursor-pointer" variant="outline" onclick={clearHistory}>Clear</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
