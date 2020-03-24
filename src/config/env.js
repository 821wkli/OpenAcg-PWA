/**
 * URL configuration based on application running env
 *
 * apiBaseUrl: api domain
 * imageBaseUrl: image cdn
 *
 */
let apiBaseUrl
let imageBaseUrl

if (process.env.NODE_ENV === 'development') {
  apiBaseUrl = ''
  imageBaseUrl = 'http://cdn.openacg.ml'
} else {
  apiBaseUrl = 'https://flask.openacg.tk'
  imageBaseUrl = 'http://cdn.openacg.ml'
}

export { apiBaseUrl, imageBaseUrl }
