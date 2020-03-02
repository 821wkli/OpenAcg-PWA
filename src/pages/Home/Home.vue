<template>
  <div class="container">
    <head-top v-if="!search.showSearchBar"
              :head-title="$lang.homePage.novel"
              header-position="fixed"
              show-operator="true"
              theme="light">
    </head-top>
    <search-bar v-else class="search-bar" v-model="search.keyword"
                :placeholder="search.keyword"
                cancel-text="取消"
                @cancel="onCancel"
                @search="onSearch"
                @clear="onClear"
                @doFocus="onFocus"
    ></search-bar>
    <section v-if="showLoading" class="loading-container">
      <ul class="loading-ul">
        <list-skeleton :key="i" v-for="i in (1,10)"></list-skeleton>
      </ul>
    </section>
    <section class="list-tips-container">
      <dot-loader v-if="showDotLoader"></dot-loader>

      <section class="book-list-container wrapper" ref="wrapper">
        <ul class="book-list-ul">
          <li @click="gotoBookDetail(item)"
              class="book-list-li"
              v-for="(item,index) in books" :key="index"
          >
            <div class="book-cover" style="width: 4rem;height: 6rem;">
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
          <li style="width: 100%; height:2.5rem;margin-top: -0.5rem;" v-if="showDotLoader">
            <dot-loader
              :dot-position="'flex-'+'start'"></dot-loader>
          </li>
        </ul>
        <transition name="fade">
          <refresh @refresh='refreshBookList'
                   v-show="!isScrolling&&!this.isMenuToggled"
                   :is-refresh="isRefreshing"></refresh>
        </transition>
      </section>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/headTop'
import refresh from '../../components/common/refresh'
import { latestBook, hotBook, searchBook } from '../../apis'
import { mapGetters, mapActions } from 'vuex'
import BScroll from 'better-scroll'
import DotLoader from '../../components/loader/dotLoader' // todo
import ListSkeleton from '../../components/loader/listSkeleton'
import { isEmpty } from '../../utils/common'
import SearchBar from '../../components/search/searchBar'
import { imageBaseUrl } from '../../config/env'

