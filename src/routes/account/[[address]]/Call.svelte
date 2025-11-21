<script lang="ts">
	import * as ethers from 'ethers';
	import { Plus } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as stores from '@/stores';
	import * as types from '@/types';
	import Editor from '../../Editor.svelte';

	export let address = '';
	export let provider: ethers.Provider | undefined;
	export let abis: string[] = [];

	let selectedAbi = constants.DEFAULT_CALL_ABIS[0];
	let abiOpen = false;
	let inputs: string = '';
	let outputs: string = '';
	let func: types.Function;
	let inputsPlaceholder: string = '';
	let outputsPlaceholder: string = '';

	$: if (selectedAbi) {
		inputs = '';
		outputs = '';

		const _interface = JSON.parse(new ethers.Interface([selectedAbi]).formatJson());
		if (_interface && _interface.length > 0) {
			func = _interface[0];
		}

		inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
		outputsPlaceholder = func.outputs.map((output) => output.type).join(',');
	}

	async function call() {
		try {
			const _contract = new ethers.Contract(address, new ethers.Interface([selectedAbi]), provider);
			let _outputs: any;
			if (func.inputs.length > 0) {
				const _inputs = inputs.split(',');
				_outputs = await _contract[func.name](..._inputs);
			} else {
				_outputs = await _contract[func.name]();
			}
			if (_outputs instanceof Array) {
				outputs = _outputs.map((output) => output.toString()).join(',');
			} else {
				outputs = _outputs.toString();
			}
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Call</Card.Title>
	</Card.Header>
	<Card.Content>
		<div>
			<div class="flex flex-row gap-4">
				<div class="w-full">
					<Select.Root type="single" bind:value={selectedAbi}>
						<Select.Trigger class="w-full cursor-pointer">{selectedAbi}</Select.Trigger>
						<Select.Content>
							{#each constants.DEFAULT_CALL_ABIS as abi}
								<Select.Item value={abi}>{abi}</Select.Item>
							{/each}
							{#each abis as abi}
								<Select.Item value={abi}>{abi}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div>
					<Button
						class="cursor-pointer"
						onclick={() => {
							abiOpen = true;
						}}
					>
						<Plus />
					</Button>
					<Editor bind:open={abiOpen} name="ABI" storage="call_abis" store={stores.callAbisStore} />
				</div>
				<div>
					<Button class="cursor-pointer" onclick={call}>Call</Button>
				</div>
			</div>
			<div class="mt-4">
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Inputs</Table.Cell>
							<Table.Cell class="w-5/6"
								><Input
									placeholder={inputsPlaceholder}
									readonly={inputsPlaceholder === ''}
									bind:value={inputs}
								/></Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Outputs</Table.Cell>
							<Table.Cell class="w-5/6"
								><Input
									readonly
									placeholder={outputsPlaceholder}
									bind:value={outputs}
								/></Table.Cell
							>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</div>
		</div>
	</Card.Content>
</Card.Root>
