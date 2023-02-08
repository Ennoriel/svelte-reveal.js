<script lang="ts">
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
	import Reveal from 'reveal.js/dist/reveal.esm';
	import { onMount, tick } from 'svelte';

	export let options: Reveal.Options = {};
	export let reveal: Reveal.Api | undefined = undefined;

	onMount(async () => {
		await tick();
		reveal = new Reveal(options);
		reveal.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>
