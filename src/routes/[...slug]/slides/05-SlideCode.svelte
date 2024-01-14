<script lang="ts">
	import { Code, Slide } from '$lib';
</script>

<Slide autoAnimate>
	<h2 id="code-title">Pretty Code</h2>
	<Code id="code-animation" trim lineNumbers language="javascript">
		{@html `
import React, { useState } from 'react';

function Example() {
const [count, setCount] = useState(0);

return (
...
);
}
		`}
	</Code>
	<p>
		Code syntax highlighting courtesy of <a href="https://highlightjs.org/usage/">highlight.js</a>.
	</p>
</Slide>
