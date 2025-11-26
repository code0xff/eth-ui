<script lang="ts">
	import { toast } from 'svelte-sonner';
	import Button from '@/components/ui/button/button.svelte';
	import * as Dialog from '@/components/ui/dialog';
	import Input from '@/components/ui/input/input.svelte';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as stores from '@/stores';

	export let open = false;
	export let blockListLimit = constants.MIN_BLOCK_LIST_LIMIT;

	function saveSetting() {
		if (!blockListLimit || blockListLimit < constants.MIN_BLOCK_LIST_LIMIT) {
			toast(
				`invalid block list limit: block list limit must be at least ${constants.MIN_BLOCK_LIST_LIMIT}`
			);
			return;
		}
		localStorage.setItem('blockListLimit', blockListLimit.toString());
		stores.blockListLimitStore.set(blockListLimit);
		open = false;

		toast('successfully saved');
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Setting</Dialog.Title>
			<Dialog.Description>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Blocklist limit</Table.Cell>
							<Table.Cell>
								<Input
									type="number"
									min={constants.MIN_BLOCK_LIST_LIMIT}
									placeholder={constants.DEFAULT_BLOCK_LIST_LIMIT.toString()}
									bind:value={blockListLimit}
								/>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button class="cursor-pointer" onclick={saveSetting}>Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
