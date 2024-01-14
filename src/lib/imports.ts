export type Theme = () => Promise<{
	default: typeof import('*.css');
}>;

export const black: Theme = () => import('reveal.js/dist/theme/black.css');
export const beige: Theme = () => import('reveal.js/dist/theme/beige.css');
export const blood: Theme = () => import('reveal.js/dist/theme/blood.css');
export const league: Theme = () => import('reveal.js/dist/theme/league.css');
export const night: Theme = () => import('reveal.js/dist/theme/night.css');
export const moon: Theme = () => import('reveal.js/dist/theme/moon.css');
export const sky: Theme = () => import('reveal.js/dist/theme/sky.css');
export const simple: Theme = () => import('reveal.js/dist/theme/simple.css');
export const serif: Theme = () => import('reveal.js/dist/theme/serif.css');
export const solarized: Theme = () => import('reveal.js/dist/theme/solarized.css');
export const white: Theme = () => import('reveal.js/dist/theme/white.css');

export const monokai: Theme = () => import('reveal.js/plugin/highlight/monokai.css');
export const zenburn: Theme = () => import('reveal.js/plugin/highlight/zenburn.css');

export type Plugin = () => Promise<{
	default: Reveal.PluginFunction;
}>;

export const highlight = () => import('reveal.js/plugin/highlight/highlight');
export const markdown = () => import('reveal.js/plugin/markdown/markdown');
export const search = () => import('reveal.js/plugin/search/search');
export const notes = () => import('reveal.js/plugin/notes/notes');
export const math = () => import('reveal.js/plugin/math/math');
export const zoom = () => import('reveal.js/plugin/zoom/zoom');
