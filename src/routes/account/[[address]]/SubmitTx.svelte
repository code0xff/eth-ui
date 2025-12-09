<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Dialog from '@/components/ui/dialog';
	import * as Table from '@/components/ui/table';
	import * as helpers from '@/helpers';
	import { toast } from 'svelte-sonner';

	export let testKey: string = '';
	export let to: string = '';
	export let abi: string = '';
	export let value: string = '';
	export let inputs: string = '';
	export let hash: string = '';

	let open = false;

	async function sendTx() {
		await helpers.tryExecuteAsync(
			async () => {
				open = false;

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
		onclick={() => {
			open = true;
		}}
	>
		Send
	</Button>
	<Dialog.Root bind:open>
		<Dialog.Content>
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
								<Table.Cell>abi</Table.Cell>
								<Table.Cell>
									<Input readonly bind:value={abi} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>value</Table.Cell>
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
								<Table.Cell></Table.Cell>
								<Table.Cell class="flex justify-end">
									<Button class="cursor-pointer" onclick={sendTx}>Submit</Button>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Dialog.Description>
			</Dialog.Header>
		</Dialog.Content>
	</Dialog.Root>
</div>
