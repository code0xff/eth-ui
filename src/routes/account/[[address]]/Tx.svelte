<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
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
	import SubmitTx from './SubmitTx.svelte';

	export let address = '';
	export let abis: string[] = [];
	export let testKeys: string[] = [];

	let selectedAbi = constants.NONE;
	let inputs = '';
	let value = '';
	let hash = '';
	let func: types.Function | undefined;
	let inputsPlaceholder = '';

	let selectedTestKey = constants.USE_WALLET;

	stores.txAbisStore.subscribe((updatedAbis) => {
		abis = updatedAbis;
	});
	stores.testKeysStore.subscribe((updatedTestKeys) => {
		testKeys = updatedTestKeys;
	});

	$: if (selectedAbi) {
		inputs = '';
		hash = '';
		func = undefined;
		inputsPlaceholder = '';

		if (selectedAbi !== constants.NONE) {
			helpers.tryExecute(() => {
				func = services.AbiParser.parse(selectedAbi);
				inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
			});
		}
	}
</script>

<div>
	<Card.Root>
		<Card.Header>
			<Card.Title>Transaction</Card.Title>
		</Card.Header>
		<Card.Content>
			<div>
				<div class="flex flex-col md:flex-row">
					<div class="flex min-w-0 flex-1 flex-row gap-4">
						<Select.Root type="single" bind:value={selectedTestKey}>
							<Select.Trigger class="w-full cursor-pointer truncate">
								{selectedTestKey}
							</Select.Trigger>
							<Select.Content>
								<Select.Item value={constants.USE_WALLET}>
									{constants.USE_WALLET}
								</Select.Item>
								{#each testKeys as testKey}
									<Select.Item value={testKey}>{testKey}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
						<Editor name="Key" store={stores.testKeysStore} />
					</div>
				</div>
				<div class="mt-4 flex flex-col gap-4 md:flex-row">
					<div class="flex min-w-0 flex-1 flex-row gap-4">
						<Select.Root type="single" bind:value={selectedAbi}>
							<Select.Trigger class="w-full cursor-pointer truncate">{selectedAbi}</Select.Trigger>
							<Select.Content>
								<Select.Item value={constants.NONE}>{constants.NONE}</Select.Item>
								{#each constants.DEFAULT_TX_ABIS as abi}
									<Select.Item value={abi}>{abi}</Select.Item>
								{/each}
								{#each abis as abi}
									<Select.Item value={abi}>{abi}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
						<Editor name="ABI" store={stores.txAbisStore} />
					</div>
					<SubmitTx
						testKey={selectedTestKey}
						to={address}
						abi={selectedAbi}
						{value}
						{inputs}
						bind:hash
					/>
				</div>
				<div class="mt-4">
					<Table.Root>
						<Table.Body>
							<Table.Row>
								<Table.Cell class="w-1/6">Value</Table.Cell>
								<Table.Cell class="w-5/6">
									<Input bind:value />
								</Table.Cell>
							</Table.Row>
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
								<Table.Cell class="w-1/6">Hash</Table.Cell>
								<Table.Cell
									class="w-5/6 cursor-pointer hover:underline"
									onclick={hash ? () => goto(resolve(`/tx/${hash}`)) : null}
								>
									{hash}
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
