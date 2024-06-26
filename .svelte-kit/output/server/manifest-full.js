export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["JoePalmo.CV.2022.pdf","favicon.png","fonts/GT-America-Black.otf","fonts/GT-America-Bold.otf","fonts/GT-America-Condensed-Bold.otf","fonts/GT-America-Medium.otf","fonts/GT-America-Regular-Italic.otf","fonts/GT-America-Regular.otf","fonts/IBMPlexMono-Light.ttf","fonts/IBMPlexMono-Regular.ttf","img/HAQAST_fig.png","img/O3Fire.png","img/default.jpg","js/sketch.js"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".otf":"font/otf",".ttf":"font/ttf",".jpg":"image/jpeg",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.a1784c16.js","app":"_app/immutable/entry/app.e068f1be.js","imports":["_app/immutable/entry/start.a1784c16.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.503f2661.js","_app/immutable/chunks/paths.36842c84.js","_app/immutable/entry/app.e068f1be.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.94bd9f6c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
