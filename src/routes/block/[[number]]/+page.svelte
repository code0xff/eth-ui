<script lang="ts">
	import {
		blockIndexStore,
		blockCacheStore,
		printNumber,
		printWei,
		providerStore,
		timestampToDate
	} from '@/index';
	import { JsonRpcProvider, type Block } from 'ethers';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { DEFAULT_RPC } from '@/constants';

	export let data: { number: string };

	let provider: JsonRpcProvider = get(providerStore);

	let block: Block | undefined | null;

	onMount(async () => {
		if (!provider) {
			const rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
			provider = new JsonRpcProvider(rpc);

			providerStore.set(provider);
		}

		const blockNumber = parseInt(data.number);
		const hash = get(blockIndexStore).get(blockNumber);

		block = hash ? get(blockCacheStore).get(hash) : await provider.getBlock(blockNumber);
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
