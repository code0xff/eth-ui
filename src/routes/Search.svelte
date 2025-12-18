<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';

	let searchParam: string = '';

	function search() {
		helpers.tryExecute(() => {
			searchParam = searchParam.trim();
			if (searchParam.length === 0) {
				return;
			}

			if (searchParam.startsWith('0x')) {
				if (searchParam.length === constants.ADDRESS_SIZE) {
					goto(resolve(`/account/${searchParam}`));
				} else if (searchParam.length === constants.HASH_SIZE) {
					goto(resolve(`/tx/${searchParam}`));
				} else {
					throw new Error('unsupported search condition');
				}
			} else {
				const _blockNumber = parseInt(searchParam.trim());
				if (isNaN(_blockNumber)) {
					throw new Error('unsupported search condition');
				}
				goto(resolve(`/block/${_blockNumber}`));
			}
		});
	}
</script>

<div class="flex flex-row gap-4">
	<div class="w-full">
		<Input placeholder="Search by Address / Tx Hash / Block Number" bind:value={searchParam} />
	</div>
	<div>
		<Button class="cursor-pointer" variant="outline" onclick={search}>Search</Button>
	</div>
</div>
