<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { Github, SunMoon } from '@lucide/svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { Button } from '@/components/ui/button';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import Config from './Config.svelte';

	let { children } = $props();

	async function initialize() {
		const _rpc = stores.rpcStore.get();
		const _rpcs = stores.rpcsStore.get();

		if (!_rpc || _rpc.trim().length === 0 || !_rpcs.includes(_rpc)) {
			stores.rpcStore.set(constants.DEFAULT_RPCS[0]);
		}

		await helpers.ensureProvider();
		stores.initializedStore.set(true);
	}

	onMount(async () => {
		await helpers.tryExecuteAsync(initialize);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ETH UI</title>
</svelte:head>

<Toaster position="top-right" />

<ModeWatcher />

<div class="my-4 flex w-full flex-row">
	<div class="ml-4 flex-1">
		<a
			href={resolve('/')}
			class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			ETH UI
		</a>
	</div>
	<div class="mr-4 flex flex-1 justify-end gap-4">
		<div>
			<Config />
		</div>
		<div>
			<Button class="cursor-pointer" onclick={toggleMode}>
				<SunMoon />
			</Button>
		</div>
	</div>
</div>
{@render children?.()}
<div class="my-4 flex w-full flex-row">
	<div class="flex flex-1 justify-center">
		<p>© 2025 code0xff. All rights reserved.</p>
	</div>
	<div class="mr-4 flex justify-end gap-4">
		<Button
			class="cursor-pointer"
			onclick={() => {
				window.open('https://github.com/code0xff/eth-ui');
			}}
		>
			<Github />
		</Button>
	</div>
</div>
