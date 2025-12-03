<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { Github } from '@lucide/svelte';
</script>

<div class="flex w-full flex-row">
	<div class="flex flex-1 items-center justify-center">
		<p>© 2025 code0xff. All rights reserved.</p>
	</div>
	<div class="mr-4 flex justify-end">
		<Button
			class="cursor-pointer"
			variant="ghost"
			onclick={() => {
				window.open('https://github.com/code0xff/eth-ui');
			}}
		>
			<Github />
		</Button>
	</div>
</div>
