import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        autoAnimate?: boolean | undefined;
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
        markdown?: string | undefined;
        separator?: string | undefined;
        separatorNotes?: string | undefined;
        separatorVertical?: string | undefined;
        timing?: number | undefined;
        transitionSpeed?: "slow" | "fast" | undefined;
        visibility?: "hidden" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SlideProps = typeof __propDef.props;
export type SlideEvents = typeof __propDef.events;
export type SlideSlots = typeof __propDef.slots;
export default class Slide extends SvelteComponentTyped<SlideProps, SlideEvents, SlideSlots> {
}
export {};
