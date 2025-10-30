<script lang="ts">
	import { blockStore, printNumber, printWei, timestampToDate } from '@/index';
	import type { Block } from 'ethers';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';

	export let data: { hash: string };

	let block: Block | undefined;

	blockStore.subscribe((blockStore) => {
		block = blockStore.get(data.hash);
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
