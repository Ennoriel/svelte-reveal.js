<script lang="ts">
	import { Code, Slide } from '$lib';
</script>

<Slide autoAnimate>
	<h2 id="code-title">Even Prettier Animations</h2>
	<Code id="code-animation" trim lineNumbers="|4,8-11|17|22-24" language="javascript">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `
import React, { useState } from 'react';

function Example() {
const [count, setCount] = useState(0);

return (
&lt;div&gt;
	&lt;p&gt;You clicked {count} times&lt;/p&gt;
	&lt;button onClick={() =&gt; setCount(count + 1)}&gt;
	Click me
	&lt;/button&gt;
&lt;/div&gt;
);
}

function SecondExample() {
const [count, setCount] = useState(0);

return (
&lt;div&gt;
	&lt;p&gt;You clicked {count} times&lt;/p&gt;
	&lt;button onClick={() =&gt; setCount(count + 1)}&gt;
	Click me
	&lt;/button&gt;
&lt;/div&gt;
);
}
		`}
	</Code>
</Slide>
