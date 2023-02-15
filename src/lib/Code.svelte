<!--
    !! This component requires the highlight plugin 
    see https://revealjs.com/code/
-->
<script lang="ts">
	/* fragment props */
	export let fragment: boolean | undefined = undefined;
	export let autoslide: number | undefined = undefined;
	export let id: string | undefined = undefined;
	export let fragmentIndex: number | undefined = undefined;

	/* code props */
	export let contenteditable: boolean | undefined = undefined;
	export let language: string | undefined = undefined;
	export let lineNumbers: boolean | string | undefined = undefined;
	export let lineStartFrom: string | undefined = undefined;
	export let noescape: boolean | undefined = undefined;
	export let trim: boolean | undefined = undefined;
</script>

<pre class:fragment data-auotslide={autoslide} data-id={id} data-fragment-index={fragmentIndex}>
    <code
		data-line-numbers={lineNumbers}
		data-ln-start-from={lineStartFrom}
		data-noescape={noescape}
		data-trim={trim}
		class={language}
		{contenteditable}>
        <slot />
    </code>
</pre>
