<script lang="ts">
	import { Code, Slide } from '$lib';
</script>

<Slide transition="slide" background="#4d7e65" backgroundTransition="zoom">
	<h2>Background Transitions</h2>
	<p>
		Different background transitions are available via the backgroundTransition option. This one's
		called "zoom".
	</p>

	<Code language="javascript">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `Reveal.configure({ backgroundTransition: 'zoom' })`}
	</Code>
</Slide>

<Slide transition="slide" background="#b5533c" backgroundTransition="zoom">
	<h2>Background Transitions</h2>
	<p>You can override background transitions per-slide.</p>
	<pre><code class="hljs html" style="word-wrap: break-word;"
			>&lt;Slide backgroundTransition="zoom"&gt;</code
		></pre>
</Slide>
