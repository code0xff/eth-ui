<script lang="ts">
	import * as ethers from 'ethers';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import Textarea from '@/components/ui/textarea/textarea.svelte';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';

	export let data: { hash: string };

	let provider: ethers.Provider | undefined;

	let tx: ethers.TransactionResponse | undefined | null;
	let txReceipt: ethers.TransactionReceipt | undefined | null;

	onMount(async () => {
		try {
			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPC;
			stores.rpcStore.set(_rpc);

			provider = helpers.getProvider();

			tx = await provider.getTransaction(data.hash);
			txReceipt = await provider.getTransactionReceipt(data.hash);
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
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
