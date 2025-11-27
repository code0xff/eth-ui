import type { LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';
import * as constants from '@/constants';
import * as services from '@/services';
import * as stores from '@/stores';
import { toast } from 'svelte-sonner';

export async function load({ params }: LoadEvent) {
	try {
		if (!params.tag) {
			throw new Error(`invalid block tag: ${params.tag}`);
		}

		let _provider = get(stores.providerStore);
		if (!_provider) {
			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
			stores.rpcStore.set(_rpc);

			_provider = services.defaultBlockProvider(_rpc);
			stores.providerStore.set(_provider);
		}

		let _blockTag: string | number = params.tag;
		if (!_blockTag?.startsWith('0x')) {
			_blockTag = parseInt(_blockTag);
		}

		const block = await _provider.getBlock(_blockTag, true);
		return {
			block
		};
	} catch (e: unknown) {
		if (e instanceof Error) {
			console.error(e.message);
			toast(e.message);
		}
	}
}
