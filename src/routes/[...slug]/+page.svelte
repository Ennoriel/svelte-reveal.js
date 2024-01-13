<script lang="ts">
	import { Code, RevealJsContext, Slide, black, monokai, highlight, markdown } from '$lib';
</script>

<!-- a container with fixed size is required -->
<RevealJsContext
	options={{
		controls: true,
		progress: true,
		center: true,
		hash: true
	}}
	plugins={[highlight, markdown]}
	themes={[black, monokai]}
>
	<Slide>
		<img
			src="https://static.slid.es/reveal/logo-v1/reveal-white-text.svg"
			alt="reveal.js"
			style="height: 180px; margin: 0 auto 4rem auto; background: transparent;"
			class="demo-logo"
		/>
		<h3>The reveal.js Svelte wrapper library</h3>
	</Slide>

	<Slide>
		<h2>Hello There</h2>
		<p>
			reveal.js enables you to create beautiful interactive slide decks using HTML. This
			presentation will show you examples of what it can do.
		</p>
	</Slide>

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

	<Slide>
		<h2>Slides</h2>
		<p>
			Not a coder? Not a problem. There's a fully-featured visual editor for authoring these, try it
			out at <a href="https://slides.com" target="_blank">https://slides.com</a>.
		</p>
	</Slide>

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
			Code syntax highlighting courtesy of <a href="https://highlightjs.org/usage/">highlight.js</a
			>.
		</p>
	</Slide>

	<Slide autoAnimate>
		<h2 id="code-title">Even Prettier Animations</h2>
		<Code id="code-animation" trim lineNumbers="|4,8-11|17|22-24" language="javascript">
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

	<Slide>
		<h2>Point of View</h2>
		<p>
			Press <strong>ESC</strong> to enter the slide overview.
		</p>
		<p>
			Hold down the <strong>alt</strong> key (<strong>ctrl</strong> in Linux) and click on any
			element to zoom towards it using <a href="https://lab.hakim.se/zoom-js">zoom.js</a>. Click
			again to zoom back out.
		</p>
		<p>(NOTE: Use ctrl + click in Linux.)</p>
	</Slide>

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
	<Slide>
		<h2>Touch Optimized</h2>
		<p>
			Presentations look great on touch devices, like mobile phones and tablets. Simply swipe
			through your slides.
		</p>
	</Slide>

	<Slide markdown>
		<script type="text/template">
## Markdown support

