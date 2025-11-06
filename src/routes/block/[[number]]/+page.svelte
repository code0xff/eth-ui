<script lang="ts">
	import { JsonRpcProvider, type Block } from 'ethers';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import { DEFAULT_RPC } from '@/constants';
	import { printNumber, printWei, timestampToDate } from '@/helpers';
	import { blockIndexStore, blockCacheStore, providerStore } from '@/stores';

	export let data: { number: string };

	let provider: JsonRpcProvider | undefined = get(providerStore);

	let block: Block | undefined | null;

	onMount(async () => {
		if (!provider) {
			const _rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
			provider = new JsonRpcProvider(_rpc);

			providerStore.set(provider);
		}

		const _blockNumber = parseInt(data.number);
		const _hash = get(blockIndexStore).get(_blockNumber);

		block = _hash ? get(blockCacheStore).get(_hash) : await provider.getBlock(_blockNumber);
	});
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Block #{block ? printNumber(block.number) : ''}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Number</Table.Cell>
							<Table.Cell>{block ? printNumber(block.number) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Hash</Table.Cell>
							<Table.Cell>{block ? block.hash : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Parent</Table.Cell>
							<Table.Cell>{block ? block.parentHash : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Time</Table.Cell>
							<Table.Cell>{block ? timestampToDate(block.timestamp) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Transactions</Table.Cell>
							<Table.Cell>{block ? block.transactions.length : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Etherbase</Table.Cell>
							<Table.Cell>{block ? block.miner : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Base Fee</Table.Cell>
							<Table.Cell>{block ? printWei(block.baseFeePerGas) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Used</Table.Cell>
							<Table.Cell>{block ? printNumber(block.gasUsed) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Limit</Table.Cell>
							<Table.Cell>{block ? printNumber(block.gasLimit) : ''}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
