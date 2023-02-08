<script lang="ts">
	export let trim: string;
	export let noescape: string;
	export let lineNumbers: string;
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
