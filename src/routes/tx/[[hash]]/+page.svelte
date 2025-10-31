<script lang="ts">
	import { txStore, printNumber, printWei, toChunks, providerStore } from '@/index';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import type { TransactionResponse } from 'ethers';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { JsonRpcProvider } from 'ethers';
	import type { TransactionReceipt } from 'ethers';

	export let data: { hash: string };

	let provider: JsonRpcProvider = get(providerStore);

	let tx: TransactionResponse | undefined;
	let txDataChunks: string[];
	let txReceipt: TransactionReceipt | undefined | null;

	onMount(async () => {
		tx = get(txStore).get(data.hash);
		txDataChunks = tx ? toChunks(tx.data) : [];

		if (tx && provider) {
			txReceipt = await provider.getTransactionReceipt(tx.hash);
		}
	});
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Transaction #{tx ? tx.hash : ''}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Number</Table.Cell>
							<Table.Cell>{tx ? printNumber(tx.blockNumber) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Type</Table.Cell>
							<Table.Cell>{tx ? tx.type : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>From</Table.Cell>
							<Table.Cell>{tx ? tx.from : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>To</Table.Cell>
							<Table.Cell>{tx ? tx.to : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Value</Table.Cell>
							<Table.Cell>{tx ? printWei(tx.value) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Limit</Table.Cell>
							<Table.Cell>{tx ? printNumber(tx.gasLimit) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Price</Table.Cell>
							<Table.Cell>{tx ? printWei(tx.gasPrice) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Fee</Table.Cell>
							<Table.Cell>{tx ? printWei(tx.maxFeePerGas) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Tip</Table.Cell>
							<Table.Cell>{tx ? printWei(tx.maxPriorityFeePerGas) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Data</Table.Cell>
							<Table.Cell>
								{#each txDataChunks as chunk}
									<div>{chunk}</div>
								{/each}
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Status</Table.Cell>
							<Table.Cell>{txReceipt ? txReceipt.status : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Gas Used</Table.Cell>
							<Table.Cell>{txReceipt ? printNumber(txReceipt.gasUsed) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Actual Gas Price</Table.Cell>
							<Table.Cell>{txReceipt ? printWei(txReceipt.gasPrice) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Contract</Table.Cell>
							<Table.Cell>{txReceipt ? txReceipt.contractAddress : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Log Bloom</Table.Cell>
							<Table.Cell>{txReceipt ? txReceipt.logsBloom : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Logs</Table.Cell>
							<Table.Cell>
								{#if txReceipt}
									{#each txReceipt.logs as log}
										<pre>{JSON.stringify(log, null, 2)}</pre>
									{/each}
								{/if}
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
