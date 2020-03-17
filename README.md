# Background

When I read light novels and mangas,
always read on different mobile apps and websites as for each has its own data source but none of them have all books and manga.
So it's offten to switch between mutitple apps. I wonder it's greater if I can read them on only one app.
Another reason motivate me is reader apps on google play I use so far are just wrap the old-school non-mobile friendly page into webview.
officals.
## Why vue?

Nothing special, recently I have begun to learn vue.js, officals contributors
provide a well-written, easily understandable documentations. I feel confrontable with it. So, I choosed vue.

>  [Backend api doc see here](https://github.com/821wkli/OpenAcg-PWA/blob/master/api-docs.md)
>
>  [API performance benchmark](#benchmark)
>
>  [demo](https://openacg.ml/home) 
> + If you are testing on PC, open browser in mobile debugging view.
> + So far I don't have any plan to support PC, of coz feel free to contribution.



__Noted：This project is only for personal use only, Commerical distribution is not allowed, all data come from third-party websites and apps.__



# Tech stack
vue + vue-rotuer + vuex + vue cli + ES6/7 + fetch + sass + flex layout + svg

For development purpose, vue cli comes with built-in proxy server to bypass cors-origin rule on browser. You don't need to change anything here.

On production server, make sure the location path /api on web server is proxied to base api url specified in vue.config.js.

In nginx, the config will look like this.

```
 location /api {
 include proxy_params;
 proxy_pass  https://openacg.ml;
 ## heders ....
                }

```

Then change the api base url in env.js to your own domain name

```
if (process.env.NODE_ENV === 'development') {
  apiBaseUrl = ''
} else {
  apiBaseUrl = 'https://yourDomainName.com'

}

```

# Functions to be implemented
- [X] home page
- [X] search page 
- [X] book detail page 
- [X] reader page
- [X] bookshelf page

# API performance benchmark

Load test with 100K requests using 1000 concurrent connections on a 2 cores server.

```
Statistics        Avg      Stdev        Max
  Reqs/sec        62.07      40.89     286.34
  Latency         1.47s   316.27ms      1.88s
  HTTP codes:
    1xx - 0, 2xx - 500, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     3.36MB/s

 TCP Connect.....................: Avg/mean=2.07ms      Median=0.00ms   p(95)=22.00ms
 Server Processing...............: Avg/mean=1470.30ms   Median=1526.00ms        p(95)=1647.00ms
 Content Transfer................: Avg/mean=2.42ms      Median=0.00ms   p(95)=10.00ms

Summary:
 Total Req.......................: 1000
 Failed Req......................: 0
 DNS Lookup......................: 6.00ms
 Req/s...........................: 64.01
```
# Project structure
```
|-- public                           // all files here will be  copyied to /dist on production build
|-- dist                           	 // production build files
|
|-- src                              // source code directory
    |-- apis                         // ajax calls logics
   |-- components                   // component
        |-- book
            |-- chapterList.vue
       |-- common                   // shared global elements
			|-- refresh.vue           // refresh button
       |-- header                 	 // header component
            |-- headTop.vue           // top bar
        |-- loader
            |-- dotLoader.vue
            |-- jumpLoader.vue
            |-- listSkeleton.vue
        |-- reader
            |-- chapterListPanel.vue
        |-- search
            |-- searchBar.vue

   |-- config                       // basic config
       |-- env.js                   // global env variables base api url, image url
        |-- langs.js                 // chinese hardcoded strings
        |-- rem.js                   // calculate optimal rem based on current dom window size
    


   |-- pages                        // page view
       |-- Home                     // home page
            |-- Home.vue
       |-- Book                     // book detail page
		    |-- Book.vue
        |-- Read
            |-- Read.vue
        |-- Search                  //search page
            |-- Search.vue

       |-- Bookshelf               
            |-- Bookshelf.vue


   |-- plugins                      // p;ugins
        |-- longTap.js               // Implementation of native mobile-like longTap touch event

   |-- router                       // page routes config
        |-- index.js

   

   |-- store                        // vuex state management
        |-- modules
            |-- book.js
            |-- bookshelf.js
            |-- home.js
            |-- read.js
            |-- search.js

        |-- action.js                
        |-- index.js                 // vuex instance creation
        |-- mutation-types.js        
        |-- mutations.js            

    |-- style
       |-- common.scss              // common css style
       |-- mixin.scss               //
    |-- utils
        |-- common.js               //common helper functions
        |-- fetch.js                // fetch api wrapper

   
|-- App.vue                      // top-level page component, app entry
|
|   |-- main.js                      // application entry point, 
    vue instance creation or external library/components can be registered on here.

|-- vue.config.js                   //vue cli config file
|-- babel.config.js                 //babel config file
|-- .eslintrc.js
|-- .editorconfig
|-- .browserslistrc                   
|-- .gitignore                       
|-- package.json                     // package.json
|-- README.md                        // readme
```



## Development
```

git clone https://github.com/821wkli/OpenAcg-PWA

cd OpenAcg-PWA

npm install

npm run dev

go http://localhost:8088
```



## Production build
```
npm run build
```

## License
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

If this project is useful for learning Vue, give me a star 😊


