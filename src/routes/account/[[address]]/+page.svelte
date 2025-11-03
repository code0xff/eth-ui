<script lang="ts">
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import { DEFAULT_RPC } from '@/constants';
	import { printNumber, printWei, providerStore } from '@/index';
	import { JsonRpcProvider } from 'ethers';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let data: { address: string };

	let provider: JsonRpcProvider = get(providerStore);

	let balance: bigint;
	let nonce: number;
	let code: string;

	onMount(async () => {
		if (!provider) {
			const rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
			provider = new JsonRpcProvider(rpc);

			providerStore.set(provider);
		}

		balance = await provider.getBalance(data.address);
		nonce = await provider.getTransactionCount(data.address);
		code = await provider.getCode(data.address);
	});
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Account #{data.address}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Balance</Table.Cell>
							<Table.Cell>{balance ? printWei(balance) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Nonce</Table.Cell>
							<Table.Cell>{nonce ? printNumber(nonce) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Code</Table.Cell>
							<Table.Cell>{code ? code : ''}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
