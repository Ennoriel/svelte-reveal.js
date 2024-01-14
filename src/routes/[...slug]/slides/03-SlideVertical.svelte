<script lang="ts">
	import { Slide } from '$lib';
</script>

<Slide>
	<Slide>
		<h2>Vertical Slides</h2>
		<p>Slides can be nested inside of each other.</p>
		<p>Use the <em>Space</em> key to navigate through all slides.</p>
		<br />
		<a href="/" class="navigate-down">
			<img
				class="r-frame"
				style="background: rgba(255,255,255,0.1);"
				width="178"
				height="238"
				data-src="https://static.slid.es/reveal/arrow.png"
				alt="Down arrow"
			/>
		</a>
	</Slide>
	<Slide>
		<h2>Basement Level 1</h2>
		<p>
			Nested slides are useful for adding additional detail underneath a high level horizontal
			slide.
		</p>
	</Slide>
	<Slide>
		<h2>Basement Level 2</h2>
		<p>That's it, time to go back up.</p>
		<br />
		<a href="#/2">
			<img
				class="r-frame"
				style="background: rgba(255,255,255,0.1); transform: rotate(180deg);"
				width="178"
				height="238"
				data-src="https://static.slid.es/reveal/arrow.png"
				alt="Up arrow"
			/>
		</a>
	</Slide>
</Slide>
