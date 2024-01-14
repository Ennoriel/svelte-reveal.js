<script lang="ts">
	import { Code, Slide } from '$lib';
</script>

<Slide state="customevent">
	<h2>State Events</h2>
	<p>
		Additionally custom events can be triggered on a per slide basis by binding to the <code
			>data-state</code
		> name.
	</p>
	<Code trim language="javascript" contenteditable>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `
Reveal.on( 'customevent', function() {
console.log( '"customevent" has fired' );
} );
		`}
	</Code>
</Slide>
