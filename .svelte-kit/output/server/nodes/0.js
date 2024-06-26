import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.2e5d73a7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.94bd9f6c.js","_app/immutable/chunks/paths.36842c84.js"];
export const stylesheets = ["_app/immutable/assets/0.c6b67cc0.css","_app/immutable/assets/index.c6fe65fb.css"];
export const fonts = [];
