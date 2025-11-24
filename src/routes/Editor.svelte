<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Minus } from '@lucide/svelte';
	import type { Writable } from 'svelte/store';
	import Button from '@/components/ui/button/button.svelte';
	import * as Dialog from '@/components/ui/dialog/index.js';
	import Input from '@/components/ui/input/input.svelte';
	import * as Table from '@/components/ui/table/index.js';

	export let open = false;

	export let name = '';
	export let storage = '';

	export let store: Writable<string[]>;

	let input = '';
	let items: string[] = [];

	$: if (open) {
		const _items = localStorage.getItem(storage);
		items = _items ? JSON.parse(_items) : [];
	}

	function addItem() {
		try {
			items = [...items, input];
			localStorage.setItem(storage, JSON.stringify(items));
			store.set(items);

			input = '';
		} catch (_e: unknown) {
			if (_e instanceof Error) {
				console.error(_e.toString());
				toast(_e.toString());
			}
		}
	}

	function removeItem(_index: number) {
		try {
			items.splice(_index, 1);
			items = [...items];

			localStorage.setItem(storage, JSON.stringify(items));
			store.set(items);
		} catch (_e: unknown) {
			if (_e instanceof Error) {
				console.error(_e.toString());
				toast(_e.toString());
			}
		}
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>{name} Editor</Dialog.Title>
			<Dialog.Description>
				<div class="mt-4">
					<div class="flex flex-row gap-4">
						<div class="w-full">
							<Input bind:value={input} />
						</div>
						<div>
							<Button class="cursor-pointer" onclick={addItem}>Add</Button>
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
											<Input {value} />
										</Table.Cell>
										<Table.Cell>
											<Button class="cursor-pointer" onclick={() => removeItem(index)}>
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
