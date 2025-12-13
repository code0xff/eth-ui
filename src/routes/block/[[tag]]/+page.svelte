<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';

	export let data: { tag: string };

	let block: types.Block | null;

	stores.initializedStore.subscribe(async (initialized) => {
		if (initialized) {
			await fetchBlock(data.tag);
		}
	});

	$: if (data) {
		fetchBlock(data.tag);
	}

	async function fetchBlock(blockTag: string) {
		await helpers.tryExecuteAsync(async () => {
			if (!blockTag) {
				throw new Error(`invalid block tag: ${blockTag}`);
			}

			const _provider = await helpers.ensureProvider();

			let _blockTag: string | number = blockTag;
			if (!_blockTag?.startsWith('0x')) {
				_blockTag = parseInt(_blockTag);
			}

			block = await _provider.getBlock(_blockTag, true);
		});
	}
</script>

<div>
	<div class="mx-4">
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
							<Table.Cell
								class="w-5/6 cursor-pointer hover:underline"
								onclick={block?.parentHash
									? async () => goto(resolve(`/block/${block?.parentHash}`))
									: null}
								>{block ? block.parentHash : ''}
							</Table.Cell>
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
								class="w-5/6 cursor-pointer hover:underline"
								onclick={block?.miner ? () => goto(resolve(`/account/${block!.miner}`)) : null}
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
	<div class="mx-4 mt-4">
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
								<Table.Row onclick={() => goto(resolve(`/tx/${tx.hash}`))} class="cursor-pointer">
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
