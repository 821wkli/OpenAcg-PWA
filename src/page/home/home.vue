<template>
  <div class="container">
    <head-top go-back="true" head-title="Hello world">
    </head-top>
    <section class="book-list-container wrapper" ref="wrapper">
      <ul class="book-list-ul">
        <li @click="gotoBookDetail(item)"
            class="book-list-li"
            v-for="(item,index) in books"
        >
          <img :src="item.cover_url" class="book-cover" :alt="item.title"/>
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
            <p>{{item.introduction}}</p>
          </div>
        </li>
      </ul>
      <transition name="fade">
        <refresh @refresh='refreshBookList'
                 v-show="!isScrolling&&!this.menuState"
                 :is-refresh="isRefreshing"></refresh>
      </transition>
    </section>

  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import refresh from "../../components/common/refresh";
  import {cityGuess, hotcity, groupcity, latestBook} from 'src/service/apis'
  import {mapState, mapMutations} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        books: [],
        isRefreshing: false,
        showLoading: false,
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
            pullDownRefresh: true,
            pullDownRefresh: {
              threshold: 30,
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
          //self.loadMore();
          self.scroll.finishPullUp();
        })

        //reload data
        this.scroll.on('pullingDown', () => {
          console.log('top arrievd');
          self.refreshBookList();
        })


      });
    },

    components: {
      headTop, refresh
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
      }
    },
    methods: {
      ...
        mapMutations(['RECORD_BOOK']),
      refreshBookList() {
        this.isRefreshing = true;
        this.showLoading = true;
        this.initData();
        var self = this;
        setTimeout(() => {
          self.isRefreshing = false;
          self.showLoading = false;
          console.log('refresh done')
        }, 3000)

      },
      async initData() {
        //https://openacg.blob.core.windows.net/image/1s.jpg
        let res = await latestBook(0, 20);
        res = Object.assign([], res.response);
        res.forEach(book => {
          let newUrl = book.cover_url.split('/').pop();// get image file name
          newUrl = 'http://openacg.blob.core.windows.net/image/' + newUrl;
          book.cover_url = newUrl;

        })
        this.books = res;
      }
      ,
      async loadMore() {
        //avoid async send duplicated data
        if (this.preventDuplicatedRequest) {
          return;
        }
        this.showLoading = true;  //show botton loading cover
        this.preventDuplicatedRequest = true;
        this.offset += 20;
        let res = await latestBook(this.offset, 20);
        if (res.response && res.response.length > 0) {
          this.books = this.boos.concat(res.response);
        }

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

    .book-list-container {
      height: 100%;
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
        align-items: center;
        background-color: #fff;

        img {
          @include wh(4rem, 5rem)
          margin-right: .5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        }

        .book-description {

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

          p:nth-of-type(1) {
            display: flex;
            margin-top: .5rem;
            span {
              line-height: .5rem;
              display: inline-flex;
              justify-content:space-between;
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
            .publisher-name{

            }

          }

          p:nth-of-type(2) {
            font-size: .5rem;
            height: 3rem;
            max-height: 3rem;
            overflow: hidden;

            .completed {
              color: red;
            }

            margin: .375rem 0;
            color: #969ba3;
            text-overflow: ellipsis;
          }

        }
      }

    }
  }


</style>
