<script lang="ts">
	/**
	 * !! this component requires the highlight plugin
     * see https://revealjs.com/code/
	 */

	export let trim: boolean;
	export let noescape: boolean;
	export let lineNumbers: boolean;
	export let lineStartFrom: string;
</script>

<pre>
    <code
		data-trim={trim}
		data-noescape={noescape}
		data-line-numbers={lineNumbers}
		data-ln-start-from={lineStartFrom}>
        <slot />
    </code>
</pre>
