<script lang="ts">
	import { Notes, Slide } from '$lib';
</script>

<Slide>
	<Slide id="fragments">
		<h2>Fragments</h2>
		<p>Hit the next arrow...</p>
		<p class="fragment">... to step through ...</p>
		<p>
			<span class="fragment">... a</span> <span class="fragment">fragmented</span>
			<span class="fragment">slide.</span>
		</p>

		<Notes>This slide has fragments which are also stepped through in the notes window.</Notes>
	</Slide>
	<Slide>
		<h2>Fragment Styles</h2>
		<p>There's different types of fragments, like:</p>
		<p class="fragment grow">grow</p>
		<p class="fragment shrink">shrink</p>
		<p class="fragment fade-out">fade-out</p>
		<p>
			<span style="display: inline-block;" class="fragment fade-right">fade-right, </span>
			<span style="display: inline-block;" class="fragment fade-up">up, </span>
			<span style="display: inline-block;" class="fragment fade-down">down, </span>
			<span style="display: inline-block;" class="fragment fade-left">left</span>
		</p>
		<p class="fragment fade-in-then-out">fade-in-then-out</p>
		<p class="fragment fade-in-then-semi-out">fade-in-then-semi-out</p>
		<p>
			Highlight <span class="fragment highlight-red">red</span>
			<span class="fragment highlight-blue">blue</span>
			<span class="fragment highlight-green">green</span>
		</p>
	</Slide>
</Slide>
