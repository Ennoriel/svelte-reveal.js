<script lang="ts">
	interface Props {
		autoAnimate?: boolean | undefined;
		autoAnimateEasing?: string | undefined;
		autoAnimateId?: string | undefined;
		autoAnimateRestart?: boolean | undefined;
		autoslide?: number | undefined;
		background?: string | undefined;
		backgroundColor?: string | undefined;
		backgroundGradient?: string | undefined;
		backgroundIframe?: string | undefined;
		backgroundImage?: string | undefined;
		backgroundInteractive?: boolean | undefined;
		backgroundOpacity?: string | undefined;
		backgroundPosition?: string | undefined;
		backgroundRepeat?: string | undefined;
		backgroundSize?: string | undefined;
		backgroundTransition?: string | undefined;
		backgroundVideo?: string | undefined;
		backgroundVideoLoop?: string | undefined;
		backgroundVideoMuted?: string | undefined;
		charset?: string | undefined;
		id?: string | undefined;
		markdown?: boolean | string | undefined;
		notes?: string | undefined;
		separator?: string | undefined;
		separatorNotes?: string | undefined;
		separatorVertical?: string | undefined;
		state?: string | undefined;
		timing?: number | undefined;
		transition?: 'fade' | 'slide' | 'convex' | 'concave' | 'zoom' | undefined;
		transitionSpeed?: 'slow' | 'fast' | undefined;
		visibility?: 'hidden' | undefined;

		/** children */
		children: import('svelte').Snippet;
	}

	const {
		autoAnimate,
		autoAnimateEasing,
		autoAnimateId,
		autoAnimateRestart,
		autoslide,
		background,
		backgroundColor,
		backgroundGradient,
		backgroundIframe,
		backgroundImage,
		backgroundInteractive,
		backgroundOpacity,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
		backgroundTransition,
		backgroundVideo,
		backgroundVideoLoop,
		backgroundVideoMuted,
		charset,
		id,
		markdown,
		notes,
		separator,
		separatorNotes,
		separatorVertical,
		state,
		timing,
		transition,
		transitionSpeed,
		visibility,

		/** children */
		children
	}: Props = $props();
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
	data-state={state}
	data-timing={timing}
	data-transition={transition}
	data-transition-speed={transitionSpeed}
	data-visibility={visibility}
>
	{@render children()}
</section>
