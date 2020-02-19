<template>

  <div class="container">
    <head-top
              :head-title="$lang.homePage.novel"
              header-position="fixed"
              show-operator="true"
              theme="light"
    >
    </head-top>
    <section v-if="showLoading" class="loading-container">
      <ul class="loading-ul">
        <list-skeleton v-for="i in (1,10)"></list-skeleton>
      </ul>
    </section>
    <section class="list-tips-container">
      <dot-loader></dot-loader>

      <section class="book-list-container wrapper" ref="wrapper">
        <ul class="book-list-ul">
          <li @click="gotoBookDetail(item)"
              class="book-list-li"
              v-for="(item,index) in books" :key="item.id"
          >
            <div class="book-cover"style="width: 4rem;height: 6rem;">
            <img :src="item.cover_url" class="book-cover" :alt="item.title"/>
            </div>
            <div class="book-description">
              <header class="book-header">
                <h4>{{item.title}}</h4>
                <span class="status"
                      :class="{completed:item.book_status==='已完成'}">{{item.book_status}}</span>
              </header>
              <p>
              <span class="author-name">
                  <svg class='icon' width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-author"></use>
      </svg>
                {{item.author}}</span>
                <span class="publisher-name">
                {{item.publisher?'|'+item.publisher:''}}
              </span>
              </p>
              <p>
                <span>最近更新: {{item.last_updated_date ||'unknown'}}</span>
              </p>
              <p>{{item.introduction}}</p>
            </div>
          </li>
          <li style="width: 100%; height:2.5rem;margin-top: -0.5rem;">
            <dot-loader
              :dot-position="'flex-'+'start'"></dot-loader>
          </li>
        </ul>
        <transition name="fade">
          <refresh @refresh='refreshBookList'
                   v-show="!isScrolling&&!this.menuState"
                   :is-refresh="isRefreshing"></refresh>
        </transition>
      </section>
    </section>



  </div>
</template>

