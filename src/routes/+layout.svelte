<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.ico';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { Toaster } from '@/components/ui/sonner';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();

	async function initialize() {
		let _rpc = page.url.searchParams.get('rpc');
		let _rpcs = stores.rpcsStore.get();

		if (_rpc) {
			stores.rpcStore.set(_rpc);
			if (![..._rpcs, ...constants.DEFAULT_RPCS].includes(_rpc)) {
				stores.rpcsStore.set([..._rpcs, _rpc]);
			}
		} else {
			_rpc = stores.rpcStore.get();
		}

		_rpcs = stores.rpcsStore.get();
		if (
			!_rpc ||
			_rpc.trim().length === 0 ||
			![..._rpcs, ...constants.DEFAULT_RPCS].includes(_rpc)
		) {
			stores.rpcStore.set(constants.DEFAULT_RPCS[0]);
		}

		await helpers.ensureProvider();
		stores.initializedStore.set(true);
	}

	onMount(async () => {
		await helpers.tryExecuteAsync(initialize, false, async () => {
			stores.initializedStore.set(true);
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ETH UI</title>
</svelte:head>

<Toaster position="top-right" />

<ModeWatcher />

<div class="flex flex-col h-full">
	<div class="my-4">
		<Header />
	</div>
	<div class="flex-1">
		{@render children?.()}
	</div>
	<div class="my-4">
		<Footer />
	</div>
</div>
