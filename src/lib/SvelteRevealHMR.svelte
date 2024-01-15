<script lang="ts">
	import { onMount } from 'svelte';
	import { revealStore } from './store.js';

	onMount(() => {
		if (import.meta.hot) {
			import.meta.hot.on('vite:afterUpdate', async () => {
				if ($revealStore) $revealStore.slide();
			});
		}
	});
</script>
