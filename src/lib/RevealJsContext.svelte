<script lang="ts">
	import type Reveal from 'reveal.js';
	import { onMount } from 'svelte';

	import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';

	export let options: Reveal.Options = {};
	export let reveal: Reveal.Api | undefined = undefined;
	export let loaded = false;

	let RevealJs: typeof Reveal;

	onMount(async () => {
		RevealJs = await import('reveal.js/dist/reveal.esm').then((res) => res.default);
		reveal = new RevealJs(options);
		reveal.initialize().then(() => loaded = true);
	});
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>
