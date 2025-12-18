<script lang="ts">
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

	let selectedAbi = constants.DEFAULT_CALL_ABIS[0];
	let inputs: string = '';
	let outputs: string = '';
	let func: types.Function;
	let inputsPlaceholder: string = '';
	let outputsPlaceholder: string = '';

	stores.callAbisStore.subscribe((updatedAbis) => {
		abis = updatedAbis;
	});

	$: if (selectedAbi) {
		inputs = '';
		outputs = '';

		helpers.tryExecute(() => {
			func = services.AbiParser.parse(selectedAbi);

			inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
			outputsPlaceholder = func.outputs.map((output) => output.type).join(',');
		});
	}

	async function call() {
		await helpers.tryExecuteAsync(async () => {
			const _provider = await helpers.ensureProvider();
			outputs = await _provider.call(address, selectedAbi, inputs);
		});
	}
</script>

<div>
	<Card.Root>
		<Card.Header>
			<Card.Title>Call</Card.Title>
		</Card.Header>
		<Card.Content>
			<div>
				<div class="flex flex-col gap-4 md:flex-row">
					<div class="flex min-w-0 flex-1 flex-row gap-4">
						<Select.Root type="single" bind:value={selectedAbi}>
							<Select.Trigger class="w-full cursor-pointer truncate">{selectedAbi}</Select.Trigger>
							<Select.Content>
								{#each constants.DEFAULT_CALL_ABIS as abi}
									<Select.Item value={abi}>{abi}</Select.Item>
								{/each}
								{#each abis as abi}
									<Select.Item value={abi}>{abi}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
						<Editor name="ABI" store={stores.callAbisStore} />
					</div>
					<Button class="cursor-pointer max-md:w-full" variant="outline" onclick={call}>
						Call
					</Button>
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
								<Table.Cell class="w-5/6">
									<Input readonly placeholder={outputsPlaceholder} bind:value={outputs} />
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
