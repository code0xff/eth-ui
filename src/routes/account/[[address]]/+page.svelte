<script lang="ts">
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import { Input } from '@/components/ui/input';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import * as helpers from '@/helpers';
	import * as services from '@/services';
	import * as stores from '@/stores';
	import Call from './Call.svelte';
	import Storage from './Storage.svelte';
	import Tx from './Tx.svelte';

	export let data: { address: string };

	let balance: bigint;
	let nonce: number;
	let code: string;

	stores.initializedStore.subscribe(async (initialized) => {
		if (initialized) {
			await fetchAccount(data.address);
		}
	});

	async function fetchAccount(address: string) {
		try {
			if (!address) {
				throw new Error(`invalid account address: ${address}`);
			}

			let _provider = get(stores.providerStore);
			if (!_provider) {
				const _rpc = get(stores.rpcStore);

				_provider = services.defaultBlockProvider(_rpc);
				stores.providerStore.set(_provider);
			}

			balance = await _provider.getBalance(address);
			nonce = await _provider.getTransactionCount(address);
			code = await _provider.getCode(address);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
		}
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
							<Table.Cell class="w-1/6">Balance</Table.Cell>
							<Table.Cell class="w-5/6">{balance ? helpers.printWei(balance, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Nonce</Table.Cell>
							<Table.Cell class="w-5/6">{nonce ? helpers.printNumber(nonce) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Code</Table.Cell>
							<Table.Cell>
								{#if code && code.startsWith('0xef0100')}
									<Input readonly bind:value={code} />
								{/if}
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Call address={data.address} />
	</div>
	<div class="m-4">
		<Tx address={data.address} />
	</div>
	<div class="m-4">
		<Storage address={data.address} />
	</div>
</div>
