<script lang="ts">
	import { RefreshCw } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import Call from './Call.svelte';
	import Storage from './Storage.svelte';
	import Tx from './Tx.svelte';
	import Data from '../../Data.svelte';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';

	export let data: { address: string };

	let initialized = false;
	let account: types.Account;

	stores.initializedStore.subscribe(async (updatedInitialized) => {
		initialized = updatedInitialized;
	});

	$: if (initialized && data) {
		fetchAccount(data.address);
	}

	async function fetchAccount(address: string) {
		await helpers.tryExecuteAsync(async () => {
			if (!address) {
				throw new Error(`invalid account address: ${address}`);
			}

			const _provider = await helpers.ensureProvider();
			account = await _provider.getAccount(address);
		});
	}
</script>

<div>
	<div class="mx-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<div class="flex flex-row">
						<div class="flex flex-1 items-center">
							Account #{data.address}
						</div>
						<div>
							<Button class="cursor-pointer" onclick={() => fetchAccount(data.address)}>
								<RefreshCw />
							</Button>
						</div>
					</div>
				</Card.Title>
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
								<Data
									name="code"
									data={account?.code ? helpers.splitToChunks(account.code) : '0x'}
								/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="mx-4 mt-4">
		<Call address={data.address} />
	</div>
	<div class="mx-4 mt-4">
		<Tx address={data.address} />
	</div>
	<div class="mx-4 mt-4">
		<Storage address={data.address} />
	</div>
</div>
