

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/research/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7fd49a80.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.94bd9f6c.js","_app/immutable/chunks/paths.36842c84.js","_app/immutable/chunks/Clouds.f8561e2c.js"];
export const stylesheets = ["_app/immutable/assets/3.f29b9cb5.css","_app/immutable/assets/index.c6fe65fb.css","_app/immutable/assets/Clouds.54ef1c16.css"];
export const fonts = [];
