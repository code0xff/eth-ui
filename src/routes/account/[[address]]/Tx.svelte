<script lang="ts">
	import { toast } from 'svelte-sonner';
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

	let selectedAbi = constants.DEFAULT_TX_ABIS[0];
	let inputs: string = '';
	let outputs: string = '';
	let func: types.Function;
	let inputsPlaceholder: string = '';

	stores.txAbisStore.subscribe((updatedAbis) => {
		abis = updatedAbis;
	});

	$: if (selectedAbi) {
		inputs = '';
		outputs = '';

		try {
			func = services.AbiParser.parse(selectedAbi);

			inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.warn(e.message);
				toast(e.message);
			}
		}
	}

	async function sendTx() {
		try {
			const _provider = helpers.ensureProvider();

			outputs = await _provider.sendTx(address, selectedAbi, inputs);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
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
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Select.Root type="single" bind:value={selectedAbi}>
							<Select.Trigger class="w-full cursor-pointer">{selectedAbi}</Select.Trigger>
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
					<div>
						<Editor name="ABI" storage="tx_abis" store={stores.txAbisStore} />
					</div>
					<div>
						<Button class="cursor-pointer" onclick={sendTx}>Send</Button>
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
								<Table.Cell class="w-5/6">
									<Input readonly bind:value={outputs} placeholder="hash" />
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
