<script lang="ts">
	import { blockStore, timestampToDate } from '@/index';
	import type { Block } from 'ethers';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';

	export let data: { hash: string };

	let block: Block | undefined;

	blockStore.subscribe((blocks) => {
		block = blocks.get(data.hash);
	});
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Block #{block ? block.number : ''}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Number</Table.Cell>
							<Table.Cell>{block ? block.number.toLocaleString() : ''}</Table.Cell>
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
							<Table.Cell
								>{block && block.baseFeePerGas
									? block.baseFeePerGas.toLocaleString()
									: ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Used</Table.Cell>
							<Table.Cell>{block && block.gasUsed ? block.gasUsed.toLocaleString() : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Limit</Table.Cell>
							<Table.Cell
								>{block && block.gasLimit ? block.gasLimit.toLocaleString() : ''}</Table.Cell
							>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
