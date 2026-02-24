import { beforeEach, describe, expect, it } from 'vitest';
import * as helpers from './helpers';
import * as stores from './stores';

describe('helpers', () => {
	beforeEach(() => {
		stores.rpcStore.set('');
		stores.queryHistoryStore.set({});
	});

	it('buildQueryPath returns route for each query type', () => {
		expect(helpers.buildQueryPath('block', '10')).toBe('/block/10');
		expect(helpers.buildQueryPath('tx', '0xabc')).toBe('/tx/0xabc');
		expect(helpers.buildQueryPath('account', '0xdef')).toBe('/account/0xdef');
	});

	it('saveQueryHistory deduplicates and normalizes tx/account queries', () => {
		stores.rpcStore.set('https://rpc.example');

		helpers.saveQueryHistory('tx', '0xAbC');
		helpers.saveQueryHistory('tx', '0xabc');
		helpers.saveQueryHistory('account', ' 0xDeF ');

		const history = stores.queryHistoryStore.get()['https://rpc.example'];
		expect(history).toHaveLength(2);
		expect(history[0].value).toBe('0xdef');
		expect(history[1].value).toBe('0xabc');
	});

	it('saveQueryHistory keeps block query value as trimmed original', () => {
		stores.rpcStore.set('https://rpc.example');

		helpers.saveQueryHistory('block', ' 00123 ');
		const history = stores.queryHistoryStore.get()['https://rpc.example'];

		expect(history[0].value).toBe('00123');
	});

	it('deriveStorageKey throws when key is required but empty', () => {
		expect(() => helpers.deriveStorageKey(1n, 'address', '   ')).toThrowError('invalid key');
	});

	it('encodeFunctionData validates input count', () => {
		expect(() =>
			helpers.encodeFunctionData('function transfer(address to, uint256 amount)', '0x1234')
		).toThrowError('required inputs: 2');
	});
});
