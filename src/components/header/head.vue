<template>
  <div>
    <header id='head_top'
            :class="{light: theme === 'light',
            dark:theme ==='dark',
            transparentBackground:isTransparent
            }"
            :style="{
                     position:headerPosition==='fixed'?'fixed':'absolute'
  }">
      <slot name='logo'></slot>
      <slot name='search'></slot>
      <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
        <svg
          :class="{light: theme === 'light',
            dark:theme ==='dark'}"
          width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
        </svg>
      </section>
      <section class="title_head ellipsis"
               v-if="headTitle">
        <span class="title_text" :class="{light: theme === 'light',
            dark:theme ==='dark'
            }">{{headTitle}}</span>
      </section>
      <section v-if="showOperator" class="operators">
        <section class="search" @click="$router.push('/search')">
          <svg
            width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
          </svg>
        </section>
        <section class="menu" @click="toggleMenu">
      <span v-if="!showGuide">
        <i class="i-menu"></i>
      </span>
          <svg class="close" v-else width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
          </svg>
        </section>
      </section>
      <slot name="fake-goback"></slot>
      <slot name="edit"></slot>
      <slot name="msite-title"></slot>
      <slot name="changecity"></slot>
      <slot name="changeLogin"></slot>
    </header>
    <section class="guide" v-show="showGuide">
      <transition name="menu-slide">
        <div class="guide-content" ref="guideContent" v-show="showGuide" v-on="guideContent.handlers">
          <nav class="content-container">
            <router-link to='/home' class="item">
              <p :class="{active:selectedIndex==0}"
                 @click="selectedIndex==0"
              >{{$lang.homePage.novel}}</p>
            </router-link>
            <router-link class='item' to=""
                         :class="{active:selectedIndex==1}"
                         @click="selectedIndex==1">
              <p>{{$lang.homePage.anime}}</p>
            </router-link>
            <router-link class='item' to=""
                         :class="{active:selectedIndex==2}"
                         @click="selectedIndex==2">
              <p>{{$lang.homePage.comic}}</p>
            </router-link>
            <router-link class='item' to=""
                         :class="{active:selectedIndex==3}"
                         @click="selectedIndex==3">
              <p>{{$lang.homePage.music}}</p>
            </router-link>
          </nav>
          <div class="content-footer">
            <router-link to="/bookshelf" class="btn-style">
              {{$lang.headBar.myBookshelf}}
            </router-link>
          </div>
        </div>
      </transition>
      <div @click="toggleMenu" class="guide-cover"></div>
    </section>
  </div>

</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        showGuide: false,
        selectedIndex: 0,
        guideContent:{
          handlers:{
            touchmove: this.onTap
          }
        }
      }
    },
    watch:{


    },
    created() {


    },
    mounted() {
    },
    props: ['showOperator', 'headTitle', 'goBack', 'isTransparent', 'headerPosition', 'theme'],
    computed: {
      ...mapState([
        'userInfo'
      ]),
    },
    methods: {
      onTap(){
        if(this.$refs.guideContent){
          let posY = this.$refs.guideContent.getBoundingClientRect().top;
          if(Math.ceil(Math.abs(posY))>=this.$refs.guideContent.clientHeight/2){
            this.showGuide = false;
          }

        }

      },
      ...mapMutations(['GET_USERINFO', 'RECORD_MENU_STATE']),
      ...mapActions(['getUserInfo']),
      toggleMenu() {
        this.showGuide = !this.showGuide;
        this.RECORD_MENU_STATE(this.showGuide);


      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin.scss';

  .menu-slide-enter-active, .menu-slide-leave-active {
    transition: all .2s;
  }

  .menu-slide-enter, .menu-slide-leave-active {
    transform: translateY(-100%);
  }

  @font-face {
    font-family: lolicon;
    src: url(../../fonts/lolicon.eot);
    src: url(../../fonts/lolicon.eot#iefix) format('embedded-opentype'), url(../../fonts/lolicon.woff2) format('woff2'), url(../../fonts/lolicon.ttf) format('truetype'), url(../../fonts/lolicon.woff) format('woff'), url(../../fonts/lolicon.svg#lolicon) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: block
  }

  .btn-style {
    width: 80%;
    font-size: .875rem;
    line-height: 2.25rem;
    height: 2.25rem;
    display: inline-block;
    text-align: center;
    color: #fff;
    border-radius: 99px;
    background-color: #ed424b;
  }

  #head_top {

    z-index: 100;
    left: 0;
    top: 0;
    @include wh(100%, 1.95rem);
  }

  .transparent-background {
    background-color: transparent;
  }

  .light {
    color: $defaultColor;
    background-color: #ffffff;
  }

  .dark {
    color: #fff;
    background-color: rgba(50, 51, 52, .9);
  }

  .head_goback {
    left: 0.4rem;
    @include wh(0.6rem, 0.8rem);
    line-height: 2.2rem;
    margin-left: .4rem;

    .dark {
      fill: #ffffff;

    }

    .light {
      fill: #33373d;;
    }
  }


  .title_head {
    @include center;
    width: 75%;
    color: #fff;
    text-align: center;

    .title_text {
      font-size: .8rem;
      text-align: center;

    }
  }

  .operators {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    padding: .25rem .35rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.95rem;

    .search {
      @include wh(.8rem, .8rem);
      margin-right: 1.2rem;
    }

    .menu {
      @include wh(1.2rem, 1.2rem);
      margin-top: .2rem;

      span {
        height: 100%;
        cursor: pointer;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        flex-grow: 1;
        @include sc(1rem, $defaultColor);
        justify-content: center;
        align-items: center;
        position: relative;
        margin-right: .2rem;

        i {
          font-family: lolicon !important;
          speak: none;
          font-style: normal;
          font-weight: 400;
          font-variant: normal;
          text-transform: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          &::before {
            content: "\e970";

          }
        }
      }

    }


  }

  .guide {
    position: absolute;
    top: 1.95rem;
    z-index: 100;
    @include wh(100%, 100vh);

    .guide-content {
      background-color: #fff;
      padding-bottom: 1rem;

      .content-container {

        display: flex;
        justify-content: space-between;
        align-items: center;

        .item {
          width: 21%;

          padding: .4rem;

          p {
            color: #aaaaaa;
            line-height: 1.8rem;
            height: 1.8rem;
            text-align: center;
          }

          .active {
            border-bottom: 5px solid #2e7cf1;;
            border-radius: 2px;
            color: $defaultColor;
          }
        }
      }

      .content-footer {
        margin-top: 1rem;
        text-align: center;
      }
    }

    .guide-cover {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);

    }
  }


</style>
