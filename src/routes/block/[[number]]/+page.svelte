<script lang="ts">
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as services from '@/services';
	import * as stores from '@/stores';
	import * as types from '@/types';

	export let data: { number: string };

	let provider: services.BlockProvider | undefined;

	let block: types.Block | undefined | null;

	onMount(async () => {
		try {
			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
			stores.rpcStore.set(_rpc);

			provider = get(stores.providerStore);
			if (!provider) {
				provider = services.defaultBlockProvider(_rpc);
				stores.providerStore.set(provider);
			}

			const _blockNumber = parseInt(data.number);

			block = await provider.getBlockByNumber(_blockNumber, true);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
		}
	});
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Block #{block ? helpers.printNumber(block.number) : ''}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Number</Table.Cell>
							<Table.Cell class="w-5/6">{block ? helpers.printNumber(block.number) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Hash</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.hash : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Parent</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.parentHash : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Time</Table.Cell>
							<Table.Cell class="w-5/6"
								>{block ? helpers.timestampToDate(block.timestamp) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Transactions</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.transactions.length : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Etherbase</Table.Cell>
							<Table.Cell
								class="w-5/6 cursor-pointer"
								onclick={block?.miner ? () => goto(`/account/${block!.miner}`) : null}
								>{block ? block.miner : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Base Fee</Table.Cell>
							<Table.Cell class="w-5/6"
								>{block ? helpers.printWei(block.baseFeePerGas, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Used</Table.Cell>
							<Table.Cell class="w-5/6"
								>{block ? helpers.printNumber(block.gasUsed) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Limit</Table.Cell>
							<Table.Cell class="w-5/6"
								>{block ? helpers.printNumber(block.gasLimit) : ''}</Table.Cell
							>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Transactions</Card.Title>
			</Card.Header>
			<Card.Content class="h-110 overflow-y-auto">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Index</Table.Head>
							<Table.Head>Hash</Table.Head>
							<Table.Head>From</Table.Head>
							<Table.Head>To</Table.Head>
							<Table.Head>Value</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#if block}
							{#each block.prefetchedTransactions as tx}
								<Table.Row onclick={() => goto(`/tx/${tx.hash}`)} class="cursor-pointer">
									<Table.Cell>{tx.index}</Table.Cell>
									<Table.Cell>{helpers.compactHash(tx.hash)}</Table.Cell>
									<Table.Cell>{helpers.compactHash(tx.from, 8)}</Table.Cell>
									<Table.Cell>{helpers.compactHash(tx.to, 8)}</Table.Cell>
									<Table.Cell>{helpers.printWei(tx.value)}</Table.Cell>
								</Table.Row>
							{/each}
						{/if}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
