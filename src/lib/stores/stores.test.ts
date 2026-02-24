import { beforeEach, describe, expect, it } from 'vitest';
import { LocalStorageStore, Store } from './stores';

type MockStorage = {
	getItem: (key: string) => string | null;
	setItem: (key: string, value: string) => void;
	removeItem: (key: string) => void;
	clear: () => void;
};

function createMockLocalStorage(initial: Record<string, string> = {}): MockStorage {
	const values = new Map<string, string>(Object.entries(initial));

	return {
		getItem(key: string) {
			return values.has(key) ? values.get(key)! : null;
		},
		setItem(key: string, value: string) {
			values.set(key, value);
		},
		removeItem(key: string) {
			values.delete(key);
		},
		clear() {
			values.clear();
		}
	};
}

function setBrowserStorage(storage: MockStorage): void {
	Object.defineProperty(globalThis, 'window', {
		value: { localStorage: storage },
		configurable: true
	});
	Object.defineProperty(globalThis, 'localStorage', {
		value: storage,
		configurable: true
	});
}

describe('Store', () => {
	it('keeps state in memory only', () => {
		const store = new Store<number>(1);

		store.set(2);
		store.update((value) => value + 3);

		expect(store.get()).toBe(5);
	});

	it('resets to initial value', () => {
		const store = new Store<string>('initial');
		store.set('changed');

		store.reset();

		expect(store.get()).toBe('initial');
	});

	it('does not read localStorage by default', () => {
		const store = new Store<number>(10);

		expect(store.getFromLocalStorage()).toBeNull();
	});
});

describe('LocalStorageStore', () => {
	beforeEach(() => {
		setBrowserStorage(createMockLocalStorage());
	});

	it('hydrates value from localStorage at construction', () => {
		setBrowserStorage(createMockLocalStorage({ depth: '25' }));

		const store = new LocalStorageStore<number>(10, 'depth');

		expect(store.get()).toBe(25);
	});

	it('persists set/update/reset to localStorage', () => {
		const store = new LocalStorageStore<number>(10, 'depth');

		store.set(11);
		store.update((value) => value + 4);
		store.reset();

		expect(localStorage.getItem('depth')).toBe('10');
	});

	it('ignores invalid json from localStorage', () => {
		setBrowserStorage(createMockLocalStorage({ depth: 'not-json' }));

		const store = new LocalStorageStore<number>(10, 'depth');

		expect(store.get()).toBe(10);
	});
});
