<script lang="ts">
	import { JsonRpcProvider } from 'ethers';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';
	import { DEFAULT_RPC } from '@/constants';
	import { printNumber, printWei, timestampToDate } from '@/helpers';
	import { blockIndexStore, blockCacheStore, providerStore } from '@/stores';
	import type { Block } from '@/types';

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

		if (_hash) {
			block = get(blockCacheStore).get(_hash);
		}
		if (!block && provider) {
			const _block = await provider.getBlock(_blockNumber);
			if (_block) {
				block = {
					number: _block.number,
					hash: _block.hash,
					parentHash: _block.parentHash,
					timestamp: _block.timestamp,
					transactions: [..._block.transactions],
					miner: _block.miner,
					baseFeePerGas: _block.baseFeePerGas,
					gasUsed: _block.gasUsed,
					gasLimit: _block.gasLimit
				};
			}
		}
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
							<Table.Cell class="w-1/6">Number</Table.Cell>
							<Table.Cell class="w-5/6">{block ? printNumber(block.number) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Hash</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.hash : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Parent</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.parentHash : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Time</Table.Cell>
							<Table.Cell class="w-5/6">{block ? timestampToDate(block.timestamp) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Transactions</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.transactions.length : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Etherbase</Table.Cell>
							<Table.Cell class="w-5/6">{block ? block.miner : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Base Fee</Table.Cell>
							<Table.Cell class="w-5/6">{block ? printWei(block.baseFeePerGas) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Used</Table.Cell>
							<Table.Cell class="w-5/6">{block ? printNumber(block.gasUsed) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Gas Limit</Table.Cell>
							<Table.Cell class="w-5/6">{block ? printNumber(block.gasLimit) : ''}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
