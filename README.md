# svelte-reveal.js

> svelte-reveal.js is a [reveal.js](https://revealjs.com/) wrapper for [Svelte](https://svelte.dev/).

If you want to port this library to another framework, I'd be glad to convert this repo to a monorepo to make the maintenance easier.

## Installation

Install svelte-reveal.js with your favorite package manager

```bash
# npm
npm i -D svelte-reveal.js
```

```bash
# pnpm
pnpm i -D svelte-reveal.js
```

```bash
# yarn
yarn add --dev mdsvex
```
    
## Usage

```sv
<script>
	import { RevealJsContext, Slide } from 'svelte-reveal.js';

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

| Props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `options` | `Reveal.Options` | *optional* — reveal.js options. See the [official documentation](https://revealjs.com/config/) and the [typescript source code](https://github.com/kwatanwa17/DefinitelyTyped/blob/master/types/reveal.js/index.d.ts). |

To load specific reveal.js plugins, you need to dynamically import them in an onMount function.

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

### Slide

The component `<Slide>` displays a slide. This is the base building block of reveal.js.

| Props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| trim | boolean | removes surrounding whitespace within the <code> |
| noescape | boolean | disable the HTML escapement |
| lineNumbers | boolean | string | Enable line numbers. If you want to highlight specific lines you can provide a comma separated list. You can step through multiple code highlights on the same code block. Delimit each of your highlight steps with the | character. |
| lineStartFrom | string | offset the line number |

| `options` | `Reveal.Options` | *optional* — reveal.js options. See the [official documentation](https://revealjs.com/config/) and the [typescript source code](https://github.com/kwatanwa17/DefinitelyTyped/blob/master/types/reveal.js/index.d.ts). |

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

### Code

The component `<Code>` displays a block of code. This component requires the `highlight` plugin. See the [official documentation about Code](https://revealjs.com/code/). 

| Props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| trim | boolean | removes surrounding whitespace within the <code> |
| noescape | boolean | disable the HTML escapement |
| lineNumbers | boolean | string | Enable line numbers. If you want to highlight specific lines you can provide a comma separated list. You can step through multiple code highlights on the same code block. Delimit each of your highlight steps with the | character. |
| lineStartFrom | string | offset the line number |

| `options` | `Reveal.Options` | *optional* — reveal.js options. See the [official documentation](https://revealjs.com/config/) and the [typescript source code](https://github.com/kwatanwa17/DefinitelyTyped/blob/master/types/reveal.js/index.d.ts). |

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

There is no props to this component

```sv
<Notes>
	This is a very convenient way to write a speaker note
</Notes>
```

## Acknowledgements

 - [svelte-slides](https://github.com/rajasegar/svelte-slides) is a template if you want to use reveal.js I was inspired from.
