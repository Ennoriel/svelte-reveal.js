<script lang="ts">
	import type Reveal from 'reveal.js';
	import { onMount } from 'svelte';
	import type { Plugin, Theme } from './imports.js';

	import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import { revealStore } from './store.js';

	export let options: Reveal.Options = {};
	export let reveal: Reveal.Api | undefined = undefined;
	export let plugins: Array<Plugin> = [];
	export let themes: Array<Theme>;
	export let loaded = false;

	function getDefault<T>(i: { default: T }) {
		return i.default;
	}

	onMount(async () => {
		const [RevealJs, revealPlugins] = await Promise.all([
			import('reveal.js/dist/reveal.esm').then(getDefault),
			Promise.all(plugins.map((p) => p())).then((res) => res.map(getDefault)),
			Promise.all(themes.map((t) => t()))
		]);

		reveal = new RevealJs({
			...options,
			plugins: revealPlugins
		});

		$revealStore = reveal;

		reveal.initialize().then(() => (loaded = true));
	});
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>

<style>
	.reveal {
		width: var(--reveal-width, 100%);
		height: var(--reveal-height, 100vh);
	}
</style>
