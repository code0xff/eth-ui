<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { RefreshCw } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import { Textarea } from '@/components/ui/textarea';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';
	import Data from '../../Data.svelte';

	export let data: { hash: string };

	let initialized = false;
	let tx: types.TxWithReceipt | null;
	let fetching = false;

	stores.initializedStore.subscribe(async (updatedInitialized) => {
		initialized = updatedInitialized;
	});

	$: if (initialized && data) {
		fetchTx(data.hash);
	}

	async function fetchTx(hash: string) {
		fetching = true;
		await helpers.tryExecuteAsync(async () => {
			if (!data.hash) {
				throw new Error(`invalid tx hash: ${hash}`);
			}

			const _provider = await helpers.ensureProvider();
			tx = await _provider.getTxWithReceipt(hash);
		});
		fetching = false;
	}
</script>

<div>
	<div class="mx-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<div class="flex flex-row">
						<div class="flex flex-1 items-center">
							Transaction #{tx ? tx.hash : ''}
						</div>
						<div>
							<Button
								class="cursor-pointer"
								variant="ghost"
								size="icon"
								onclick={() => fetchTx(data.hash)}
							>
								<RefreshCw class={fetching ? 'animate-spin' : ''} />
							</Button>
						</div>
					</div>
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Number</Table.Cell>
							<Table.Cell
								class="w-5/6 cursor-pointer hover:underline"
								onclick={tx?.blockNumber ? () => goto(resolve(`/block/${tx!.blockNumber}`)) : null}
								>{tx ? helpers.printNumber(tx.blockNumber) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Type</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? helpers.printTxType(tx.type, true) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">From</Table.Cell>
							<Table.Cell
								class="w-5/6 cursor-pointer hover:underline"
								onclick={tx?.from ? () => goto(resolve(`/account/${tx!.from}`)) : null}
								>{tx ? tx.from : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">To</Table.Cell>
							<Table.Cell
								class="w-5/6 cursor-pointer hover:underline"
								onclick={tx?.to ? () => goto(resolve(`/account/${tx!.to}`)) : null}
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
								<Data name="data" data={tx ? helpers.splitToChunks(tx.data, true) : '0x'} />
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="mx-4 mt-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Receipt</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Status</Table.Cell>
							<Table.Cell class="w-5/6">
								{tx?.receipt ? helpers.printStatus(tx?.receipt.status, true) : ''}
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Used</Table.Cell>
							<Table.Cell class="w-5/6">
								{tx?.receipt ? helpers.printNumber(tx?.receipt.gasUsed) : ''}
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Actual Gas Price</Table.Cell>
							<Table.Cell class="w-5/6">
								{tx?.receipt ? helpers.printWei(tx?.receipt.gasPrice, true) : ''}
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Contract</Table.Cell>
							<Table.Cell class="w-5/6">
								{tx?.receipt ? tx?.receipt.contractAddress : ''}
							</Table.Cell>
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
	<div class="mx-4 mt-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Logs</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						{#if tx?.receipt}
							{#each tx?.receipt.logs as log}
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
