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
vue + vue-rotuer + vuex + webpack + ES6/7 + fetch + sass + flex + svg + http-proxy-middleware+nginx

Both http-proxy-middleware and nginx are used to proxy api server to bypass cross origin on browser.
but nginx is used on deployment

# Functions to be implemented
- [ ] home page -- todo
- [ ] search book page -- todo
- [ ] book detail page -- todo
- [ ] sorting by popularity,updated time -- todo
- [ ] reader page -- todo
- [ ] bookshelf page -- todo
- [ ] Setting page -- todo


# Project structure
```
|-- build                            // webpack config file
|-- config                           // dev and prod config
|-- dist                           	 // production build files
|
|-- src                              // source code directory
|   |-- components                   // component
|       |-- common                   // shared global elements
|			|-- refresh.vue           // refresh button
|       |-- footer                   // footer component
|       |-- header                 	 // header component
            |-- searchBar.vue           // refresh button
|
|   |-- config                       // basic config
|       |-- env.js                   // global env variables like api url, image url
|       |-- fetch.js                 // fetch api wrapper
|       |-- util.js           // common JS utily library
|       |-- rem.js                   // convert px to rem
|
|   |-- images                       // image files
|
|   |-- pages                        // page view
|       |-- home                     // home page
|       |-- book                     // book detail page
|		    |-- children
       	        |-- reader           // reader page

|       |-- search                   // search page
|       |-- bookshelf                // bookshelf page
|       |-- setting                  // app setting page
|
|
|   |-- plugins                      // p;ugins
|
|   |-- router                       // page routes config
|
|   |-- service                      // data
|		|-- template                 // mock data in development time
|		|-- apis.js               // ajax apis
|
|   |-- store                        // vuex state management
|
|       |-- action.js                // actions
|       |-- index.js                 // import vuex add/remove state and create vuex instance
|       |-- mutation-types.js        // define mutations constant name
|       |-- mutations.js             // mutations logics
|
|   |-- style
|       |-- common.scss              // common css style
|       |-- mixin.scss               //
|
|   |-- App.vue                      // top-level page component, app entry
|
|   |-- main.js                      // create vue, vue-router instance
|
|-- .babelrc                         // es6 grammar config
|-- .editorconfig                    // code style
|-- .gitignore                       // define files ignore by git
|-- favicon.ico                      // browser tab icon
|-- index.html                       // entery html file for definition of meta info and svg
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

Put all files in dist to nginx root directory
```




If this project is useful, give me a star 😊