<script>

  import headTop from 'src/components/header/head'
  import refresh from "../../components/common/refresh";
  import {cityGuess, hotcity, groupcity, latestBook, hotBook} from 'src/service/apis'
  import {mapState, mapMutations} from 'vuex'
  import BScroll from 'better-scroll'
  import DotLoader from "../../components/common/dotLoader";
  import ListSkeleton from "../../components/loading/listSkeleton";
  import jumpLoader from "../../components/loading/jumpLoader";
  import {isEmpty} from "../../config/utils";

  export default {
    data() {
      return {
        books: [],
        alertMessage: null,
        isScrollToBotton: false,
        isRefreshing: false,
        showLoading: true,
        isScrolling: false,
        preventDuplicatedRequest: false,
        offset: 0
      }
    },

    mounted() {
      this.initData();
      var self = this;
      this.$nextTick(() => {
        if (!this.scroll) {
          const options = {
            scrollY: true,
            scrollX: false,
            mouseWheel: true,
            click: true,
            taps: true,
            pullUpLoad: true,
            pullUpload:{
              thresold:40
            },
            pullDownRefresh: true,
            pullDownRefresh: {
              threshold: 40,
              stop: 20
            }
          };
          this.scroll = new BScroll(this.$refs.wrapper, options);
        }
        //hide refresh button when scrolling
        this.scroll.on('scroll', () => {
          self.isScrolling = true;
        })

        //show refresh button once the finger was released
        this.scroll.on('touchEnd', () => {
          self.isScrolling = false;
        })

        //load more data reach bottom
        this.scroll.on('pullingUp', () => {
          console.log('bottom arrtive');
          self.isScrollToBotton = true;
          self.loadMore().then(()=>{
            self.scroll.finishPullUp();
          })

        })

        //reload data
        this.scroll.on('pullingDown', () => {
          console.log('top arrievd');
          self.refreshBookList();
        })


      });

      // setTimeout(() => {
      //   self.showLoading = false;
      // }, 1000);

    },

    components: {
      ListSkeleton,
      DotLoader,
      headTop, refresh,jumpLoader
    }
    ,
    computed: {
      ...
        mapState(['menuState'])
    },
    watch: {
      isRefreshing: function (newValue) {
        //notify scroll
        if (!newValue) {
          if (this.scroll) {
            this.scroll.finishPullDown();
          }
        }
      },

    },
    methods: {
      ...
        mapMutations(['RECORD_BOOK','SAVE_HOTLIST']),
      refreshBookList() {
        this.isRefreshing = true;


        var self = this
        this.initData().then(()=>{
          self.isRefreshing = false;
          console.log('refresh done')
        })
        // setTimeout(() => {
        //   self.isRefreshing = false;
        //   self.showLoading = false;
        //   console.log('refresh done')
        // }, 3000)

      },
      async initData() {
        this.showLoading = true;
        hotBook(7).then(res=>{
         if(!isEmpty(res.response)){
           this.SAVE_HOTLIST(res.response);
         }
        });
        //https://openacg.blob.core.windows.net/image/1s.jpg
        let res = await latestBook(0, 20);
        res = Object.assign([], res.response);
        res.forEach(book => {
          let newUrl = book.cover_url.split('/').pop();// get image file name
          newUrl = 'http://openacg.blob.core.windows.net/image/' + newUrl;
          book.cover_url = newUrl;

        })
        this.books = res;
        this.showLoading = false;
      }
      ,
      async loadMore() {
        //avoid async send duplicated data
        if (this.preventDuplicatedRequest) {
          return;
        }
        this.preventDuplicatedRequest = true;
        this.offset += 20;
        let res = await latestBook(this.offset, 20);
        if (res.response && res.response.length > 0) {
          res.response.forEach(book=>{
            book.cover_url = 'http://openacg.blob.core.windows.net/image/' + book.cover_url.split('/').pop();
          })
          this.books = this.books.concat(res.response);
        } else if (res.response.length == 0) {
          //todo
          //render notification box here
          this.alertMessage = 'No more data '
          console.log(this.alertMessage);
        } else {
          this.alertMessage = 'unknown error';
        }
        this.preventDuplicatedRequest = false;
        return;
      },
      gotoBookDetail(book) {
        this.RECORD_BOOK(book);
        this.$router.push('/book/' + book.id);
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';

  .fade-enter-active, .fade-leave-active {
    transition: all .2s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .container {
    padding-top: 1.95rem;
    position: absolute;
    top: 0;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;

    .loading-container {
      height: 100%;

      .loading-ul {
        background-color: #ffffff;
      }
    }

    .list-tips-container {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;

    }

    .book-list-container {
      height: 95%;
      padding-left: .65rem;
      padding-top: 1rem;
      padding-right: .8rem;
      background-color: #fff;
      overflow: hidden;

      ul {
        background-color: #fff;
      }


      .book-list-li {
        margin-bottom: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #fff;

        .book-cover{
          margin-right: .5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
          img {
            @include wh(4rem, 6rem)
            text-align: center;
            font-size:.8rem;
            white-space:pre-wrap;
          }
        }


        .book-description {
          max-width: 70%;
          .book-header {
            display: flex;
            justify-content: space-between;
            font-size: .675rem;
            margin-bottom: 0.01rem;

            h4 {
              font-size: .8rem;
              max-width: 75%;

            }

            .completed {
              color: red;
            }
          }

          p {
            display: flex;
            margin-top: .5rem;

            span {
              line-height: .5rem;
              display: inline-flex;
              justify-content: space-between;
              align-items: flex-end;
              @include sc(.55rem, $defaultColor);

            }

            .author-name {
              svg {

                @include wh(.5rem, .5rem);
                margin-right: .15rem;
                fill: #aaaaaa;
              }
            }

            .publisher-name {

            }

          }

          p:nth-of-type(3) {
            font-size: .55rem;
            height: 2.3rem;
            max-height: 2.3rem;
            overflow: hidden;
            margin: .375rem 0;
            color: #969ba3;
            text-overflow: ellipsis;

            .completed {
              color: red;
            }
          }

        }
      }

    }
  }


</style>
