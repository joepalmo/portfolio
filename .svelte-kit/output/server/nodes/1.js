

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4ffef45a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.94bd9f6c.js","_app/immutable/chunks/singletons.503f2661.js","_app/immutable/chunks/paths.36842c84.js"];
export const stylesheets = [];
export const fonts = [];
