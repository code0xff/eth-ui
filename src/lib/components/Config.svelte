<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { toggleMode } from 'mode-watcher';
	import { CogIcon, Download, Info, SunMoon } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import { Checkbox } from './ui/checkbox';
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
	let env: types.Environment;
	let importedFile: File | null = null;

	let metricsOpen = false;

	$: if (open) {
		depth = stores.depthStore.get();
		interval = stores.intervalStore.get();
		metricsOpen = stores.metricsStore.get();
	}

	function applyEnv(env: types.Environment) {
		const mappings = [
			['rpcs', stores.rpcsStore],
			['callAbis', stores.callAbisStore],
			['txAbis', stores.txAbisStore],
			['testKeys', stores.testKeysStore]
		] as const;

		for (const [key, store] of mappings) {
			const value = env[key];
			if (value) {
				store.set(value);
			}
		}
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
		stores.metricsStore.set(metricsOpen);

		if (env) {
			applyEnv(env);
		}

		open = false;
		toast.info('successfully saved');
	}

	function importEnvironment(e: Event) {
		const _input = e.target as HTMLInputElement;
		importedFile = _input.files?.[0] ?? null;

		if (importedFile) {
			const _reader = new FileReader();
			_reader.onload = (_event: ProgressEvent<FileReader>) => {
				helpers.tryExecute(() => {
					const _result = _event.target?.result;
					if (typeof _result === 'string') {
						env = JSON.parse(_result);
					} else {
						throw new Error('invalid file content');
					}
				});
			};
			_reader.readAsText(importedFile);
		}
	}

	function exportEnvironment() {
		const env: types.Environment = {
			rpcs: stores.rpcsStore.get(),
			callAbis: stores.callAbisStore.get(),
			txAbis: stores.txAbisStore.get(),
			testKeys: stores.testKeysStore.get()
		};

		helpers.tryExecute(() => {
			const json = JSON.stringify(env, null, 2);
			const blob = new Blob([json], { type: 'application/json' });
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;
			a.download = `env_${Date.now()}.json`;
			a.click();

			URL.revokeObjectURL(url);
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
											toast.info(`effective only for http/https rpc endpoints`, {
												class: 'whitespace-pre-line'
											});
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
								<Table.Cell>Metrics</Table.Cell>
								<Table.Cell>
									<Checkbox bind:checked={metricsOpen} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Environment</Table.Cell>
								<Table.Cell>
									<Input type="file" class="cursor-pointer" onchange={importEnvironment} />
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<div class="flex flex-row gap-4">
					<Button variant="outline" class="cursor-pointer" onclick={exportEnvironment}>
						<Download />
					</Button>
					<Button class="cursor-pointer" size="icon" variant="outline" onclick={toggleMode}>
						<SunMoon />
					</Button>
					<Button class="cursor-pointer" variant="outline" onclick={saveSetting}>Save</Button>
				</div>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
