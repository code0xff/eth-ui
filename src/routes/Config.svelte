<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { CogIcon, Download, Info } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import * as types from '@/types';

	let open = false;
	let depth = constants.DEFAULT_DEPTH_LIMIT;
	let interval = constants.MIN_INTERVAL;
	let environment: File | null = null;

	$: if (open) {
		depth = stores.depthStore.get();
		interval = stores.intervalStore.get();
	}

	function saveSetting() {
		if (!depth || depth < constants.MIN_DEPTH_LIMIT) {
			toast.warning(`invalid depth: depth must be at least ${constants.MIN_DEPTH_LIMIT}`);
			return;
		}
		if (!interval || interval < constants.MIN_INTERVAL) {
			toast.warning(`invalid interval: interval must be at least ${constants.MIN_INTERVAL}`);
			return;
		}
		stores.depthStore.set(depth);
		stores.intervalStore.set(interval);

		open = false;
		toast.info('successfully saved');
	}

	function importEnvironment(e: Event) {
		const _input = e.target as HTMLInputElement;
		environment = _input.files?.[0] ?? null;

		if (environment) {
			const _reader = new FileReader();
			_reader.onload = (_event: ProgressEvent<FileReader>) => {
				helpers.tryExecute(() => {
					const _result = _event.target?.result;
					if (typeof _result === 'string') {
						const _environment: types.Environment = JSON.parse(_result);
					} else {
						throw new Error('invalid file content');
					}
				});
			};
			_reader.readAsText(environment);
		}
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
		<CogIcon />
	</Button>
	<Dialog.Root bind:open>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Setting</Dialog.Title>
				<Dialog.Description>
					<Table.Root>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Depth</Table.Cell>
								<Table.Cell>
									<Input
										type="number"
										min={constants.MIN_DEPTH_LIMIT}
										placeholder={constants.DEFAULT_DEPTH_LIMIT.toString()}
										bind:value={depth}
									/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									Interval
									<Button
										class="cursor-pointer"
										size="icon"
										variant="outline"
										onclick={() => {
											toast.info(
												`effective only for http/https rpc endpoints\nif changed during syncing, stop and restart the sync`,
												{
													class: 'whitespace-pre-line'
												}
											);
										}}
									>
										<Info />
									</Button>
								</Table.Cell>
								<Table.Cell>
									<Input
										type="number"
										min={constants.MIN_INTERVAL}
										placeholder={`${constants.MIN_INTERVAL.toString()} ms`}
										bind:value={interval}
									/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Import</Table.Cell>
								<Table.Cell>
									<Input type="file" />
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<div class="flex flex-row gap-4">
					<Button variant="outline" class="cursor-pointer">
						<Download />
					</Button>
					<Button class="cursor-pointer" variant="outline" onclick={saveSetting}>Save</Button>
				</div>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
