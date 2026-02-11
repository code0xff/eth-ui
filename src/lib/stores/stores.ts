import { get, writable, type Writable } from 'svelte/store';
import * as interfaces from './interfaces';

export class Store<T> implements interfaces.Store<T> {
	initialValue: T;
	store: Writable<T>;
	useLocalStorage?: boolean;
	storageKey?: string;

	constructor(initialValue: T, useLocalStorage = false, storageKey?: string) {
		this.initialValue = initialValue;
		this.store = writable<T>(initialValue);
		this.useLocalStorage = useLocalStorage;

		if (!useLocalStorage) return;
		if (!storageKey) {
			throw new Error('storageKey must be provided when useLocalStorage is true');
		}

		this.storageKey = storageKey;
		if (this.storageKey) {
			const _storageValue = this.getFromLocalStorage();
			if (_storageValue !== null) {
				this.store.set(_storageValue);
			}
		}
	}

	get(): T {
		return get(this.store);
	}

	getFromLocalStorage(): T | null {
		if (typeof window === 'undefined') {
			return null;
		}

		const _value = localStorage.getItem(this.storageKey!);
		if (!_value) return null;

		try {
			return JSON.parse(_value) as T;
		} catch {
			return null;
		}
	}

	set(value: T): void {
		this.store.set(value);
		if (this.useLocalStorage && typeof window !== 'undefined') {
			localStorage.setItem(this.storageKey!, JSON.stringify(value));
		}
	}

	subscribe(run: (value: T) => Promise<void> | void): () => void {
		return this.store.subscribe(async (value) => {
			await run(value);
		});
	}

	update(updater: (value: T) => T): void {
		this.store.update(updater);
	}

	reset(): void {
		this.store.set(this.initialValue);
	}
}
