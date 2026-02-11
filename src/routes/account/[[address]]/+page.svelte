<script lang="ts">
	import { onMount } from 'svelte';
	import { RefreshCw } from '@lucide/svelte';
	import * as Accordion from '@/components/ui/accordion';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import Call from '@/components/Call.svelte';
	import Storage from '@/components/Storage.svelte';
	import Tx from '@/components/Tx.svelte';
	import Data from '@/components/Data.svelte';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';

	export let data: { address: string };

	let initialized = false;
	let account: types.Account;
	let fetching = false;

	let action: types.Actions = 'tx';

	onMount(() => {
		const unsubscribe = stores.initializedStore.subscribe((updatedInitialized) => {
			initialized = updatedInitialized;
		});

		return () => {
			unsubscribe();
		};
	});

	$: if (initialized && data) {
		fetchAccount(data.address);
	}

	async function fetchAccount(address: string) {
		fetching = true;
		await helpers.tryExecuteAsync(async () => {
			if (!address) {
				throw new Error(`invalid account address: ${address}`);
			}
			helpers.saveQueryHistory('account', address);

			const _provider = await helpers.ensureProvider();
			account = await _provider.getAccount(address);
		});
		fetching = false;
	}
</script>

<div class="mx-4 flex min-h-0 flex-1 flex-col overflow-y-auto">
	<div>
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<div class="flex flex-1 flex-row items-center gap-4">
						Account
						<Input readonly value={data.address} />
						<Button
							class="cursor-pointer"
							variant="outline"
							size="icon"
							onclick={() => fetchAccount(data.address)}
						>
							<RefreshCw class={fetching ? 'animate-spin' : ''} />
						</Button>
					</div>
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Balance</Table.Cell>
							<Table.Cell class="w-5/6"
								>{account ? helpers.printWei(account.balance, true) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Nonce</Table.Cell>
							<Table.Cell class="w-5/6"
								>{account ? helpers.printNumber(account.nonce) : ''}</Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell colspan={2}>
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
	<div>
		<Accordion.Root type="single" value={action}>
			<Accordion.Item value="tx">
				<Accordion.Trigger class="cursor-pointer px-4">Transaction</Accordion.Trigger>
				<Accordion.Content>
					<Tx address={data.address} />
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="call">
				<Accordion.Trigger class="cursor-pointer px-4">Call</Accordion.Trigger>
				<Accordion.Content>
					<Call address={data.address} />
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="storage">
				<Accordion.Trigger class="cursor-pointer px-4">Storage</Accordion.Trigger>
				<Accordion.Content>
					<Storage address={data.address} />
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</div>
