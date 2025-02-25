<script lang="ts">
	import {
		RevealJsContext,
		SvelteRevealHMR,
		black,
		monokai,
		highlight,
		markdown,
		notes
	} from '$lib';
	import * as Slide from './slides/index.js';
</script>

<RevealJsContext
	options={{
		controls: true,
		progress: true,
		center: true,
		hash: true
	}}
	plugins={[highlight, markdown, notes]}
	themes={[black, monokai]}
>
	<!-- use this only in dev -->
	<!-- if you forget it, it's not a big deal though -->
	<SvelteRevealHMR />

	<Slide.Title />
	<Slide.Description />
	<Slide.Vertical />
	<Slide.Editor />
	<Slide.Code />
	<Slide.CodeAnimation />
	<Slide.Overview />
	<Slide.AutoAnimate />
	<Slide.Mobile />
	<Slide.Markdown />
	<Slide.FitText />
	<Slide.Fragments />
	<Slide.Transitions />
	<Slide.Backgrounds />
	<Slide.BackgroundTransitions />
	<Slide.BackgroundIframe />
	<Slide.Lists />
	<Slide.Quotes />
	<Slide.Tables />
	<Slide.Links />
	<Slide.SpeakerView />
	<Slide.ExportToPdf />
	<Slide.GlobalState />
	<Slide.StateEvent />
	<Slide.Pause />
	<Slide.OtherStuff />
	<Slide.End />
</RevealJsContext>
