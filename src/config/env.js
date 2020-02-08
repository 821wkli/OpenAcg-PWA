/**
 * URL configuration based on application running env
 *
 * apiBaseUrl: api domain
 * routerMode: # or /
 * imageBaseUrl: image cdn
 *
 */
let apiBaseUrl;
let routerMode;
let imageBaseUrl;

if (process.env.NODE_ENV == 'development') {
	apiBaseUrl='';
  imageBaseUrl = '';
	routerMode = 'hash'
}else{
	apiBaseUrl = 'http://openacg.ml';
	imageBaseUrl='http://image.openacg.ml'
	routerMode = 'hash'
}

export {apiBaseUrl, routerMode, imageBaseUrl}
