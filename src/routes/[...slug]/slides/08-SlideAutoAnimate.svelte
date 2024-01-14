<script lang="ts">
	import { Slide } from '$lib';
</script>

<Slide autoAnimate autoAnimateEasing="cubic-bezier(0.770, 0.000, 0.175, 1.000)">
	<h2>Auto-Animate</h2>
	<p>
		Automatically animate matching elements across slides with <a
			href="https://revealjs.com/auto-animate/">Auto-Animate</a
		>.
	</p>
	<div class="r-hstack justify-center">
		<div
			data-id="box1"
			style="background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;"
		/>
		<div
			data-id="box2"
			style="background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;"
		/>
		<div
			data-id="box3"
			style="background: #999; width: 50px; height: 50px; margin: 10px; border-radius: 5px;"
		/>
	</div>
</Slide>
<Slide autoAnimate autoAnimateEasing="cubic-bezier(0.770, 0.000, 0.175, 1.000)">
	<div class="r-hstack justify-center">
		<div
			data-id="box1"
			data-auto-animate-delay="0"
			style="background: cyan; width: 150px; height: 100px; margin: 10px;"
		/>
		<div
			data-id="box2"
			data-auto-animate-delay="0.1"
			style="background: magenta; width: 150px; height: 100px; margin: 10px;"
		/>
		<div
			data-id="box3"
			data-auto-animate-delay="0.2"
			style="background: yellow; width: 150px; height: 100px; margin: 10px;"
		/>
	</div>
	<h2 style="margin-top: 20px;">Auto-Animate</h2>
</Slide>
<Slide autoAnimate autoAnimateEasing="cubic-bezier(0.770, 0.000, 0.175, 1.000)">
	<div class="r-stack">
		<div
			data-id="box1"
			style="background: cyan; width: 300px; height: 300px; border-radius: 200px;"
		/>
		<div
			data-id="box2"
			style="background: magenta; width: 200px; height: 200px; border-radius: 200px;"
		/>
		<div
			data-id="box3"
			style="background: yellow; width: 100px; height: 100px; border-radius: 200px;"
		/>
	</div>
	<h2 style="margin-top: 20px;">Auto-Animate</h2>
</Slide>
