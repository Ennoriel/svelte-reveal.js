<script lang="ts">
	import { onMount } from 'svelte';
	import { revealStore } from './store.js';

	onMount(() => {
		if (import.meta.hot) {
			import.meta.hot.on('vite:afterUpdate', async () => {
				console.log('!!!', $revealStore?.slide);
				$revealStore?.slide();
				$revealStore?.sync();
				if ($revealStore) $revealStore.syncSlide($revealStore.getCurrentSlide());
			});
		}
	});
</script>
