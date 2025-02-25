<script lang="ts">
	import type Reveal from 'reveal.js';
	import { onMount } from 'svelte';
	import type { Plugin, Theme } from './imports.js';

	import { revealStore } from './store.js';

	interface Props {
		options?: Reveal.Options;
		reveal?: Reveal.Api | undefined;
		plugins?: Array<Plugin>;
		themes?: Array<Theme>;
		loaded?: boolean;

		/** children */
		children: import('svelte').Snippet;
	}

	let {
		options = {},
		reveal = $bindable(),
		plugins = [],
		themes = [],
		loaded = $bindable(false),
		children
	}: Props = $props();

	function getDefault<T>(i: { default: T }) {
		return i.default;
	}

	onMount(async () => {
		const [RevealJs, revealPlugins] = await Promise.all([
			import('reveal.js/dist/reveal.esm').then(getDefault),
			Promise.all(plugins.map((p) => p())).then((res) => res.map(getDefault)),
			Promise.all(
				[
					() => import('reveal.js/dist/reset.css'),
					() => import('reveal.js/dist/reveal.css'),
					...themes
				].map((t) => t())
			)
		]);

		reveal = new RevealJs({
			...options,
			plugins: revealPlugins
		});

		$revealStore = reveal;

		reveal.initialize().then(() => (loaded = true));
	});
</script>

{#if !loaded}
	<div class="loading-element"></div>
{/if}

<div class="reveal">
	<div class="slides">
		{@render children?.()}
	</div>
</div>

<style>
	.loading-element {
		position: absolute;
		inset: 0;
		background-color: var(--r-background-color, black);
	}
	.reveal {
		width: var(--reveal-width, 100%);
		height: var(--reveal-height, 100vh);
	}
</style>
