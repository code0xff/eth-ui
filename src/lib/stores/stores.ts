import { get, writable, type Writable } from 'svelte/store';
import * as interfaces from './interfaces';

export class Store<T> implements interfaces.Store<T> {
	initialValue: T;
	store: Writable<T>;
	useLocalStorage?: boolean = false;
	storageKey?: string = undefined;

	constructor(initialValue: T) {
		this.initialValue = initialValue;
		this.store = writable<T>(initialValue);
	}

	get(): T {
		return get(this.store);
	}

	getFromLocalStorage(): T | null {
		return null;
	}

	set(value: T): void {
		this.store.set(value);
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

export class LocalStorageStore<T> extends Store<T> {
	declare useLocalStorage: true;
	declare storageKey: string;

	constructor(initialValue: T, storageKey: string) {
		super(initialValue);
		this.useLocalStorage = true;
		this.storageKey = storageKey;

		const storageValue = this.getFromLocalStorage();
		if (storageValue !== null) {
			this.store.set(storageValue);
		}
	}

	getFromLocalStorage(): T | null {
		if (typeof window === 'undefined') {
			return null;
		}

		const value = localStorage.getItem(this.storageKey);
		if (!value) return null;

		try {
			return JSON.parse(value) as T;
		} catch {
			return null;
		}
	}

	private persist(value: T): void {
		if (typeof window === 'undefined') {
			return;
		}
		localStorage.setItem(this.storageKey, JSON.stringify(value));
	}

	override set(value: T): void {
		this.store.set(value);
		this.persist(value);
	}

	override update(updater: (value: T) => T): void {
		this.store.update((value) => {
			const nextValue = updater(value);
			this.persist(nextValue);
			return nextValue;
		});
	}

	override reset(): void {
		this.set(this.initialValue);
	}
}
