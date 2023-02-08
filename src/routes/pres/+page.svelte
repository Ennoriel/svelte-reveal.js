<script>
	import { Notes, RevealJsContext, Slide } from '$lib';
</script>

<!-- a container with fixed size is required -->
<div style:width="100%" style:height="100vh">
	<RevealJsContext
		options={{
			controls: true,
			progress: true,
			center: true,
			hash: true
		}}
	>
		<Slide>
			<h1>Hello world!</h1>
		</Slide>
		<Slide>
			<h1>Hello world!</h1>
			<a href="/autre">autre</a>
			<Notes>Ceci est une note</Notes>
		</Slide>
	</RevealJsContext>
</div>
