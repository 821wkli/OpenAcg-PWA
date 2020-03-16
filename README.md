# Background

When I read light novels and mangas,
always read on different mobile apps and websites as for each has its own data source but none of them have all books and manga.
So it's offten to switch between mutitple apps. I wonder it's greater if I can read them on only one app.
Another reason motivate me is reader apps on google play I use so far are just wrap the old-school non-mobile friendly page into webview.
officals.
## Why vue?

Nothing special, recently I have begun to learn vue.js, officals contributors
provide a well-written, easily understandable documentations. I feel confrontable with it. So, I choosed vue.

__Noted：This project is only for personal use only. All data come from third-party apps.__



# tech stack
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

If this project is useful, give me a star 😊
