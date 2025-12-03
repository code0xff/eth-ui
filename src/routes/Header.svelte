<script lang="ts">
	import { resolve } from '$app/paths';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '@/components/ui/button';
	import { SunMoon } from '@lucide/svelte';
	import Config from './Config.svelte';
</script>

<div class="flex w-full flex-row">
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
