<script lang="ts">
	import type { TransactionReceipt, TransactionResponse } from 'ethers';
	import { JsonRpcProvider } from 'ethers';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import Textarea from '@/components/ui/textarea/textarea.svelte';
	import { DEFAULT_RPC } from '@/constants';
	import { printNumber, printWei, splitToChunks } from '@/helpers';
	import { providerStore } from '@/stores';

	export let data: { hash: string };

	let provider: JsonRpcProvider | undefined = get(providerStore);

	let tx: TransactionResponse | undefined | null;
	let txReceipt: TransactionReceipt | undefined | null;

	onMount(async () => {
		if (!provider) {
			const _rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
			provider = new JsonRpcProvider(_rpc);

			providerStore.set(provider);
		}

		if (provider) {
			tx = await provider.getTransaction(data.hash);
			txReceipt = await provider.getTransactionReceipt(data.hash);
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
							<Table.Cell class="w-1/6">Number</Table.Cell>
							<Table.Cell
								class="w-4/5 cursor-pointer"
								onclick={tx?.blockNumber ? () => goto(`/block/${tx!.blockNumber}`) : null}
								>{tx ? printNumber(tx.blockNumber) : ''}</Table.Cell
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
							<Table.Cell class="w-5/6">{tx ? printWei(tx.value) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Limit</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? printNumber(tx.gasLimit) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Price</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? printWei(tx.gasPrice) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Fee</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? printWei(tx.maxFeePerGas) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Tip</Table.Cell>
							<Table.Cell class="w-5/6">{tx ? printWei(tx.maxPriorityFeePerGas) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Data</Table.Cell>
							<Table.Cell class="w-5/6">
								<Textarea readonly class="resize-none" value={tx ? splitToChunks(tx.data) : ''} />
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
								>{txReceipt ? printNumber(txReceipt.gasUsed) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Actual Gas Price</Table.Cell>
							<Table.Cell class="w-5/6">{txReceipt ? printWei(txReceipt.gasPrice) : ''}</Table.Cell>
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
										<Textarea readonly class="resize-none" value={JSON.stringify(log, null, 2)} />
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
