# svelte-reveal.js

> svelte-reveal.js is a [reveal.js](https://revealjs.com/) wrapper for [Svelte](https://svelte.dev/).

If you want to port this library to another framework, I'd be glad to convert this repo to a monorepo to make the maintenance easier.

reveal.js is a window based library and is not SSR friendly. Though, it still works with static rendering!

## Installation

Install svelte-reveal.js with your favorite package manager

```bash
# npm
npm i -D svelte-reveal.js reveal.js
```

```bash
# pnpm
pnpm i -D svelte-reveal.js reveal.js
```

```bash
# yarn
yarn add --dev svelte-reveal.js reveal.js
```

## Usage

```sv
<script>
	import { RevealJsContext, Slide } from 'svelte-reveal.js';

	import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
</script>

<!-- a container with fixed size is required -->
<div style:width="100%" style:height="100vh">
	<RevealJsContext>
		<Slide>
			<h1>Hello world!</h1>
		</Slide>
	</RevealJsContext>
</div>
```

## API Reference

### RevealJsContext

The component `<RevealJsContext>` loads reveal.js and initialize a Reveal context.

| Props     | Type             | Description                                                                                                                                                                                                            |
| :-------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options` | `Reveal.Options` | _optional_ — reveal.js options. See the [official documentation](https://revealjs.com/config/) and the [typescript source code](https://github.com/kwatanwa17/DefinitelyTyped/blob/master/types/reveal.js/index.d.ts). |
| `reveal` | `Reveal.Api` | bindable — reveal.js presentation object. |
| `loaded` | `boolean` | bindable — false by default and turns true when the presentation is loaded. Can be used to display  a loading screen |

If you want a specific route for each slide, do provide the option `{ hash: true }` and make sure that your presentation is wrapped in a `/[...slug]/+page.svelte` folder to unsure the page being redirected to your presentation.

To load specific reveal.js plugins, you need to dynamically import them in an onMount function:

```sv
<script lang="ts">
	import { onMount } from 'svelte';
	import { RevealJsContext } from 'svelte-reveal.js';
	import type Reveal from 'reveal.js';

	// The highlight plugin requires a stylesheet
	import 'reveal.js/plugin/highlight/monokai.css';

	let plugins: Reveal.PluginFunction[];

	onMount(async () => {
		plugins = [
			await import('reveal.js/plugin/highlight/highlight').then(res => res.default)
		]
	})
</script>

{#if plugins}
	<RevealJsContext
		options={{
			controls: true,
			progress: true,
			center: true,
			hash: true,
			plugins
		}}
	>
		...
	</RevealJsContext>
{/if}
```

Some css themes exposed by reveal.js and can be imported with `import 'reveal.js/dist/theme/black.css';`:

- black.css
- beige.css
- blood.css
- league.css
- night.css
- moon.css
- sky.css
- simple.css
- serif.css
- solarized.css
- white.css

### Slide

The component `<Slide>` displays a slide. This is the base building block of reveal.js.

All `data-attributes` used by reveal.js have been exposed as Svelte props:

- **autoAnimate**: data-auto-animate, `boolean`
- **autoAnimateEasing**: data-auto-animate-easing, `string`
- **autoAnimateId**: data-auto-animate-id, `string`
- **autoAnimateRestart**: data-auto-animate-restart, `boolean`
- **autoslide**: data-autoslide, `number`
- **background**: data-background, `string`
- **backgroundColor**: data-background-color, `string`
- **backgroundGradient**: data-background-gradient, `string`
- **backgroundIframe**: data-background-iframe, `string`
- **backgroundImage**: data-background-image, `string`
- **backgroundInteractive**: data-background-interactive , `boolean`
- **backgroundOpacity**: data-background-opacity, `string`
- **backgroundPosition**: data-background-position, `string`
- **backgroundRepeat**: data-background-repeat, `string`
- **backgroundSize**: data-background-size, `string`
- **backgroundTransition**: data-background-transition, `string`
- **backgroundVideo**: data-background-video, `string`
- **backgroundVideoLoop**: data-background-video-loop, `string`
- **backgroundVideoMuted**: data-background-video-muted, `string`
- **charset**: data-charset, `string`
- **id:**: data-id, `string`
- **markdown**: data-markdown, `boolean | string`
- **notes**: data-notes, `string`
- **separator**: data-separator, `string`
- **separatorNotes**: data-separator-notes, `string`
- **separatorVertical**: data-separator-vertical, `string`
- **state**: state, `string`
- **timing**: data-timing, `number`
- **transition**: data-transition, `'fade' | 'slide' | 'convex' | 'concave' | 'zoom'`
- **transitionSpeed**: data-transition-speed, `"slow" | "fast"`
- **visibility**: data-visibility, `"hidden"`

### Code

The component `<Code>` displays a block of code. This component requires the `highlight` plugin. See the [official documentation about Code](https://revealjs.com/code/).

All `data-attributes` used by reveal.js have been exposed as Svelte props:

**fragment props**:

- **fragment:**: fragment class, `boolean`
- **autoslide:**: data-auotslide, `number`
- **id:**: data-id, `string`
- **fragmentIndex:**: data-fragment-index, `number`

**code props:**

- **contenteditable**: contenteditable, `string`
- **language**: set as a classname, `string`
- **lineNumbers:**: data-line-numbers, `boolean | string`
- **lineStartFrom:**: data-ln-start-from, `string`
- **noescape:**: data-noescape, `boolean`
- **trim:**: data-trim, `boolean`

Write the code with a line return, starting with a raw indentation:

```sv
<Code>
	{@html `
<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>
	`}
</Code>
```

### Notes

The component `<Notes>` allows you to write a side note that will only be displayed in the speaker view. This component requires the `note` plugin. See the [official documentation about Speaker view](https://revealjs.com/speaker-view/).

There is no props for this component.

```sv
<Notes>
	This is a very convenient way to write a speaker note
</Notes>
```

Alternatively, you can also use the `Slide` `notes` props to define a note.

## Acknowledgements

- [svelte-slides](https://github.com/rajasegar/svelte-slides) is a template for using reveal.js I was inspired by.
