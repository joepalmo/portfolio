

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a2395ece.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.94bd9f6c.js","_app/immutable/chunks/paths.36842c84.js","_app/immutable/chunks/Clouds.f8561e2c.js"];
export const stylesheets = ["_app/immutable/assets/2.a7004731.css","_app/immutable/assets/index.c6fe65fb.css","_app/immutable/assets/Clouds.54ef1c16.css"];
export const fonts = [];