export default {
  data () {
    return {
      books: [],
      search: {
        keyword: undefined,
        showSearchBar: false
      },
      alertMessage: null,
      isScrollToBotton: false,
      isRefreshing: false,
      showLoading: true,
      showDotLoader: true,
      isScrolling: false,
      preventDuplicatedRequest: false,
      offset: 0

    }
  },
  created () {
    this.search.keyword = this.$route.query.keyword
    if (this.search.keyword) {
      this.search.showSearchBar = true
    }
  },
  mounted () {
    this.initData()
    var self = this
    this.$nextTick(() => {
      if (!this.scroll) {
        const options = {
          scrollY: true,
          scrollX: false,
          mouseWheel: true,
          click: true,
          taps: true,
          pullUpLoad: true,
          pullUpload: {
            thresold: 40
          },
          pullDownRefresh: {
            threshold: 40,
            stop: 20
          }
        }
        this.scroll = new BScroll(this.$refs.wrapper, options)
        // if (this.homePagePosY < 0) {
        //   setTimeout(()=>{
        //     self.scroll.refresh();
        //     self.scroll.scrollTo(0, Math.round(self.homePagePosY));
        //   },1000)
        // }
      }

      // hide refresh button when scrolling
      this.scroll.on('scroll', () => {
        self.isScrolling = true
      })

      // show refresh button once the finger was released
      this.scroll.on('scrollEnd', (pos) => {
        self.isScrolling = false
        this.saveHomeScrollingPosY(pos.y)

        // console.log('end posY ' + pos.y)
      })

      // load more data reach bottom
      this.scroll.on('pullingUp', () => {
        // console.log('bottom arrtive')
        self.isScrollToBotton = true
        self.loadMore().then(() => {
          self.scroll.finishPullUp()
        })
      })

      // reload data
      this.scroll.on('pullingDown', () => {
        // console.log('top arrievd')
        self.refreshBookList()
      })
    })
  },

  components: {
    SearchBar,
    ListSkeleton,
    DotLoader,
    headTop,
    refresh
  },
  computed: {

    ...mapGetters(['isMenuToggled', 'homePagePosY', 'latestBookList'])

  },
  watch: {
    books: function (newBooks) {
      this.saveLatestBookList(newBooks) // save fetched book list in vuex
    },
    isRefreshing: function (newValue) {
      // notify scroll
      if (!newValue) {
        if (this.scroll) {
          this.scroll.finishPullDown()
        }
      }
    },
    showLoading: function (newValue) {
      var self = this
      this.$nextTick(() => {
        if (!newValue && self.scroll && self.homePagePosY < 0) {
          window.scrollTo(0, 1)
          self.scroll.refresh()
          self.scroll.scrollTo(0, self.homePagePosY, 100)
        }
      })
    }
  },
  methods: {
    ...mapActions(['removeLatestBookList', 'saveBook', 'saveHotList', 'saveHomeScrollingPosY',
      'saveLatestBookList']),
    refreshBookList () {
      this.isRefreshing = true

      this.books = null
      this.removeLatestBookList()
      var self = this
      this.initData().then(() => {
        self.isRefreshing = false
        window.scrollTo(0, 10)
        // console.log('refresh done')
      })
      // setTimeout(() => {
      //   self.isRefreshing = false;
      //   self.showLoading = false;
      //   console.log('refresh done')
      // }, 3000)
    },
    async initData () {
      this.showLoading = true
      hotBook(6).then(res => {
        if (!isEmpty(res.response)) {
          this.saveHotList(res.response)
        }
      })
      let res = null
      // avoid fetching again book list when back from other routes
      if (isEmpty(this.latestBookList)) {
        if (this.search.keyword) {
          res = await searchBook(0, 20, this.search.keyword)
        } else {
          res = await latestBook(0, 20)
        }
        res = Object.assign([], res.response)
      } else {
        res = [...this.latestBookList] // get books from vuex and concat for later use
      }

      res.forEach(book => {
        let newUrl = book.cover_url.split('/').pop()// get image file name
        newUrl = imageBaseUrl + '/image/' + newUrl
        book.cover_url = newUrl
      })
      this.books = res
      this.showDotLoader = this.books.length >= 20
      this.showLoading = false
    },
    async loadMore () {
      // avoid async send duplicated data
      if (this.preventDuplicatedRequest) {
        return
      }
      this.preventDuplicatedRequest = true
      this.offset += 20
      let res = null
      if (this.search.keyword) {
        res = await searchBook(this.offset, 20, this.search.keyword)
      } else {
        res = await latestBook(this.offset, 20)
      }

      if (res.response && res.response.length > 0) {
        res.response.forEach(book => {
          book.cover_url = imageBaseUrl + '/image/' + book.cover_url.split('/').pop()
        })
        this.books = this.books.concat(res.response)
      } else if (res.response.length === 0) {
        // todo
        // render notification box here
        this.alertMessage = 'No more data '
        // console.log(this.alertMessage)
      } else {
        this.alertMessage = 'unknown error'
      }
      this.showDotLoader = res.response.length >= 20
      this.preventDuplicatedRequest = false
    },
    gotoBookDetail (book) {
      this.saveBook(book)




      this.$router.push('/book/' + book.id)
    },
    onCancel: function () {
      this.$route.query.keyword = ''
      this.search.keyword = ''
      this.search.showSearchBar = false
      this.removeLatestBookList()
      this.initData()// fetch home data
    },
    onSearch: function () {
      this.initData()
    },
    onClear: function () {
      this.search.keyword = ''
    },
    onFocus: function () {
      this.onClear()
    }

  }
}

</script>

<style lang="scss" scoped>

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
      top: .75rem

    }

    .book-list-container {
      height: 100%;
      width: 100%;
      padding-left: .65rem;
      padding-right: .8rem;
      background-color: #fff;
      overflow: hidden;

      ul {
        position: absolute;
        top: 0;
        background-color: #fff;
      }

      .book-list-li {
        margin-bottom: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #fff;

        .book-cover {
          margin-right: .5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .3);

          img {
            @include wh(4rem, 6rem)
            text-align: center;
            font-size: .8rem;
            white-space: pre-wrap;
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

            .status {
              width: 25%;
              text-align: center;
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
