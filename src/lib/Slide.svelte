<script lang="ts">
	export let autoAnimate: boolean | undefined = undefined;
	export let autoAnimateEasing: string | undefined = undefined;
	export let autoAnimateId: string | undefined = undefined;
	export let autoAnimateRestart: boolean | undefined = undefined;
	export let autoslide: number | undefined = undefined;
	export let background: string | undefined = undefined;
	export let backgroundColor: string | undefined = undefined;
	export let backgroundGradient: string | undefined = undefined;
	export let backgroundIframe: string | undefined = undefined;
	export let backgroundImage: string | undefined = undefined;
	export let backgroundInteractive: boolean | undefined = undefined;
	export let backgroundOpacity: string | undefined = undefined;
	export let backgroundPosition: string | undefined = undefined;
	export let backgroundRepeat: string | undefined = undefined;
	export let backgroundSize: string | undefined = undefined;
	export let backgroundTransition: string | undefined = undefined;
	export let backgroundVideo: string | undefined = undefined;
	export let backgroundVideoLoop: string | undefined = undefined;
	export let backgroundVideoMuted: string | undefined = undefined;
	export let charset: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let markdown: boolean | string | undefined = undefined;
	export let notes: string | undefined = undefined;
	export let separator: string | undefined = undefined;
	export let separatorNotes: string | undefined = undefined;
	export let separatorVertical: string | undefined = undefined;
	export let state: string | undefined = undefined;
	export let timing: number | undefined = undefined;
	export let transition: 'fade' | 'slide' | 'convex' | 'concave' | 'zoom' | undefined = undefined;
	export let transitionSpeed: 'slow' | 'fast' | undefined = undefined;
	export let visibility: 'hidden' | undefined = undefined;
</script>

<section
	data-auto-animate={autoAnimate}
	data-auto-animate-easing={autoAnimateEasing}
	data-auto-animate-id={autoAnimateId}
	data-auto-animate-restart={autoAnimateRestart}
	data-autoslide={autoslide}
	data-background={background}
	data-background-color={backgroundColor}
	data-background-gradient={backgroundGradient}
	data-background-iframe={backgroundIframe}
	data-background-image={backgroundImage}
	data-background-interactive={backgroundInteractive}
	data-background-opacity={backgroundOpacity}
	data-background-position={backgroundPosition}
	data-background-repeat={backgroundRepeat}
	data-background-size={backgroundSize}
	data-background-transition={backgroundTransition}
	data-background-video={backgroundVideo}
	data-background-video-loop={backgroundVideoLoop}
	data-background-video-muted={backgroundVideoMuted}
	data-charset={charset}
	data-id={id}
	data-markdown={typeof markdown === 'boolean' && markdown ? '' : markdown}
	data-notes={notes}
	data-separator={separator}
	data-separator-notes={separatorNotes}
	data-separator-vertical={separatorVertical}
	{state}
	data-timing={timing}
	data-transition={transition}
	data-transition-speed={transitionSpeed}
	data-visibility={visibility}
>
	<slot />
</section>
