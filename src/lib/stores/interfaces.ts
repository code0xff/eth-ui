import type { Writable } from 'svelte/store';

export interface Store<T> {
	initialValue: T;
	store: Writable<T>;
	useLocalStorage?: boolean;
	storageKey?: string;

	get(): T;
	getFromLocalStorage(): T | null;
	set(value: T): void;
	subscribe(run: (value: T) => Promise<void> | void): void;
	update(updater: (value: T) => T): void;
	reset(): void;
}
