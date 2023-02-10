# svelte-reveal.js

svelte-reveal.js is a [reveal.js](https://revealjs.com/) wrapper for [Svelte](https://svelte.dev/).

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

## Acknowledgements

 - [svelte-slides](https://github.com/rajasegar/svelte-slides) is a template if you want to use reveal.js I was inspired from.
