<!--
    !! This component requires the highlight plugin 
    see https://revealjs.com/code/
-->
<script lang="ts">
	interface Props {
		/* fragment props */
		fragment?: boolean | undefined;
		autoslide?: number | undefined;
		id?: string | undefined;
		fragmentIndex?: number | undefined;

		/* code props */
		contenteditable?: boolean | undefined;
		language?: string | undefined;
		lineNumbers?: boolean | string | undefined;
		lineStartFrom?: string | undefined;
		noescape?: boolean | undefined;
		trim?: boolean | undefined;

		/** children */
		children: import('svelte').Snippet;
	}

	const {
		/* fragment props */
		fragment,
		autoslide,
		id,
		fragmentIndex,

		/* code props */
		contenteditable,
		language,
		lineNumbers,
		lineStartFrom,
		noescape,
		trim,

		/** children */
		children
	}: Props = $props();
</script>

<pre class:fragment data-auotslide={autoslide} data-id={id} data-fragment-index={fragmentIndex}>
    <code
		data-line-numbers={lineNumbers}
		data-ln-start-from={lineStartFrom}
		data-noescape={noescape}
		data-trim={trim}
		class={language}
		{contenteditable}>
		{@render children()}
    </code>
</pre>
