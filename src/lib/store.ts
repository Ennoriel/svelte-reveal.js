import { writable } from 'svelte/store';

export const revealStore = writable<Reveal.Api | undefined>();
