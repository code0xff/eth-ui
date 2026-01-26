<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Dialog from '@/components/ui/dialog';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import Data from '@/components/Data.svelte';

	export let testKey = '';
	export let to = '';
	export let abi = constants.NONE;
	export let value = '';
	export let inputs = '';
	export let hash = '';

	let callData = '';

	let open = false;

	$: if (open && abi !== constants.NONE) {
		callData = helpers.encodeFunctionData(abi, inputs);
	}

	async function sendTx() {
		await helpers.tryExecuteAsync(
			async () => {
				open = false;

				if (abi === constants.NONE) {
					abi = '';
				}

				const _provider = await helpers.ensureProvider();
				hash = await _provider.sendTx(testKey, to, abi, inputs, value);

				toast.info(`sent tx: ${hash}`);
			},
			false,
			async () => {
				toast.error('failed to send tx');
			}
		);
	}
</script>

<div>
	<Button
		class="cursor-pointer max-md:w-full"
		variant="outline"
		onclick={() => {
			open = true;
		}}
	>
		Send
	</Button>
	<Dialog.Root bind:open>
		<Dialog.Content class="min-w-170">
			<Dialog.Header>
				<Dialog.Title>Tx</Dialog.Title>
				<Dialog.Description>
					<Table.Root>
						<Table.Header></Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>To</Table.Cell>
								<Table.Cell>
									<Input readonly bind:value={to} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>ABI</Table.Cell>
								<Table.Cell>
									<Input readonly bind:value={abi} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value</Table.Cell>
								<Table.Cell>
									<Input readonly bind:value />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Inputs</Table.Cell>
								<Table.Cell>
									<Input readonly bind:value={inputs} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell colspan={2}>
									<Data
										name="data"
										data={callData ? helpers.splitToChunks(callData, true) : '0x'}
									/>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Button class="cursor-pointer" variant="outline" onclick={sendTx}>Submit</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
