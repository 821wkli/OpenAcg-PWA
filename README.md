# Background/Motivation
<p>
I read light novels and manga always on different mobile apps and websites as for each has its own data source but none of them have all books and manga. The action to switch between mutitple apps got me being anxiety all the time since I need to memorize which books are updated in specific apps. I wonder it's awesome if I can read them on single and clean platform while my eye not being hurted by crazy ads.
Another reason push me is reader apps I use so far are just wrapping the old-school non-mobile friendly page into a webview. Not truly native.
</p>

## Why Vue?
<p>
Nothing special, I have learnt Vue for halft year and use commonly on freelance projects, but normally which are design to be simple architecture, I haven't master skills like vuex state control across multiple and complex pages. A best way to dive into framework's low-level internals is creating something fun right? Also what attracts me to Vue.js is that the offical documentations is very easily understandable and well-structured.
</p>

>  [Backend api doc see here](https://github.com/821wkli/OpenAcg-PWA/blob/master/api-docs.md)
>
>  [demo](https://821wkli.github.io/OpenAcg-PWA/#/home)
> + If you are testing on PC, open browser in mobile debugging view.
> + So far I don't have any plan to support the part of novel being responsive on PC. However,the anime streaming page is fully responsive on multiplatform, of coz feel free to contribution.



__Noted：This project is only for personal use only, Secondary distribution is not allowed, all data come from third-party websites.__

# Screenshots


|Add to Home Screen | Skeleton loading |  Home page    |
| :-----------------------------------------------------: | :----: | ------------------------------------------------------- |
|                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/AddToHomeScreen.gif)          |                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/skeleton.gif)   |![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/home.PNG)  |

| Drop down menu  | Pull down refresh |  Pull up load more    |
| :-----------------------------------------------------: | :----: | ------------------------------------------------------- |
|                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/dropDownMenu.jpg)                      |  ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/pullDownRefresh.gif)| ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/pullUpLoadMore.gif) |

| Book detail | Favourite books |  Reading History    |
| :-----------------------------------------------------: | :----: | ------------------------------------------------------- |
|                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/bookDetail.PNG)                      |  ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/faviourites.gif)| ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/history.gif)|


| Book volume Panel | Seach book, recommendation, history |  Search results    |
| :-----------------------------------------------------: | :----: | ------------------------------------------------------- |
|                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/volumePanel.png)                      |  ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/search.png)| ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/searchResult.gif)

| 404 not found | Chapter reading page |  Setting panel    |
| :-----------------------------------------------------: | :----: | ------------------------------------------------------- |
|                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/404.gif)                      |  ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/chapterContent.png)| ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/chapterContentPanel.png)|

Dark mode | Switch chapter by panel |  Switch chapter by button    |
| :-----------------------------------------------------: | :----: | ------------------------------------------------------- |
|                                 ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/darkMode.png)                      |  ![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/chapterPanelScroll.gif)|![](https://github.com/821wkli/OpenAcg-PWA/raw/master/screenshots/switchChapter.gif)|


# Kindle Sync demo video

[![Watch the video](https://img.youtube.com/vi/rO1dU5Po6jQ/maxresdefault.jpg)](https://youtu.be/rO1dU5Po6jQ)




# Tech stack
vue + vue-rotuer + vuex + vue cli + ES6/7 + fetch + sass + flex layout + svg

For development purpose, vue cli comes with built-in proxy server to bypass cors-origin rule on browser. You don't need to change anything here.

On production server, make sure the location path /api on web server is proxied to base api url specified in vue.config.js.

For exmaple In nginx, the config will look like this.

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
- [x] novel home page
- [x] novel search page
- [x] book detail page
- [x] book reader page
- [x] bookshelf page
- [x] 404 page
- [ ] Support responsive desktop reader layout
- [x] Send to Kindle
- [ ] ebook conversion page
- [ ] manga home page
- [ ] manga reader page
- [X] anime home page
- [X] anime video streaming page

# Backend api performance benchmark

Load test with 100K requests using 1000 concurrent connections on a 2 vcpus nano server. 60 rqs might be acceatable due to hardware limitation? But I always heard something like CyPython sucks on processing IO-bounded operations. Not sure the following results produced is good or not. I will rewrite api in either Golang or Node to compare each other in my spare time, will be open sourced later.

```
Statistics        Avg      Stdev        Max
  Reqs/sec        462.07      40.89     786.34
  Latency         1.47s   316.27ms      1.88s
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     11.36MB/s

 TCP Connect.....................: Avg/mean=2.07ms      Median=0.00ms   p(95)=22.00ms
 Server Processing...............: Avg/mean=1470.30ms   Median=1526.00ms        p(95)=1647.00ms
 Content Transfer................: Avg/mean=2.42ms      Median=0.00ms   p(95)=10.00ms

Summary:
 Total Req.......................: 100000
 Failed Req......................: 0
 DNS Lookup......................: 6.00ms
 Req/s...........................: 462.07
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
            |-- kindle.vue
            |-- shareBox.vue
       |-- common                   // shared global elements
			|-- refresh.vue           // refresh button
            |-- addToHomeScreen.vue           // IOS add to home screen message tips
            |-- openButton.vue           // button
            |-- openModal.vue           // popup modal
            |-- openModalTab.vue           // modal tab
            |-- roundCheckbox.vue           // checkbox
            |-- swiper.vue           // native-like swiper

|-- header                 	 // header component
            |-- headTop.vue           // top bar
        |-- loader
            |-- dotLoader.vue
            |-- jumpLoader.vue
            |-- colorfulSpinner.vue
            |-- pokeBall.vue
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
        |-- 404                      // 404 page
            |-- 404.vue
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
        |-- Anime
            |-- children
                |-- List.vue
                |-- Detail.vue
            |-- Anime.vue


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



# Development
```

git clone https://github.com/821wkli/OpenAcg-PWA

cd OpenAcg-PWA

npm install -g @vue/cli && npm install

npm run dev

go http://localhost:8088
```



# Production build
```
npm run build
```

## Disclamer
+ This app uses the APIS and DATA provided by third-party websites and it not associated with offical publishers.

+ <strong>I don't store any stuff in servers, for video streaming OpenAcg offers torrent proxy service to forward bittorrent traffic over QUIC to browsers</strong>

+ All trademarks and copyrights belong to their repective owners and are used here under the terms of Fair use and the  Digital Millennium Copyrights Act (DMCA) *

## Rejection
+ The content provided by this application is just used for academic purpose.
+ We don't upload any e-books, novels and videos.
+ This application is just a way to organize browse, view and find light novels and animes provided by third-party data sources.
## License
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

If this project is useful for learning Vue, give me a star 😊



