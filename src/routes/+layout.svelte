<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />

<ModeWatcher />

<div class="m-4">
	<h2 class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
		ETH UI
	</h2>
</div>
<hr />
{@render children?.()}
