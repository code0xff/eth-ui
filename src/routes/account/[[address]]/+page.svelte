<script lang="ts">
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { get } from 'svelte/store';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Card from '@/components/ui/card';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as services from '@/services';
	import * as stores from '@/stores';
	import Call from './Call.svelte';
	import Tx from './Tx.svelte';

	export let data: { address: string };

	let provider: services.BlockProvider | undefined;
	let callAbis: string[] = [];
	let txAbis: string[] = [];

	let balance: bigint;
	let nonce: number;
	let code: string;

	let slot: string;
	let result: string;

	stores.callAbisStore.subscribe((_callAbis) => {
		callAbis = _callAbis;
	});
	stores.txAbisStore.subscribe((_txAbis) => {
		txAbis = _txAbis;
	});

	onMount(async () => {
		try {
			const _savedCallAbis = localStorage.getItem('call_abis');
			if (_savedCallAbis) {
				callAbis = [...JSON.parse(_savedCallAbis)];
			}

			const _savedTxAbis = localStorage.getItem('tx_abis');
			if (_savedTxAbis) {
				txAbis = [...JSON.parse(_savedTxAbis)];
			}

			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
			stores.rpcStore.set(_rpc);

			provider = get(stores.providerStore);
			if (!provider) {
				provider = services.defaultBlockProvider(_rpc);
				stores.providerStore.set(provider);
			}

			balance = await provider.getBalance(data.address);
			nonce = await provider.getTransactionCount(data.address);
			code = await provider.getCode(data.address);
		} catch (_e: unknown) {
			if (_e instanceof Error) {
				console.error(_e.message);
				toast(_e.message);
			}
		}
	});

	async function getStorageAt() {
		try {
			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
			stores.rpcStore.set(_rpc);

			provider = get(stores.providerStore);
			if (!provider) {
				provider = services.defaultBlockProvider(_rpc);
				stores.providerStore.set(provider);
			}

			result = await provider.getStorage(data.address, slot);
		} catch (_e: unknown) {
			if (_e instanceof Error) {
				console.error(_e.message);
				toast(_e.message);
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
		<Call address={data.address} {provider} abis={callAbis} />
	</div>
	<div class="m-4">
		<Tx address={data.address} {provider} abis={txAbis} />
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
							<Table.Cell class="w-1/6">Slot</Table.Cell>
							<Table.Cell class="w-5/6">
								<div class="flex flex-row gap-4">
									<div class="w-full">
										<Input bind:value={slot} />
									</div>
									<div>
										<Button class="cursor-pointer" onclick={getStorageAt}>Get</Button>
									</div>
								</div>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Value</Table.Cell>
							<Table.Cell class="w-5/6">
								<Input readonly bind:value={result} />
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