Write content using inline or external Markdown.
Instructions and more info available in the [readme](https://revealjs.com/markdown/).

```html []
<Slide markdown>
## Markdown support
Write content using inline or external Markdown.
Instructions and more info available in the [readme](https://revealjs.com/markdown/).
</Slide>
```
		</script>
	</Slide>

	<Slide>
		<p>Add the <code>r-fit-text</code> class to auto-size text</p>
		<h2 class="r-fit-text">FIT TEXT</h2>
	</Slide>

	<Slide>
		<Slide id="fragments">
			<h2>Fragments</h2>
			<p>Hit the next arrow...</p>
			<p class="fragment">... to step through ...</p>
			<p>
				<span class="fragment">... a</span> <span class="fragment">fragmented</span>
				<span class="fragment">slide.</span>
			</p>

			<aside class="notes">
				This slide has fragments which are also stepped through in the notes window.
			</aside>
		</Slide>
		<Slide>
			<h2>Fragment Styles</h2>
			<p>There's different types of fragments, like:</p>
			<p class="fragment grow">grow</p>
			<p class="fragment shrink">shrink</p>
			<p class="fragment fade-out">fade-out</p>
			<p>
				<span style="display: inline-block;" class="fragment fade-right">fade-right, </span>
				<span style="display: inline-block;" class="fragment fade-up">up, </span>
				<span style="display: inline-block;" class="fragment fade-down">down, </span>
				<span style="display: inline-block;" class="fragment fade-left">left</span>
			</p>
			<p class="fragment fade-in-then-out">fade-in-then-out</p>
			<p class="fragment fade-in-then-semi-out">fade-in-then-semi-out</p>
			<p>
				Highlight <span class="fragment highlight-red">red</span>
				<span class="fragment highlight-blue">blue</span>
				<span class="fragment highlight-green">green</span>
			</p>
		</Slide>
	</Slide>

	<Slide id="transitions">
		<h2>Transition Styles</h2>
		<p>
			You can select from different transitions, like: <br />
			<a href="?transition=none#/transitions">None</a> -
			<a href="?transition=fade#/transitions">Fade</a> -
			<a href="?transition=slide#/transitions">Slide</a> -
			<a href="?transition=convex#/transitions">Convex</a> -
			<a href="?transition=concave#/transitions">Concave</a> -
			<a href="?transition=zoom#/transitions">Zoom</a>
		</p>
	</Slide>

	<Slide>
		<Slide background="#dddddd">
			<h2>Slide Backgrounds</h2>
			<p>
				Set <code>data-background="#dddddd"</code> on a slide to change the background color. All CSS
				color formats are supported.
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

	<Slide transition="slide" background="#4d7e65" backgroundTransition="zoom">
		<h2>Background Transitions</h2>
		<p>
			Different background transitions are available via the backgroundTransition option. This one's
			called "zoom".
		</p>
		<Code language="javascript">{@html `Reveal.configure({ backgroundTransition: 'zoom' })`}</Code>
	</Slide>

	<Slide transition="slide" background="#b5533c" backgroundTransition="zoom">
		<h2>Background Transitions</h2>
		<p>You can override background transitions per-slide.</p>
		<pre><code class="hljs html" style="word-wrap: break-word;"
				>&lt;Slide backgroundTransition="zoom"&gt;</code
			></pre>
	</Slide>

	<Slide backgroundIframe="https://hakim.se" backgroundInteractive>
		<div
			style="position: absolute; width: 40%; right: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2); background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px; font-size: 20px; text-align: left;"
		>
			<h2>Iframe Backgrounds</h2>
			<p>
				Since reveal.js runs on the web, you can easily embed other web content. Try interacting
				with the page in the background.
			</p>
		</div>
	</Slide>

	<Slide>
		<h2>Marvelous List</h2>
		<ul>
			<li>No order here</li>
			<li>Or here</li>
			<li>Or here</li>
			<li>Or here</li>
		</ul>
	</Slide>

	<Slide>
		<h2>Fantastic Ordered List</h2>
		<ol>
			<li>One is smaller than...</li>
			<li>Two is smaller than...</li>
			<li>Three!</li>
		</ol>
	</Slide>

	<Slide>
		<h2>Tabular Tables</h2>
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Value</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Apples</td>
					<td>$1</td>
					<td>7</td>
				</tr>
				<tr>
					<td>Lemonade</td>
					<td>$2</td>
					<td>18</td>
				</tr>
				<tr>
					<td>Bread</td>
					<td>$3</td>
					<td>2</td>
				</tr>
			</tbody>
		</table>
	</Slide>

	<Slide>
		<h2>Clever Quotes</h2>
		<p>
			These guys come in two forms, inline: <q
				cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations"
				>The nice thing about standards is that there are so many to choose from</q
			> and block:
		</p>
		<blockquote
			cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations"
		>
			&ldquo;For years there has been a theory that millions of monkeys typing at random on millions
			of typewriters would reproduce the entire works of Shakespeare. The Internet has proven this
			theory to be untrue.&rdquo;
		</blockquote>
	</Slide>

	<Slide>
		<h2>Intergalactic Interconnections</h2>
		<p>
			You can link between slides internally,
			<a href="#/2/3">like this</a>.
		</p>
	</Slide>

	<Slide>
		<h2>Speaker View</h2>
		<p>
			There's a <a href="https://revealjs.com/speaker-view/">speaker view</a>. It includes a timer,
			preview of the upcoming slide as well as your speaker notes.
		</p>
		<p>Press the <em>S</em> key to try it out.</p>

		<aside class="notes">
			Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if
			you open the speaker notes window (hit 's' on your keyboard).
		</aside>
	</Slide>

	<Slide>
		<h2>Export to PDF</h2>
		<p>
			Presentations can be <a href="https://revealjs.com/pdf-export/">exported to PDF</a>, here's an
			example:
		</p>
		<iframe
			data-src="https://www.slideshare.net/slideshow/embed_code/42840540"
			width="445"
			height="355"
			frameborder="0"
			marginwidth="0"
			marginheight="0"
			scrolling="no"
			style="border:3px solid #666; margin-bottom:5px; max-width: 100%;"
			allowfullscreen
			title="reveal.js presentation integrated with a iframe on slideshare"
		/>
	</Slide>

	<Slide>
		<h2>Global State</h2>
		<p>
			Set <code>data-state="something"</code> on a slide and <code>"something"</code>
			will be added as a class to the document element when the slide is open. This lets you apply broader
			style changes, like switching the page background.
		</p>
	</Slide>

	<Slide state="customevent">
		<h2>State Events</h2>
		<p>
			Additionally custom events can be triggered on a per slide basis by binding to the <code
				>data-state</code
			> name.
		</p>
		<Code trim language="javascript" contenteditable>
			{@html `
Reveal.on( 'customevent', function() {
console.log( '"customevent" has fired' );
} );
			`}
		</Code>
	</Slide>

	<Slide>
		<h2>Take a Moment</h2>
		<p>
			Press B or . on your keyboard to pause the presentation. This is helpful when you're on stage
			and want to take distracting slides off the screen.
		</p>
	</Slide>

	<Slide>
		<h2>Much more</h2>
		<ul>
			<li>Right-to-left support</li>
			<li><a href="https://revealjs.com/api/">Extensive JavaScript API</a></li>
			<li><a href="https://revealjs.com/auto-slide/">Auto-progression</a></li>
			<li>
				<a href="https://revealjs.com/backgrounds/#parallax-background">Parallax backgrounds</a>
			</li>
			<li><a href="https://revealjs.com/keyboard/">Custom keyboard bindings</a></li>
		</ul>
	</Slide>

	<Slide>
		<h1>THE END</h1>
		<p>
			- <a href="https://slides.com">Try the online editor</a> <br />
			- <a href="https://github.com/hakimel/reveal.js">Source code &amp; documentation</a>
		</p>
	</Slide>
</RevealJsContext>
