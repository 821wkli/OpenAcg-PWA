(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac519d72"],{"0d48":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("head-top",{attrs:{"show-operator":"true","go-back":"true","head-title":"404","header-position":"fixed",theme:"light"}}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main"},[a("div",{staticClass:"image-container"},[a("img",{attrs:{src:s("c203")}})]),a("div",{staticClass:"tips"},[a("span",[a("span",[t._v("4")])]),a("span",[t._v("0")]),a("span",[a("span",[t._v("4")])])])])}],n=s("9c6c"),o={components:{headTop:n["a"]}},c=o,r=(s("a924"),s("2877")),l=Object(r["a"])(c,a,i,!1,null,"e0a081de",null);e["default"]=l.exports},4151:function(t,e,s){},9134:function(t,e,s){},"9c6c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{class:{light:"light"===t.theme,dark:"dark"===t.theme,transparentBackground:t.isTransparent},style:{position:"fixed"===t.headerPosition?"fixed":"absolute"},attrs:{id:"head_top"}},[t._t("logo"),t._t("search"),t.goBack?s("section",{staticClass:"head_goback",on:{click:t.goback}},[s("svg",{class:{light:"light"===t.theme,dark:"dark"===t.theme},attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-arrow"}})])]):t._e(),t.headTitle?s("section",{staticClass:"title_head ellipsis"},[s("span",{staticClass:"title_text",class:{light:"light"===t.theme,dark:"dark"===t.theme}},[t._v(t._s(t.headTitle))])]):t._e(),t.showOperator?s("section",{staticClass:"operators"},[s("section",{staticClass:"search",on:{click:function(e){return t.$router.push("/search")}}},[s("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-search"}})])]),s("section",{staticClass:"menu",on:{click:t.toggleMenu}},[t.showGuide?s("svg",{staticClass:"close",attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-close"}})]):s("span",[s("i",{staticClass:"i-menu"})])])]):t._e(),t._t("fake-goback"),t._t("edit"),t._t("share")],2),s("section",{directives:[{name:"show",rawName:"v-show",value:t.showGuide,expression:"showGuide"}],staticClass:"guide"},[s("transition",{attrs:{name:"menu-slide"}},[s("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.showGuide,expression:"showGuide"}],ref:"guideContent",staticClass:"guide-content"},t.guideContent.handlers),[s("nav",{staticClass:"content-container"},[s("router-link",{staticClass:"item",attrs:{to:"/home"}},[s("p",{class:{active:0==t.selectedIndex},on:{click:function(e){t.selectedIndex=0}}},[t._v(t._s(t.$lang.homePage.novel))])]),s("span",{staticClass:"item",class:{active:1==t.selectedIndex},attrs:{to:""},on:{click:function(e){(t.selectedIndex=1)&&t.$router.push({name:"anime"})}}},[s("p",[t._v(t._s(t.$lang.homePage.anime))])]),s("span",{staticClass:"item disabled",class:{active:2==t.selectedIndex},attrs:{to:""}},[s("p",[t._v(t._s(t.$lang.homePage.comic))])]),s("span",{staticClass:"item disabled",class:{active:3==t.selectedIndex},attrs:{to:""}},[s("p",[t._v(t._s(t.$lang.homePage.music))])])],1),s("div",{staticClass:"content-footer"},[s("router-link",{staticClass:"btn-style",attrs:{to:"/bookshelf"}},[t._v(" "+t._s(t.$lang.headBar.myBookshelf)+" ")])],1)])]),s("div",{staticClass:"guide-cover",on:{click:t.toggleMenu}})],1)])},i=[],n=s("5530"),o=s("2f62"),c={data:function(){return{showGuide:!1,selectedIndex:0,guideContent:{handlers:{touchmove:this.onTap}}}},watch:{showGuide:function(t){this.SAVE_MENU_TOGGLED(t)}},created:function(){},mounted:function(){},props:["showOperator","headTitle","goBack","isTransparent","headerPosition","theme","gobackHandler"],computed:{},methods:Object(n["a"])({goback:function(){"function"===typeof this.gobackHandler?this.gobackHandler():this.$router.go(-1)},onTap:function(){if(this.$refs.guideContent){var t=this.$refs.guideContent.getBoundingClientRect().top;Math.ceil(Math.abs(t))>=this.$refs.guideContent.clientHeight/2&&(this.showGuide=!1)}}},Object(o["d"])(["SAVE_MENU_TOGGLED"]),{toggleMenu:function(){this.showGuide=!this.showGuide}})},r=c,l=(s("ee71"),s("2877")),h=Object(l["a"])(r,a,i,!1,null,"0bb234a0",null);e["a"]=h.exports},a924:function(t,e,s){"use strict";var a=s("9134"),i=s.n(a);i.a},c203:function(t,e,s){t.exports=s.p+"img/akarin.fdba7067.png"},ee71:function(t,e,s){"use strict";var a=s("4151"),i=s.n(a);i.a}}]);