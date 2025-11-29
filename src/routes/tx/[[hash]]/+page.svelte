<script lang="ts">
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import Textarea from '@/components/ui/textarea/textarea.svelte';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';

	export let data: { hash: string };

	let tx: types.TxResponse | null;
	let txReceipt: types.TxReceipt | null;

	stores.initializedStore.subscribe(async (initialized) => {
		if (initialized) {
			await fetchTx(data.hash);
		}
	});

	async function fetchTx(hash: string) {
		await helpers.tryExecuteAsync(async () => {
			if (!data.hash) {
				throw new Error(`invalid tx hash: ${hash}`);
			}

			const _provider = helpers.ensureProvider();

			tx = await _provider.getTx(hash);
			txReceipt = await _provider.getTxReceipt(hash);
		});
	}
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
							<Table.Cell class="w-1/6">Number</Table.Cell>
							<Table.Cell
								class="w-4/5 cursor-pointer"
								onclick={tx?.blockNumber ? () => goto(`/block/${tx!.blockNumber}`) : null}
								>{tx ? helpers.printNumber(tx.blockNumber) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Type</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? tx.type : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">From</Table.Cell>
							<Table.Cell
								class="w-4/5 cursor-pointer"
								onclick={tx?.from ? () => goto(`/account/${tx!.from}`) : null}
								>{tx ? tx.from : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">To</Table.Cell>
							<Table.Cell
								class="w-4/5 cursor-pointer"
								onclick={tx?.to ? () => goto(`/account/${tx!.to}`) : null}
								>{tx ? tx.to : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Value</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? helpers.printWei(tx.value, true) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Limit</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? helpers.printNumber(tx.gasLimit) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Price</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? helpers.printWei(tx.gasPrice, true) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Fee</Table.Cell>
							<Table.Cell class="w-5/6"
								>{tx ? helpers.printWei(tx.maxFeePerGas, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Tip</Table.Cell>
							<Table.Cell class="w-5/6"
								>{tx ? helpers.printWei(tx.maxPriorityFeePerGas, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Data</Table.Cell>
							<Table.Cell class="w-5/6">
								<Textarea
									readonly
									class="resize-none"
									value={tx ? helpers.splitToChunks(tx.data) : ''}
								/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Receipt</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Status</Table.Cell>
							<Table.Cell class="w-5/6">{txReceipt ? txReceipt.status : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Used</Table.Cell>
							<Table.Cell class="w-5/6"
								>{txReceipt ? helpers.printNumber(txReceipt.gasUsed) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Actual Gas Price</Table.Cell>
							<Table.Cell class="w-5/6"
								>{txReceipt ? helpers.printWei(txReceipt.gasPrice, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Contract</Table.Cell>
							<Table.Cell class="w-5/6">{txReceipt ? txReceipt.contractAddress : ''}</Table.Cell>
						</Table.Row>
						<!-- <Table.Row>
							<Table.Cell class="w-1/6">Log Bloom</Table.Cell>
							<Table.Cell class="w-5/6">
								{txReceipt ? txReceipt.logsBloom : ''}
							</Table.Cell>
						</Table.Row> -->
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Logs</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						{#if txReceipt}
							{#each txReceipt.logs as log}
								<Table.Row>
									<Table.Cell>
										<Textarea readonly class="resize-none" value={log} />
									</Table.Cell>
								</Table.Row>
							{/each}
						{/if}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
