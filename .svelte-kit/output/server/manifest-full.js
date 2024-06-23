export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","CNAME","favicon.png","images/.DS_Store","images/Kost_Darmo_1.jpeg","images/Kost_Darmo_2.jpeg","images/Kost_Darmo_3.jpeg","images/Kost_Darmo_4.jpeg","images/Kost_Darmo_5.jpeg","images/Kost_Darmo_6.jpeg","images/Kost_Darmo_luar.jpg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.8ceb6541.js","app":"_app/immutable/entry/app.646a7d7e.js","imports":["_app/immutable/entry/start.8ceb6541.js","_app/immutable/chunks/index.5232ee58.js","_app/immutable/chunks/singletons.40dfc704.js","_app/immutable/entry/app.646a7d7e.js","_app/immutable/chunks/index.5232ee58.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
