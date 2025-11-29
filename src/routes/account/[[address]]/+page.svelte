<script lang="ts">
	import { Input } from '@/components/ui/input';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';
	import Call from './Call.svelte';
	import Storage from './Storage.svelte';
	import Tx from './Tx.svelte';

	export let data: { address: string };

	let account: types.Account;

	stores.initializedStore.subscribe(async (initialized) => {
		if (initialized) {
			await fetchAccount(data.address);
		}
	});

	async function fetchAccount(address: string) {
		await helpers.tryExecuteAsync(async () => {
			if (!address) {
				throw new Error(`invalid account address: ${address}`);
			}

			const _provider = helpers.ensureProvider();

			account = await _provider.getAccount(address);
		});
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
							<Table.Cell class="w-5/6"
								>{account?.balance ? helpers.printWei(account.balance, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Nonce</Table.Cell>
							<Table.Cell class="w-5/6"
								>{account?.nonce ? helpers.printNumber(account.nonce) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Code</Table.Cell>
							<Table.Cell>
								{#if account?.code && account.code.startsWith('0xef0100')}
									<Input readonly bind:value={account.code} />
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
