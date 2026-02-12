<script lang="ts">
	import { Minus, Plus } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import * as helpers from '@/helpers';
	import { type Store } from '@/stores/interfaces';
	import type * as types from '@/types';

	export let name = '';
	export let store: Store<string[]>;
	export let validate: types.Validator | undefined = undefined;

	let open = false;
	let input = '';
	let items: string[] = [];

	$: if (open) {
		items = store.get();
	}

	function addItem() {
		helpers.tryExecute(() => {
			if (validate?.(input) === false) {
				throw new Error(`invalid input: ${input}`);
			}
			items = [...items, input];
			store.set(items);

			input = '';
		});
	}

	function removeItem(_index: number) {
		helpers.tryExecute(() => {
			items.splice(_index, 1);
			items = [...items];

			store.set(items);
		});
	}
</script>

<div>
	<Button
		class="cursor-pointer"
		size="icon"
		variant="outline"
		onclick={() => {
			open = true;
		}}
	>
		<Plus />
	</Button>
	<Dialog.Root bind:open>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>{name} Editor</Dialog.Title>
				<Dialog.Description>
					<div class="mt-4">
						<div class="flex flex-row gap-2">
							<div class="w-full">
								<Input bind:value={input} />
							</div>
							<div>
								<Button class="cursor-pointer" variant="outline" onclick={addItem}>Add</Button>
							</div>
						</div>
						<div class="mt-4 max-h-55 overflow-y-auto">
							<Table.Root>
								<Table.Header>
									<Table.Row>
										<Table.Head>Registered {name}</Table.Head>
										<Table.Head>Remove</Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{#each items as value, index}
										<Table.Row>
											<Table.Cell class="w-full">
												<Input {value} readonly />
											</Table.Cell>
											<Table.Cell class="text-center">
												<Button
													class="cursor-pointer"
													size="icon"
													variant="outline"
													onclick={() => removeItem(index)}
												>
													<Minus />
												</Button>
											</Table.Cell>
										</Table.Row>
									{/each}
								</Table.Body>
							</Table.Root>
						</div>
					</div>
				</Dialog.Description>
			</Dialog.Header>
		</Dialog.Content>
	</Dialog.Root>
</div>
