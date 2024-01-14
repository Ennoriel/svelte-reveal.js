<script lang="ts">
	import { Code, Slide } from '$lib';
</script>

<Slide>
	<Slide background="#dddddd">
		<h2>Slide Backgrounds</h2>
		<p>
			Set <code>data-background="#dddddd"</code> on a slide to change the background color. All CSS color
			formats are supported.
		</p>
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
	<Slide background="https://static.slid.es/reveal/image-placeholder.png">
		<h2>Image Backgrounds</h2>
		<Code language="html">&lt;Slide background="image.png"&gt;</Code>
	</Slide>
	<Slide
		background="https://static.slid.es/reveal/image-placeholder.png"
		backgroundRepeat="repeat"
		backgroundSize="100px"
	>
		<h2>Tiled Backgrounds</h2>
		<Code language="html"
			>&lt;Slide background="image.png" backgroundRepeat="repeat" backgroundSize="100px"&gt;</Code
		>
	</Slide>
	<Slide
		backgroundVideo="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
		backgroundColor="#000000"
	>
		<div style="background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px;">
			<h2>Video Backgrounds</h2>
			<pre><code class="hljs html" style="word-wrap: break-word;"
					>&lt;Slide backgroundVideo="video.mp4,video.webm"&gt;</code
				></pre>
		</div>
	</Slide>
	<Slide background="http://i.giphy.com/90F8aUepslB84.gif">
		<h2>... and GIFs!</h2>
	</Slide>
</Slide>
