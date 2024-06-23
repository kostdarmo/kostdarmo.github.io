

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.81741665.js","_app/immutable/chunks/index.5232ee58.js"];
export const stylesheets = [];
export const fonts = [];
