(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2a857974":"e30eb990","chunk-3a1b2665":"736dc84d","chunk-63909ae2":"fcae5942","chunk-69bb0676":"4bebd47b","chunk-aa6c812c":"9d8d7315","chunk-127560a0":"8691cb28","chunk-2da5ef85":"72c79daf","chunk-2e1661ce":"0aadf896","chunk-cd343fd6":"cafeaa8c","chunk-f345a40c":"afac53cf"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2a857974":1,"chunk-3a1b2665":1,"chunk-63909ae2":1,"chunk-69bb0676":1,"chunk-aa6c812c":1,"chunk-127560a0":1,"chunk-2da5ef85":1,"chunk-2e1661ce":1,"chunk-cd343fd6":1,"chunk-f345a40c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2a857974":"2fbfd961","chunk-3a1b2665":"743161a4","chunk-63909ae2":"cdaba842","chunk-69bb0676":"cea5dfb5","chunk-aa6c812c":"e620fe9b","chunk-127560a0":"2163f011","chunk-2da5ef85":"23eb5b43","chunk-2e1661ce":"ac3cbfec","chunk-cd343fd6":"7b307738","chunk-f345a40c":"db50993a"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3dfd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0",visibility:"hidden"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-arrow",viewBox:"0 0 8 16"}},[n("path",{attrs:{d:"M.146 7.646a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7v.708l7-7a.5.5 0 0 0-.708-.708l-7 7z"}})]),n("symbol",{attrs:{id:"icon-search",viewBox:"0 0 17 18"}},[n("path",{attrs:{d:"M12.775 14.482l3.371 3.372a.5.5 0 0 0 .708-.708l-3.372-3.37-1.817-1.818a.5.5 0 1 0-.707.707l1.817 1.817zM1 7.14a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm13 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"}})]),n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9765"}},[n("path",{attrs:{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z","p-id":"9766"}})]),n("symbol",{attrs:{id:"icon-author",viewBox:"0 0 10 12"}},[n("path",{attrs:{d:"M6.375 6.683C7.053 5.873 7.5 4.649 7.5 3.6 7.5 2.023 6.462 1 5 1S2.5 2.023 2.5 3.6c0 1.05.447 2.274 1.125 3.083a1 1 0 0 1-.463 1.595C1.79 8.715 1 9.537 1 10.5c0-.106-.036-.165-.012-.147.136.1.39.21.743.308C2.52 10.88 3.675 11 5 11c1.325 0 2.48-.12 3.27-.339.352-.097.606-.208.742-.308.024-.018-.012.04-.012.147 0-.963-.789-1.785-2.162-2.222a1 1 0 0 1-.463-1.595zm1.18.071a5.23 5.23 0 0 1-.414.571c.226.072.444.155.653.25l.306.15C9.222 8.32 10 9.268 10 10.5c0 1-2.239 1.5-5 1.5s-5-.5-5-1.5c0-1.232.778-2.179 1.9-2.775l.306-.15c-.306.15.427-.178.653-.25a5.23 5.23 0 0 1-.414-.57l-.17-.287C1.79 5.59 1.5 4.55 1.5 3.6 1.5 1.39 3.067 0 5 0s3.5 1.39 3.5 3.6c0 .951-.29 1.991-.775 2.868l-.17.286z"}})]),n("symbol",{attrs:{id:"icon-arrow-r",viewBox:"0 0 7 12"}},[n("path",{attrs:{d:"M6.146 6.354v-.708l-5.5 5.5a.5.5 0 0 0 .708.708l5.5-5.5a.5.5 0 0 0 0-.708l-5.5-5.5a.5.5 0 1 0-.708.708l5.5 5.5z"}})]),n("symbol",{attrs:{id:"icon-book",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2904"}},[n("path",{attrs:{d:"M648.84736 775.49568c-40.73472 0-107.74528 11.63264-116.46976 37.84704h-37.84704c-11.65312-26.19392-75.71456-37.84704-116.49024-37.84704H162.6112v-564.8384h232.91904c49.50016 0 93.16352 26.19392 116.46976 64.04096 23.30624-37.84704 66.99008-64.04096 116.46976-64.04096H861.3888v564.85888H648.84736z m-154.3168-448.38912c0-46.57152-49.50016-78.60224-96.07168-78.60224H203.38688v486.23616h174.67392c37.86752 0 99.00032 0 116.49024 29.12256V327.10656z m329.0112-78.60224h-195.072c-49.47968 0-96.07168 32.01024-96.07168 78.60224v433.82784c17.48992-29.12256 78.60224-29.12256 116.46976-29.12256h174.6944V248.50432z m0 0",fill:"","p-id":"2905"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-remove",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5161"}},[n("path",{attrs:{d:"M512 106.666667a405.333333 405.333333 0 1 0 405.333333 405.333333A405.333333 405.333333 0 0 0 512 106.666667z m120.533333 489.6a25.621333 25.621333 0 0 1 0 36.266666 25.749333 25.749333 0 0 1-36.266666 0L512 548.266667l-84.266667 84.266666a25.749333 25.749333 0 0 1-36.266666 0 25.621333 25.621333 0 0 1 0-36.266666L475.733333 512l-84.266666-84.266667a25.642667 25.642667 0 0 1 36.266666-36.266666L512 475.733333l84.266667-84.266666a25.642667 25.642667 0 0 1 36.266666 36.266666L548.266667 512z",fill:"#d81e06","p-id":"5162"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-delete",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1561"}},[n("path",{attrs:{d:"M663 361.6h51.2v440.6H663z",fill:"#24BC77","p-id":"1562"}}),n("path",{attrs:{d:"M772.3 219.5c0.5-4.5 0.8-9 0.8-13.4v-18.4c0-68.1-55.4-123.5-123.5-123.5H374.2c-68.1 0-123.5 55.4-123.5 123.5v18.4c0 4.5 0.3 9 0.8 13.4H71.2v51.2h102.5v607.8c0 44.7 36.4 81 81 81h514.1c44.7 0 81-36.4 81-81V270.7h102.6v-51.2H772.3z m-467.4-13.4v-18.4c0-38.2 31.1-69.2 69.3-69.2h275.4c38.2 0 69.3 31.1 69.3 69.2v18.4c0 4.5-0.5 9-1.4 13.4H304.8l1.3-0.3c-0.8-4.2-1.2-8.7-1.2-13.1zM798 878.5c0 16.1-13.1 29.1-29.1 29.1H254.8c-16.1 0-29.1-13.1-29.1-29.1V270.7H798v607.8z",fill:"#24BC77","p-id":"1563"}}),n("path",{attrs:{d:"M484 361.6h51.2v440.6H484zM305 361.6h51.2v440.6H305z",fill:"#24BC77","p-id":"1564"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-tick",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1289"}},[n("path",{attrs:{d:"M832 0H192C85.952 0 0 86.016 0 192v640a192 192 0 0 0 192 192h640a192 192 0 0 0 192-192V192c0-105.984-85.952-192-192-192z m64 832c0 35.392-28.608 64-64 64H192a64 64 0 0 1-64-64V192c0-35.328 28.672-64 64-64h640a64 64 0 0 1 64 64v640zM669.376 330.88L443.136 557.12l-90.56-90.496c-24.96-25.024-65.472-25.024-90.496 0s-25.024 65.536 0 90.496l135.808 135.744a63.936 63.936 0 0 0 90.496 0l271.488-271.488c25.024-25.024 25.024-65.472 0-90.496s-65.472-25.024-90.496 0z",fill:"#8a8a8a","p-id":"1290"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-delete-white",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1561"}},[n("path",{attrs:{d:"M663 361.6h51.2v440.6H663z",fill:"#ffffff","p-id":"1562"}}),n("path",{attrs:{d:"M772.3 219.5c0.5-4.5 0.8-9 0.8-13.4v-18.4c0-68.1-55.4-123.5-123.5-123.5H374.2c-68.1 0-123.5 55.4-123.5 123.5v18.4c0 4.5 0.3 9 0.8 13.4H71.2v51.2h102.5v607.8c0 44.7 36.4 81 81 81h514.1c44.7 0 81-36.4 81-81V270.7h102.6v-51.2H772.3z m-467.4-13.4v-18.4c0-38.2 31.1-69.2 69.3-69.2h275.4c38.2 0 69.3 31.1 69.3 69.2v18.4c0 4.5-0.5 9-1.4 13.4H304.8l1.3-0.3c-0.8-4.2-1.2-8.7-1.2-13.1zM798 878.5c0 16.1-13.1 29.1-29.1 29.1H254.8c-16.1 0-29.1-13.1-29.1-29.1V270.7H798v607.8z",fill:"#ffffff","p-id":"1563"}}),n("path",{attrs:{d:"M484 361.6h51.2v440.6H484zM305 361.6h51.2v440.6H305z",fill:"#ffffff","p-id":"1561"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-share",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1273"}},[n("path",{attrs:{d:"M768 711.111111c-31.288889 0-59.733333 11.377778-85.333333 28.444445l-372.622223-213.333334c0-5.688889 2.844444-11.377778 2.844445-14.222222s0-11.377778-2.844445-14.222222L682.666667 284.444444c22.755556 17.066667 54.044444 28.444444 85.333333 28.444445 79.644444 0 142.222222-62.577778 142.222222-142.222222s-62.577778-142.222222-142.222222-142.222223-142.222222 62.577778-142.222222 142.222223c0 5.688889 0 8.533333 2.844444 14.222222L256 398.222222c-22.755556-17.066667-51.2-28.444444-85.333333-28.444444-79.644444 0-142.222222 62.577778-142.222223 142.222222s62.577778 142.222222 142.222223 142.222222c31.288889 0 59.733333-11.377778 85.333333-28.444444l372.622222 213.333333c0 5.688889-2.844444 8.533333-2.844444 14.222222 0 79.644444 62.577778 142.222222 142.222222 142.222223s142.222222-62.577778 142.222222-142.222223-62.577778-142.222222-142.222222-142.222222z",fill:"","p-id":"1274"}})]),n("symbol",{attrs:{id:"icon-copy",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2597"}},[n("path",{attrs:{d:"M682.666667 42.666667H85.333333v682.666666h85.333334V128h512V42.666667zM256 213.333333l4.522667 768H896V213.333333H256z m554.666667 682.666667H341.333333V298.666667h469.333334v597.333333z",fill:"#525A65","p-id":"2598"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-folder",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2103"}},[n("path",{attrs:{d:"M897.454886 384C897.457811 384.248175 897.45927 384.496712 897.45927 384.745603L897.45927 768.323283C897.45927 803.066202 868.680045 831.999994 833.179072 831.999994L192.280198 832C157.224124 832 128 803.195334 128 767.662976L128 577.341503 128 384 897.454886 384ZM128 320 128 255.894722C128 220.715831 156.673976 192 192.045118 192L569.638012 192C605.046528 192 644.521402 218.443182 657.891085 251.0625L686.146502 320 128 320Z","p-id":"2104"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-file",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5240"}},[n("path",{attrs:{d:"M256 85.333333h426.666667l170.666666 170.666667v597.333333a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z m391.338667 85.333334H256v682.666666h512V291.328h-120.661333V170.666667z",fill:"#000000","p-id":"5241"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-recorder",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3468"}},[n("path",{attrs:{d:"M945.6 323.52l-211.52 105.6A96 96 0 0 0 640 352a160 160 0 1 0-192 0H275.84a128 128 0 1 0-165.44 1.92A96 96 0 0 0 32 448v384a96 96 0 0 0 96 96h512a96 96 0 0 0 94.08-77.12l211.52 105.6A32 32 0 0 0 992 928V352a32 32 0 0 0-46.4-28.48zM448 224a96 96 0 1 1 96 96 96 96 0 0 1-96-96zM192 192a64 64 0 1 1-64 64 64 64 0 0 1 64-64z m480 640a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V448a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32z m256 44.16l-192-96v-280.32l192-96z",fill:"#364F6B","p-id":"3469"}}),n("path",{attrs:{d:"M416 480H224a64 64 0 0 0-64 64v192a64 64 0 0 0 64 64h192a64 64 0 0 0 64-64v-192a64 64 0 0 0-64-64z m-192 256v-192h192v192z",fill:"#364F6B","p-id":"3470"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-play",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6114"}},[n("path",{attrs:{d:"M802.133333 85.333333h-580.266666C98.986667 85.333333 0 184.32 0 307.2v409.6c0 122.88 98.986667 221.866667 221.866667 221.866667h580.266666c122.88 0 221.866667-98.986667 221.866667-221.866667V307.2c0-122.88-98.986667-221.866667-221.866667-221.866667z m-92.16 440.32l-307.2 204.8c-3.413333 3.413333-6.826667 3.413333-10.24 3.413334-3.413333 0-6.826667 0-6.826666-3.413334-6.826667 0-10.24-6.826667-10.24-13.653333V307.2c0-6.826667 3.413333-13.653333 10.24-13.653333s13.653333-3.413333 17.066666 0l307.2 204.8c3.413333 3.413333 6.826667 6.826667 6.826667 13.653333s-3.413333 10.24-6.826667 13.653333z",fill:"#d4237a","p-id":"6115"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-telegram",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2397"}},[n("path",{attrs:{d:"M881.706667 158.592l-756.48 291.712c-51.626667 20.736-51.328 49.536-9.472 62.378667l194.218666 60.586666 449.365334-283.52c21.248-12.928 40.661333-5.973333 24.704 8.192l-364.074667 328.576h-0.085333l0.085333 0.042667-13.397333 200.192c19.626667 0 28.288-9.002667 39.296-19.626667l94.336-91.733333 196.224 144.938667c36.181333 19.925333 62.165333 9.685333 71.168-33.493334l128.810666-607.061333c13.184-52.864-20.181333-76.8-54.698666-61.184z","p-id":"2398",fill:"#ffffff"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-whatsapp",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3963"}},[n("path",{attrs:{d:"M746.581333 613.632c-12.842667-6.4-75.392-36.992-87.04-41.216-11.648-4.309333-20.181333-6.4-28.714666 6.4-8.405333 12.586667-32.896 41.130667-40.277334 49.578667-7.466667 8.32-14.890667 8.96-27.562666 3.2-12.8-6.4-53.888-19.84-102.528-63.36-37.888-33.92-63.317333-75.52-70.826667-88.32-7.424-12.8-0.810667-19.84 5.546667-26.24 5.802667-5.76 12.842667-14.72 19.242666-22.314667 6.229333-7.722667 8.277333-12.842667 12.672-21.162667 4.266667-8.96 2.090667-16-1.066666-22.357333-3.2-6.4-28.672-69.12-39.338667-94.122667-10.24-24.917333-20.778667-21.76-28.672-21.76-7.338667-0.64-15.829333-0.64-24.362667-0.64-8.533333 0-22.314667 3.157333-34.005333 15.317334-11.648 12.8-44.586667 43.52-44.586667 105.6s45.653333 122.24 52.010667 131.2c6.357333 8.32 89.813333 136.32 217.6 191.36 30.464 12.8 54.186667 20.48 72.704 26.837333 30.464 9.685333 58.24 8.32 80.213333 5.162667 24.490667-3.882667 75.392-30.762667 86.016-60.842667 10.88-30.08 10.88-55.04 7.68-60.8-3.157333-5.76-11.52-8.96-24.32-14.72m-232.362666 317.568h-0.682667c-75.52 0-150.357333-20.48-215.68-58.88l-15.36-9.130667-160 41.6 42.88-155.52-10.197333-16a421.077333 421.077333 0 0 1-64.682667-224.426666c0-232.32 190.08-421.76 424.192-421.76a420.906667 420.906667 0 0 1 299.562667 124.16 417.621333 417.621333 0 0 1 124.117333 298.24c-0.170667 232.277333-190.293333 421.76-423.893333 421.76M875.52 147.157333C778.24 53.12 650.24 0 513.92 0 233.088 0 4.437333 227.584 4.309333 507.434667c0 89.429333 23.424 176.64 68.053334 253.653333L0 1024l270.293333-70.485333a514.645333 514.645333 0 0 0 243.626667 61.738666h0.256c280.96 0 509.696-227.669333 509.824-507.562666 0-135.509333-52.906667-263.04-149.12-358.869334",fill:"#ffffff","p-id":"3964"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-twitter",viewBox:"0 0 1025 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5161"}},[n("path",{attrs:{d:"M1024.032 194.432c-37.664 16.704-78.176 28-120.672 33.088 43.36-26.016 76.672-67.168 92.384-116.224-40.608 24.064-85.568 41.568-133.408 50.976-38.336-40.832-92.928-66.336-153.344-66.336-116.032 0-210.08 94.048-210.08 210.08 0 16.48 1.856 32.512 5.44 47.872-174.592-8.768-329.408-92.416-433.024-219.52-18.08 31.04-28.448 67.104-28.448 105.632 0 72.896 37.088 137.184 93.472 174.88-34.432-1.088-66.816-10.528-95.168-26.272-0.032 0.864-0.032 1.76-0.032 2.656 0 101.792 72.416 186.688 168.512 206.016-17.632 4.8-36.192 7.36-55.36 7.36-13.536 0-26.688-1.312-39.52-3.776 26.752 83.456 104.32 144.192 196.256 145.888-71.904 56.352-162.496 89.92-260.928 89.92-16.96 0-33.664-0.992-50.112-2.944 92.96 59.616 203.392 94.4 322.048 94.4 386.432 0 597.728-320.128 597.728-597.76 0-9.12-0.192-18.176-0.608-27.168C960.256 273.536 995.872 236.544 1024.032 194.432z","p-id":"5162",fill:"#ffffff"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-facebook",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2113"}},[n("path",{attrs:{d:"M758.88 43.424C743.424 41.152 690.304 36.576 628.576 36.576 499.424 36.576 410.88 115.424 410.88 260L410.88 384.576 265.152 384.576 265.152 553.728 410.88 553.728 410.88 987.424 585.728 987.424 585.728 553.728 730.88 553.728 753.152 384.576 585.728 384.576 585.728 276.576C585.728 228 598.88 194.304 669.152 194.304L758.88 194.304 758.88 43.424Z","p-id":"2114",fill:"#ffffff"}})]),n("symbol",{staticClass:"icon",attrs:{id:"icon-download",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5033"}},[n("path",{attrs:{d:"M934.912 588.8c37.888 36.864 61.44 88.064 61.44 145.408 0 110.592-90.112 200.704-200.704 200.704-111.616 0-201.728-90.112-201.728-201.728 0-8.192 0-15.36 1.024-23.552C607.232 610.304 692.224 532.48 795.648 532.48c53.248 0 102.4 21.504 139.264 56.32z",fill:"#F78B7F","p-id":"5034"}}),n("path",{attrs:{d:"M950.272 512c0 16.384-2.048 31.744-5.12 46.08-41.984-35.84-94.208-55.296-149.504-55.296-116.736 0-215.04 87.04-228.352 203.776v3.072H186.368c-88.064 0-158.72-70.656-158.72-158.72 0-68.608 43.008-125.952 103.424-148.48v-10.24c0-80.896 65.536-147.456 147.456-147.456 25.6 0 50.176 7.168 71.68 18.432 22.528-100.352 112.64-175.104 220.16-175.104 124.928 0 225.28 101.376 225.28 225.28v4.096c88.064 20.48 154.624 100.352 154.624 194.56z",fill:"#29D1ED","p-id":"5035"}}),n("path",{attrs:{d:"M900.096 736.256l-102.4 102.4-101.376-102.4h60.416v-143.36H839.68v143.36z",fill:"#FFFFFF","p-id":"5036"}})])])]),n("router-view")],1)},a=[],o=n("5530"),i=n("2f62"),c={name:"App",methods:Object(o["a"])({},Object(i["b"])(["initReadingHistory","initSetting","saveSystem"])),created:function(){this.initReadingHistory(),this.initSetting();var t,e=navigator.userAgent||navigator.vendor,n=/android/i.test(e),r=/iPad|iPhone/.test(e)&&!window.MSStream;t=n?"Android":r?"IOS":"PC",this.saveSystem(t)},mounted:function(){this.$nextTick((function(){window.scrollTo(0,1)}))}},s=c,u=(n("5c0b"),n("2877")),l=Object(u["a"])(s,r,a,!1,null,null,null);e["default"]=l.exports},"51be":function(t,e,n){"use strict";var r,a;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),r="https://openacg.ml",a="http://cdn.openacg.ml"},"56d7":function(t,e,n){"use strict";n.r(e);n("99af");var r=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=n("3dfd"),i=(n("d3b7"),n("8c4f"));a["a"].use(i["a"]);var c=[{path:"/",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))},children:[{path:"",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-aa6c812c"),n.e("chunk-2da5ef85")]).then(n.bind(null,"3c68"))}},{path:"/book/:bookid",name:"book",component:function(){return Promise.all([n.e("chunk-aa6c812c"),n.e("chunk-127560a0")]).then(n.bind(null,"88ea"))}},{path:"/bookshelf",name:"bookshelf",component:function(){return n.e("chunk-3a1b2665").then(n.bind(null,"c67e"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-69bb0676").then(n.bind(null,"855b"))}},{path:"/reader/:bookid",name:"reader",component:function(){return Promise.all([n.e("chunk-aa6c812c"),n.e("chunk-2e1661ce")]).then(n.bind(null,"2ba5"))}},{path:"/404",name:"404",component:function(){return n.e("chunk-f345a40c").then(n.bind(null,"0d48"))}},{path:"/anime",name:"anime",component:function(){return n.e("chunk-cd343fd6").then(n.bind(null,"39cd"))},redirect:"/anime/list",children:[{path:"/anime/list",name:"list",meta:{keepAlive:!0},component:function(){return n.e("chunk-2a857974").then(n.bind(null,"7ba5"))}},{path:"/anime/detail/:mid",name:"detail",component:function(){return n.e("chunk-63909ae2").then(n.bind(null,"e2e8"))}}]},{path:"*",redirect:"/404"}]}],s=new i["a"]({mode:"history",routes:c,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),u=s,l=n("2f62"),d={state:{latestBookList:[],menuToggled:!1,homePagePosY:0},mutations:{SAVE_MENU_TOGGLED:function(t,e){t.menuToggled=e},SAVE_LATEST_BOOK_LIST:function(t,e){t.latestBookList=e},SAVE_HOME_SCROLLING_POSY:function(t,e){t.homePagePosY=e},SAVE_HOTLIST:function(t,e){t.hotList=e}},getters:{homePagePosY:function(t){return t.homePagePosY},latestBookList:function(t){return t.latestBookList},isMenuToggled:function(t){return t.menuToggled}},actions:{saveMenuToggled:function(t,e){var n=t.commit;n("SAVE_MENU_TOGGLED",e)},saveHomeScrollingPosY:function(t,e){var n=t.commit;n("SAVE_HOME_SCROLLING_POSY",e)},saveLatestBookList:function(t,e){var n=t.commit;n("SAVE_LATEST_BOOK_LIST",e)},removeLatestBookList:function(t){var e=t.commit;e("SAVE_LATEST_BOOK_LIST",null)}}},f=d,h=(n("4de4"),n("c740"),n("caad"),n("2532"),n("96cf"),n("1da1")),p=n("2909"),m=n("cf45"),v=n("f8c8"),w={state:{book:{},chapterList:[],currentVolumeChapters:null,recentReadingChapterList:[]},mutations:{SAVE_BOOK:function(t,e){t.book=e},SAVE_CURRENT_VOLUME_CHAPTERS:function(t,e){t.currentVolumeChapters=e},SAVE_CHAPTER_LIST:function(t,e){t.chapterList=e},SAVE_RECENT_READING_CHAPTER_LIST:function(t,e){t.recentReadingChapterList=e,Object(m["e"])("recentReadingChapterList",t.recentReadingChapterList)}},getters:{book:function(t){return t.book},recentReadingChapterList:function(t){var e=t.recentReadingChapterList;return e instanceof Promise?[]:e},chapterList:function(t){return t.chapterList},currentVolumeChapters:function(t){return t.currentVolumeChapters}},actions:{saveBook:function(t,e){var n=t.commit;n("SAVE_BOOK",e)},removeRecentReadingChapterList:function(t,e){var n=t.commit,r=t.state,a=e;if(Array.isArray(e)){var o=Object(p["a"])(r.recentReadingChapterList).filter((function(t){return!a.includes(t.bookid)}));n("SAVE_RECENT_READING_CHAPTER_LIST",o)}},saveRecentReadingChapterList:function(t,e){var n=t.commit,r=t.state,a=Object(p["a"])(r.recentReadingChapterList),o=a.findIndex((function(t){return t.bookid===e.bookid}));-1===o?a.unshift(e):a[o]=e,n("SAVE_RECENT_READING_CHAPTER_LIST",a)},saveCurrentVolumeChapters:function(t,e){var n=t.commit;n("SAVE_CURRENT_VOLUME_CHAPTERS",e)},initReadingHistory:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(m["c"])("recentReadingChapterList");case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0=[];case 6:r=e.t0,n("SAVE_RECENT_READING_CHAPTER_LIST",r);case 8:case"end":return e.stop()}}),e)})))()},initChapterList:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=[],n.next=4,Object(v["e"])(e.id);case 4:o=n.sent,o.response&&(a=Object(p["a"])(o.response)),r("SAVE_CHAPTER_LIST",a);case 7:case"end":return n.stop()}}),n)})))()},updateReadingHistory:function(t,e,n,r){var a=t.commit,o=t.state,i=Object(p["a"])(o.recentReadingChapterList),c={book:Object.assign({},e),chapterid:n,posY:r},s=i.findIndex((function(t){return t.book.id===e.id}));-1===s?i.push(c):i[s]=c,a("SAVE_RECENT_READING_CHAPTER_LIST",c)}}},g=w,b=(n("45fc"),{state:{bookshelfList:[],checkedAll:!1},mutations:{SAVE_BOOKSHELF_LIST:function(t,e){t.bookshelfList=e,Object(m["e"])("bookshelf",e)},SAVE_CHECKALL:function(t,e){t.checkedAll=e}},actions:{loadBookshelfList:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(m["c"])("bookshelf");case 3:r=e.sent,n("SAVE_BOOKSHELF_LIST",r);case 5:case"end":return e.stop()}}),e)})))()},removeBook:function(t,e){var n=t.commit,r=t.state,a=r.bookshelfList.filter((function(t){return t.id!==e.id}));n("SAVE_BOOKSHELF_LIST",a)},checkAll:function(t){var e=t.commit,n=t.state,r=!n.checkedAll;e("SAVE_CHECKALL",r)},updateBookshelf:function(t,e){var n=t.commit;t.state;n("SAVE_BOOKSHELF_LIST",e)},saveBookToBookshelf:function(t,e){var n=t.commit,r=t.state,a=null;a=Object(m["d"])(r.bookshelfList)?[]:Object(p["a"])(r.bookshelfList);var o=a.some((function(t){return t.id===e.id}));o||a.unshift(e),n("SAVE_BOOKSHELF_LIST",a)}},getters:{bookshelfList:function(t){return t.bookshelfList},isCheckedAll:function(t){return t.checkedAll}}}),E=b,k={state:{hotList:[],searchHistoryList:[]},mutations:{SAVE_HOTLIST:function(t,e){t.hotList=e},SAVE_SEARCH_HISTORY_LIST:function(t,e){t.searchHistoryList=e,Object(m["e"])("searchHistory",e)}},actions:{initSearchHistory:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(m["c"])("searchHistory");case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0=[];case 6:r=e.t0,n("SAVE_SEARCH_HISTORY_LIST",r);case 8:case"end":return e.stop()}}),e)})))()},saveHotList:function(t,e){var n=t.commit;n("SAVE_HOTLIST",e)},saveSearchHistory:function(t,e){var n=t.commit,r=t.state,a=r.searchHistoryList.some((function(t){return t.title===e.title}));if(!a){var o=Object(p["a"])(r.searchHistoryList);o.push(e),n("SAVE_SEARCH_HISTORY_LIST",o)}},cleanSearchHistory:function(t){var e=t.commit;e("SAVE_SEARCH_HISTORY_LIST",[])}},getters:{hotList:function(t){return t.hotList},searchHistory:function(t){return t.searchHistoryList}}},S=k,y={state:{setting:{}},mutations:{SAVE_SETTING:function(t,e){t.setting=e,Object(m["e"])("setting",e)}},actions:{saveSetting:function(t,e){var n=t.commit;n("SAVE_SETTING",e)},initSetting:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(m["c"])("setting");case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={fontSize:"0.8rem",darkTheme:!1};case 6:r=e.t0,n("SAVE_SETTING",r);case 8:case"end":return e.stop()}}),e)})))()}},getters:{setting:function(t){return t.setting}}},L=y,C={state:{currentAnime:{},searchResult:[]},mutations:{SAVE_CURRENT_ANIME:function(t,e){t.currentAnime=e},SAVE_SEARCH_RESULT:function(t,e){t.searchResult=e}},getters:{currentAnime:function(t){return t.currentAnime},searchResult:function(t){return t.searchResult}},actions:{saveCurrentAnime:function(t,e){var n=t.commit;t.state;n("SAVE_CURRENT_ANIME",e)},saveSearchResults:function(t,e){var n=t.commit;t.state;n("SAVE_SEARCH_RESULT",e)}}},T=C;a["a"].use(l["a"]);var A=new l["a"].Store({state:{system:""},mutations:{SAVE_SYSTEM:function(t,e){t.system=e}},getters:{system:function(t){return t.system}},actions:{saveSystem:function(t,e){var n=t.commit;t.state;n("SAVE_SYSTEM",e)}},modules:{home:f,book:g,bookshelf:E,search:S,read:L,anime:T}}),_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(t){}});var O={headBar:{myBookshelf:"我的書櫃"},homePage:{novel:"小說",anime:"動畫",comic:"漫畫",music:"音樂",noMoreData:"没有更多數據",unknownError:"未知錯誤"},bookPage:{startReading:"開始閱讀",continueReading:"繼續閱讀",addToBookshelf:"加入書櫃",unknownNumber:"未知幾多",addedToBookshelf:"",syncKindle:"",totalVolumes:"",aescending:"",descending:"",copyRightMessage:"因版權問題，OpenAcg不再提供該小說的閱讀！\n\n\n\n\n"},readPage:{lastChapter:"上一章",nextChapter:"下一章",menu:"目錄",lightMode:"日光模式",darkMode:"夜間模式",lastChapterMessage:"這是最後一章",firstChapterMessage:"這是第一章"},bookshelfPage:{collection:"個人收藏",history:"閱讀記錄",selectAll:"全選",reverseAll:"反選",continueReading:"繼續閱讀",remove:"移除"},animePage:{search:"搜尋",noMoreData:"無更多數據",networkError:"網絡連線不穩定,請重新刷新頁面",unknownError:"未知錯誤",downloadFailed:"下載失敗",seedDead:"seed 已死",notSupportHEVC:"當前瀏覽器不支援經HEVC壓縮的視頻檔案，播放時，可能只有聲音而沒有畫面，你可以下載本視頻，以支援解析HEVC視頻的播放器，例如VLC player播放本集或者選擇其他非HEVC格式的數據"},common:{copySucess:"拷貝成功",copyFailed:"拷貝失敗"}},H=(n("a034"),n("cc20"),n("7869")),R=n.n(H);a["a"].use(R.a,{type:"center",duration:3e3,wordWrap:!0,width:"auto"}),a["a"].config.productionTip=!1,a["a"].prototype.$lang=Object(r["a"])({},O),a["a"].prototype.$hostURL="".concat(window.location.protocol,"//").concat(window.location.host),new a["a"]({router:u,store:A,render:function(t){return t(o["default"])}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},a034:function(t,e){(function(t,e){var n=t.documentElement,r="orientationchange"in window?"orientationchange":"resize",a=function(){var t=n.clientWidth;t&&(n.style.fontSize=t/320*20+"px")};t.addEventListener&&(e.addEventListener(r,a,!1),t.addEventListener("DOMContentLoaded",a,!1))})(document,window)},cf45:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));n("b680"),n("96cf");var r=n("1da1"),a=n("a002"),o=n.n(a),i=function(t){if(t instanceof Array){if(0===t.length)return!0}else{if(!(t instanceof Object))return null===t||""===t||void 0===t;if("{}"===JSON.stringify(t))return!0}return!1},c=function(t,e){t&&o.a.setItem(t,e)},s=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.getItem(e);case 3:if(n=t.sent,!i(n)){t.next=6;break}return t.abrupt("return",null);case 6:return t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t["catch"](0),new Error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),u=function(t){var e,n=document.createElement("textarea");n.style.position="fixed",n.style.top=0,n.style.left=0,n.style.width="2em",n.style.height="2em",n.style.padding=0,n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=t,document.body.appendChild(n),n.focus(),n.select();try{e=document.execCommand("copy")}catch(r){e=!1}finally{document.body.removeChild(n)}return e},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";var n=1024,r=e<0?0:e,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(t)/Math.log(n));return parseFloat((t/Math.pow(n,o)).toFixed(r))+" "+a[o]}},f8c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"i",(function(){return h})),n.d(e,"h",(function(){return p})),n.d(e,"j",(function(){return m})),n.d(e,"e",(function(){return v})),n.d(e,"g",(function(){return w})),n.d(e,"f",(function(){return g}));n("4160"),n("baa5"),n("b0c0"),n("b64b"),n("d3b7"),n("159b");var r=n("53ca"),a=(n("96cf"),n("1da1")),o=n("51be");function i(t){this.name="NetworkError",this.message=t.message;var e=new Error(this.message);e.name=this.name,this.staack=e.stack,this.statusCode=t.statusCode}var c=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n,a,c,s,u,l,d,f,h,p,m,v=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=v.length>0&&void 0!==v[0]?v[0]:"GET",n=v.length>1&&void 0!==v[1]?v[1]:"",a=v.length>2&&void 0!==v[2]?v[2]:{},c=v.length>3&&void 0!==v[3]?v[3]:1e4,e=e.toUpperCase(),n=o["a"]+n,"GET"===e&&(s="",Object.keys(a).forEach((function(t){s+=t+"="+a[t]+"&"})),""!==s&&(s=s.substr(0,s.lastIndexOf("&")),n=n+"?"+s)),!window.fetch){t.next=30;break}return u=new AbortController,l=u.signal,d={method:e,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"default",signal:l},"POST"===e&&Object.defineProperty(d,"body",{value:JSON.stringify(a)}),setTimeout((function(){u.abort()}),c),t.prev=13,t.next=16,fetch(n,d);case 16:return f=t.sent,t.next=19,f.json();case 19:h=t.sent,t.next=27;break;case 22:if(t.prev=22,t.t0=t["catch"](13),"AbortError"!==t.t0.name){t.next=26;break}throw new i({message:"timeout",statusCode:500});case 26:throw new i({message:f?f.statusText:"timeout",statusCode:f.status||0});case 27:return t.abrupt("return",h);case 30:p=(window.XMLHttpRequest,new XMLHttpRequest),m="","POST"===e&&(m=JSON.stringify(a)),p.open(e,n,!0),p.setRequestHeader("Content-type","application/x-www-form-urlencoded"),p.send(m),p.onreadystatechange=function(){if(4===p.readyState){if(200===p.status){var t=p.response;return"object"!==Object(r["a"])(t)&&(t=JSON.parse(t)),t}throw new Error(p)}};case 37:case"end":return t.stop()}}),t,null,[[13,22]])}))),s=n("cf45"),u=function(t){return c("GET","/torrent/info",{torrentId:t})},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c("GET","/api/v1/anime/calendar"):c("GET","/api/v1/anime/calendar",{keywords:t})},d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object(s["d"])(n)?c("GET","/api/v1/anime/list",{offset:t,limit:e}):c("GET","/api/v1/anime/list",{offset:t,limit:e,keywords:n})},f=function(t){return c("GET","/api/v1/novel/getBook",{id:t})},h=function(t,e){return c("GET","/api/v1/novel/latest",{offset:t,limit:e})},p=function(t){return c("GET","/api/v1/novel/search/hot",{limit:t})},m=function(t,e,n){return c("GET","/api/v1/novel/search",{offset:t,limit:e,keywords:n})},v=function(t){return c("GET","/api/v1/novel/chapterList",{bid:t})},w=function(t){return c("GET","/api/v1/novel/getChapter",{chapterid:t})},g=function(t){return c("POST","/api/v1/novel/updateBookshelf",t)}}});