<script lang="ts">
	import { JsonRpcProvider } from 'ethers';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import { DEFAULT_RPC } from '@/constants';
	import { printNumber, printWei } from '@/helpers';
	import { providerStore } from '@/stores';

	export let data: { address: string };

	let provider: JsonRpcProvider | undefined = get(providerStore);

	let balance: bigint;
	let nonce: number;
	let code: string;

	let slot: string;
	let result: string;

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

	async function getStorageAt() {
		if (!provider) {
			const rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
			provider = new JsonRpcProvider(rpc);
			providerStore.set(provider);
		}
		result = await provider.getStorage(data.address, slot);
	}
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
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Storage</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Slot</Table.Cell>
							<Table.Cell>
								<div class="flex flex-row gap-4">
									<div class="w-full">
										<Input bind:value={slot} />
									</div>
									<div>
										<Button onclick={getStorageAt}>Get</Button>
									</div>
								</div>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Value</Table.Cell>
							<Table.Cell>
								<Input readonly bind:value={result} />
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
