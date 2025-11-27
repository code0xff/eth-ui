import type { LoadEvent } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { toast } from 'svelte-sonner';
import * as constants from '@/constants';
import * as services from '@/services';
import * as stores from '@/stores';

export async function load({ params }: LoadEvent) {
	try {
		if (!params.hash) {
			throw new Error(`invalid tx hash: ${params.hash}`);
		}
		let _provider = get(stores.providerStore);

		if (!_provider) {
			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
			stores.rpcStore.set(_rpc);

			_provider = services.defaultBlockProvider(_rpc);
			stores.providerStore.set(_provider);
		}

		const tx = await _provider.getTx(params.hash);
		const txReceipt = await _provider.getTxReceipt(params.hash);

		return {
			tx,
			txReceipt
		};
	} catch (e: unknown) {
		if (e instanceof Error) {
			console.error(e.message);
			toast(e.message);
		}
	}

	return {
		hash: params.hash
	};
}
