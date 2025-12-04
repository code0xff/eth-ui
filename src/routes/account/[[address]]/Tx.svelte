<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as services from '@/services';
	import * as stores from '@/stores';
	import * as types from '@/types';
	import Editor from '../../Editor.svelte';

	export let address = '';
	export let abis: string[] = [];
	export let testKeys: string[] = [];

	let selectedAbi = constants.DEFAULT_TX_ABIS[0];
	let inputs: string = '';
	let outputs: string = '';
	let func: types.Function;
	let inputsPlaceholder: string = '';

	let selectedTestKey = 'use wallet';

	stores.txAbisStore.subscribe((updatedAbis) => {
		abis = updatedAbis;
	});
	stores.testKeysStore.subscribe((updatedTestKeys) => {
		testKeys = updatedTestKeys;
	});

	$: if (selectedAbi) {
		inputs = '';
		outputs = '';

		helpers.tryExecute(() => {
			func = services.AbiParser.parse(selectedAbi);
			inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
		});
	}

	async function sendTx() {
		await helpers.tryExecuteAsync(async () => {
			const _provider = await helpers.ensureProvider();
			outputs = await _provider.sendTx(selectedTestKey, address, selectedAbi, inputs);
		});
	}
</script>

<div>
	<Card.Root>
		<Card.Header>
			<Card.Title>Transaction</Card.Title>
		</Card.Header>
		<Card.Content>
			<div>
				<div class="flex flex-col gap-4 md:flex-row">
					<div class="min-w-0 flex-1">
						<Select.Root type="single" bind:value={selectedTestKey}>
							<Select.Trigger class="w-full cursor-pointer truncate"
								>{selectedTestKey}</Select.Trigger
							>
							<Select.Content>
								{#each testKeys as testKey}
									<Select.Item value={testKey}>{testKey}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
					</div>
					<div class="max-md:w-full">
						<Editor name="Key" store={stores.testKeysStore} />
					</div>
					<div class="max-md:w-full">
						<Button class="cursor-pointer  max-md:w-full" onclick={sendTx}>Send</Button>
					</div>
				</div>
				<div class="mt-4 flex flex-col gap-4 md:flex-row">
					<div class="min-w-0 flex-1">
						<Select.Root type="single" bind:value={selectedAbi}>
							<Select.Trigger class="w-full cursor-pointer truncate">{selectedAbi}</Select.Trigger>
							<Select.Content>
								{#each constants.DEFAULT_TX_ABIS as abi}
									<Select.Item value={abi}>{abi}</Select.Item>
								{/each}
								{#each abis as abi}
									<Select.Item value={abi}>{abi}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
					</div>
					<div class="flex flex-row gap-4 max-md:w-full">
						<div>
							<Editor name="ABI" store={stores.txAbisStore} />
						</div>
					</div>
				</div>
				<div class="mt-4">
					<Table.Root>
						<Table.Body>
							<Table.Row>
								<Table.Cell class="w-1/6">Inputs</Table.Cell>
								<Table.Cell class="w-5/6">
									<Input
										placeholder={inputsPlaceholder}
										readonly={inputsPlaceholder === ''}
										bind:value={inputs}
									/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell class="w-1/6">Outputs</Table.Cell>
								<Table.Cell
									class="w-5/6 cursor-pointer hover:underline"
									onclick={outputs ? () => goto(resolve(`/tx/${outputs}`)) : null}
								>
									{outputs}
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
