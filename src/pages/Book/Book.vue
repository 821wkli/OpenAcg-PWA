<template>
  <div class="container">
    <section class="book-main" v-if="!showLoading">
      <section class="book-main">
        <head-top :head-title="book.title"
                  :go-back="true"
                  :goback-handler="onGoback.bind(null)"
                  :show-operator="false"
                  :is-transparent="true"

        >
          <section slot="share" class="icon share" @click="showShareBox=!showShareBox">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-share"/>
              </svg>

          </section>
        </head-top>
        <section class="book-detail-wrapper">
          <img :src="book.cover_url" class="book-cover-blur"
               :alt="book.title" aria-hidden="true">
          <section class="book-detail-info">
            <div class="book-detail-layout">
              <img :src="book.cover_url" class="book-cover book-layout-left"
                   :alt="book.title" aria-labelledby="ariaBook ariaTime">
              <div class="book-layout-right">
                <header class="book-header">
                  <h6>{{book.title}}</h6>
                </header>
                <p class="book-meta">
              <span class="author-name">
<!--                  <svg class='icon' width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">-->
                <!--        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-author"></use>-->
                <!--      </svg>-->
                 {{book.author}}</span>
                  <span class="publisher-name">
                {{book.publisher?'|'+book.publisher:''}}
              </span>
                </p>
                <p class="book-meta">
                  <span>{{this.total_words + '萬字' + '|'}}</span>
                  <span
                    :class="{completed:book.book_status==='已完成'}"
                  >{{book.book_status}}</span>
                </p>
                <p class="book-meta">
                  <span>{{'最近更新:'+ (book.last_updated_date?book.last_updated_date:'未有更新')}}</span>
                </p>
              </div>
            </div>
            <div class="book-detail-btn">
              <div class="btn-group">
                <div @click="goToChapter" class="btn">
                  {{continueChapterId? "繼續閱讀":'開始閱讀'}}
                </div>
                <div class="btn" :class="{inBookshelfColor:bookshelfStatus.isInBookshelf}" @click="addToBookShelf">
                  {{bookshelfStatus.message}}
                </div>
                <div @click="kindle.showKindle=true" class="btn">同步Kindle</div>
              </div>
            </div>
          </section>
        </section>
        <section :class="{showMore:isShowMore}"
                 class="book-intro-wrapper"
                 @click="isShowMore=!isShowMore"
        >
          <section class="book-summary enabled">
            <div class="content" :class="{showMore:isShowMore}">
              {{book.introduction.trim()!=='' ? book.introduction: $lang.bookPage.copyRightMessage}}
            </div>
            <span
              :class="{showMore:isShowMore}"
              class="book-summary-more">
            <svg class="icon icon-arrow-r"

                 width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-r"></use>
        </svg>
        </span>
          </section>
        </section>
        <section class="latest-chapter-wrapper"
                 @click="$router.push({ name: 'reader', params: { bookid: bookid }, query: { chapterid: lastChapter.id } })">
          <span
            v-if="lastChapter.volume_name!=undefined">{{lastChapter.volume_name+' '+lastChapter.chapter_name}}</span>
          <span v-else>Loading...</span>
          <span>
         <svg class="icon icon-arrow-r" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-r"></use>
        </svg>
      </span>
        </section>
        <section class="book-volume-list-wrapper">
          <header>
            <h4>全卷</h4>
            <div>
              <span :class='{active:order ===1}' @click='reorderVolumes(1)' class="order">順序</span>
              <span :class='{active:order===-1}' @click='reorderVolumes(-1)' class="order">倒序</span>
            </div>
          </header>
        </section>
        <div class="wrapper" ref="wrapper">
          <ul class="book-volume-list-ul">
            <li v-for="volume in book.volumes"
                class='book-volume-list-li'
                :key="volume.id"
                @click="getChaptersOfVolume(volume)"
            >
          <span class="icon-book-container">
            <svg class="icon icon-book" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-book"></use>
        </svg>
          </span>
              <span>{{volume.name}}</span>
            </li>
            <li class="book-volume-list-li"></li>
          </ul>
        </div>
      </section>
      <chapter-list @goback="hidePanel" v-if="volumePanel.showChapterPanel"></chapter-list>
      <kindle @goback="kindle.showKindle = false" v-if="kindle.showKindle"></kindle>
    </section>
    <section v-else class="loader">
      <jump-loader where="top" class="icon"></jump-loader>
    </section>
    <section @click.stop="showShareBox=false" class="share-box-mask" v-show="showShareBox">
      <share-box @onClose="showShareBox = false" :book="this.book"></share-box>
    </section>
  </div>

</template>

<script>
import headTop from '../../components/header/headTop'
import { mapGetters, mapActions } from 'vuex'
import { fetchBook } from '../../apis'
import ChapterList from '../../components/book/chapterList'
import BScroll from 'better-scroll'
import { isEmpty } from '../../utils/common'
import jumpLoader from '../../components/loader/jumpLoader'
import { imageBaseUrl } from '../../config/env'
import ShareBox from '../../components/book/shareBox'
import Kindle from '../../components/book/kindle'

export default {
  name: 'Book',
  created () {
    this.bookid = parseInt(this.$route.params.bookid)
    // this.GET_BOOKSHELF_LIST()
  },
  mounted () {
    this.initData()
    // avoid create scroll before data load.
    if (this.book && this.book.volumes) {
      this.createScroll()
    }
  },
  data () {
    return {
      from: null,
      bookid: null,
      isShowMore: false,
      order: 1,
      showShareBox: false,
      bookshelfStatus: {
        isInBookshelf: false,
        message: '加入書櫃'
      },

      volumePanel: {
        showChapterPanel: false,
        chapterList: [],
        currentVolumeChapters: {}
      },
      kindle: {
        showKindle: true
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.from = from
    })
  },
  beforeDestroy () {
    this.saveBook(null)
  },
  components: { Kindle, ShareBox, ChapterList, headTop, jumpLoader },
  methods: {
    createScroll: function () {
      this.$nextTick(() => {
        if (!this.scroll) {
          const options = {
            scrollY: true,
            scrollX: false,
            mouseWheel: true,
            click: true,
            taps: true
          }
          this.scroll = new BScroll(this.$refs.wrapper, options)
        }
      })
    },
    goToChapter () {
      const chapterid = this.continueChapterId ? this.continueChapterId : this.firstChapter.id
      this.$router.push({ name: 'reader', params: { bookid: this.bookid }, query: { chapterid: chapterid } })
    },
    ...mapActions(['saveBook', 'loadBookshelfList', 'initChapterList', 'saveBookToBookshelf', 'saveCurrentVolumeChapters']),
    hidePanel () {
      this.volumePanel.showChapterPanel = !this.volumePanel.showChapterPanel
    },
    getChaptersOfVolume (volume) {
      if (!isEmpty(this.volumePanel.chapterList)) {
        const currentVolumeChapters = this.volumePanel.chapterList.filter(v => v.id === volume.id)[0]
        this.saveCurrentVolumeChapters(currentVolumeChapters)
        this.volumePanel.showChapterPanel = true
      }
    },
    async initData () {
      if (isEmpty(this.book)) {
        let book = await fetchBook(this.bookid)
        if (isEmpty(book.response) || book.response.message) {
          await this.$router.replace('/404')
          return
        }
        book = { ...book.response }
        book.cover_url = `${imageBaseUrl}/image/` + book.cover_url.split('/').pop()
        this.saveBook(book)
      }
      this.initChapterList(this.book)

      if (isEmpty(this.bookshelfList)) {
        await this.loadBookshelfList()
      }
      const isInBookshelf = this.bookshelfList.some(item => item.id === this.bookid)

      if (isInBookshelf) {
        this.bookshelfStatus = {
          isInBookshelf: true,
          message: '已加入書櫃'
        }
      } else {
        this.bookshelfStatus = {
          isInBookshelf: false,
          message: '加入書櫃'
        }
      }
      // const res = await fetchChapterList(this.book.id)
      // if (res.response) {
      //   // console.log(this.volumePanel)
      //   this.volumePanel.chapterList = [...this.volumePanel.chapterList, ...res.response]
      //   const chapters = this.volumePanel.chapterList.reduce((preVolume, currentVolume) => {
      //     return preVolume.concat(currentVolume.chapters)
      //   }, [])
      //   this.SAVE_CHAPTER_LIST(chapters)
      // }
    },
    reorderVolumes (index) {
      if (index !== this.order) {
        this.order = index
        const book = Object.assign({}, this.book)
        book.volumes = book.volumes.reverse()
        this.saveBook(book)
      }
      // this.scroll.scrollTo(0, 0, 500)
    },
    addToBookShelf () {
      // this.RECORD_BOOKSHELF_LIST(this.book)
      this.saveBookToBookshelf(this.book)
    },
    onGoback: function () {
      if (!isEmpty(this.from.query) && 'chapterid' in this.from.query === false) {
        this.$router.push({ name: 'home', query: this.from.query })
      } else if (this.from.path.indexOf('bookshelf') !== -1) {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: 'home' })
      }
    }
  },
  watch: {
    chapterList: function (newChapterList) {
      this.volumePanel.chapterList = newChapterList
    },
    bookshelfList: function (newBookshelfList) {
      // console.log('trigger')
      this.$nextTick(() => {
        const isInBookshelf = newBookshelfList.some(item => item.id === this.bookid)
        this.bookshelfStatus.isInBookshelf = isInBookshelf
        if (isInBookshelf) {
          this.bookshelfStatus.message = '已加入書櫃'
        } else {
          this.bookshelfStatus.message = '加入書櫃'
        }
      })
    },
    book: function (newValue) {
      if (!isEmpty(newValue)) {
        this.createScroll()
      }
    }
  },
  computed: {
    bookshelfList () {
      return this.$store.getters.bookshelfList || []
    },
    ...mapGetters(['book', 'recentReadingChapterList', 'chapterList', 'system']),
    // bookshelfStatus: function () {
    //   const isInBookshelf = this.bookshelfList.some(item => item.id === this.bookid)
    //   if (isInBookshelf) {
    //     return {
    //       isInBookshelf: true,
    //       message: '已加入書櫃'
    //     }
    //   } else {
    //     return {
    //       isInBookshelf: false,
    //       message: '加入書櫃'
    //     }
    //   }
    // },
    continueChapterId:

        function () {
          const readerHistory = this.recentReadingChapterList.find(book => book.bookid === this.bookid)
          if (!isEmpty(readerHistory)) {
            return readerHistory.chapterid
          }
          return null
        },

    firstChapter: function () {
      return this.volumePanel.chapterList[0].chapters[0]
    },
    lastChapter: function () {
      if (!isEmpty(this.volumePanel.chapterList)) {
        const lastVolumes = this.volumePanel.chapterList[this.volumePanel.chapterList.length - 1]
        return { ...{ volume_name: lastVolumes.name }, ...lastVolumes.chapters[lastVolumes.chapters.length - 1] }
      }

      return 'Loading ...'
    },
    showLoading: function () {
      if (isEmpty(this.book)) {
        return true
      }
      return false
    },
    total_words: function () {
      if (!this.book.word_count) {
        return this.$lang.bookPage.unknownNumber
      }
      if (this.book.word_count < 10000) {
        return this.book.word_count
      }
      return Number.parseFloat(this.book.word_count / 10000).toFixed(1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 1.95rem;
    position: absolute;
    top: 0;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    .share{
      position: absolute;
      top: 43%;
      transform: translateY(-50%);
      @include wh(0.6rem, 0.8rem);
      right: .4rem;
      svg{
        @include wh(100%,100%);
      }
    }
    .loader {
      top: 0;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: #fff;
    }

    .book-main {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .book-detail-wrapper {
      margin-top: -2.3rem;
      background-color: #bebade;

      .book-cover-blur {
        position: absolute;
        top: calc(50% - 87.5vw);
        width: 100%;
        height: 46%;
        opacity: calc(.1 + .05);
        filter: blur(calc(17px + 1px));
        -webkit-filter: blur(calc(17px + 1px));
      }

      .book-detail-info {
        padding-top: 1.95rem;
        position: relative;
        background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0) 8rem) no-repeat center bottom;

        .book-detail-layout {
          padding: .4rem;
          display: flex;

          .book-cover {
            border-radius: .5rem;
            @include wh(4rem, 5rem)
            margin-right: .5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
            font-size: 0;
          }

          .book-layout-right {
            .book-header {
              h6 {
                /*overflow: hidden;*/
                /*white-space: nowrap;*/
                /*text-overflow: ellipsis;*/
                /*font-size: .8rem;*/
              }
            }

            .book-meta {
              display: flex;
              align-items: center;
              margin-top: .65rem;

              span {
                @include sc(.55rem, $defaultColor);
                line-height: .5rem;
              }

              .completed {
                color: red;
              }

              .author-name {
                display: inline-flex;
                justify-content: space-between;
                align-items: flex-end;

              }

              .icon {
                @include wh(.5rem, .5rem);
                margin-right: .15rem;
                fill: #aaaaaa;
              }
            }

          }
        }

        .book-detail-btn {
          padding: .4rem;

          .btn-group {
            display: flex;

            .btn {
              background: #fff;
              margin-right: .4rem;
              width: 30%;
              height: 1.2rem;
              line-height: 1.2rem;
              font-size: .5rem;
              text-align: center;
            }

            .inBookshelfColor {
              color: #999999;
            }

            div:nth-of-type(1) {
              background: red;
              font-weight: 400;
              color: #fff;
              opacity: .7;
            }
          }
        }
      }

    }

    .book-intro-wrapper {
      position: relative;
      padding-left: .4rem;
      padding-right: .4rem;
      background: #fff;
      margin-top: .8rem;
      /*height: 4.9rem;*/
      max-height: none;
      @include sc(.65rem, $defaultColor)
      /*overflow: hidden;*/
      text-align: justify;
      box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
      .content{
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-line;
        &.showMore{
          -webkit-line-clamp: unset;
        }
      }
      .book-summary-more {
        position: absolute;
        right: .4rem;
        bottom: 0;
        @include wh(1.8rem, 1.3rem);
        background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 1rem);
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .icon-arrow-r {
          fill: #969ba3;
          transition: transform .2s;
          transform: rotate(90deg);
          @include wh(50%, 50%);
        }

      }

      .book-summary-more {
        &.showMore {
          @include wh(1rem, 1rem);

          .icon-arrow-r {
            @include wh(75%, 75%);
            transform: rotate(270deg);
          }
        }
      }
    }

    .showMore {
      height: auto;
    }

    .latest-chapter-wrapper {
      background: #fff;
      margin-top: .8rem;
      padding-left: .4rem;
      padding-right: .4rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #e0e0e0;
      border-top: 2px solid #e0e0e0;
      align-items: center;
      min-height: 1.8rem;

      span {
        @include sc(.65rem, blue)
        line-height: 1.8rem;
        height: 1.8rem;
        overflow: hidden;

      }

      span:nth-of-type(2) {
        @include wh(1rem, 1rem);
        display: flex;
        align-items: center;
        justify-content: center;

        .icon-arrow-r {
          @include wh(50%, 50%);
        }
      }

    }

    .book-volume-list-wrapper {
      padding-left: .4rem;
      padding-right: .4rem;
      margin-top: .4rem;

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
          font-size: .8rem;
        }

        span {
          @include sc(.6rem, $defaultColor)
        }
        span:nth-of-type(1){
          margin-right:.25rem;
        }

        .active {
          color: blue;
        }
      }
    }

    .wrapper {
      padding-left: .4rem;
      padding-right: .4rem;
      margin-top: .4rem;
      /*height: 44vh;*/
      min-height: 40%;
      overflow: hidden;
      background: #fff;

      .book-volume-list-ul {
        background: #fff;
        margin-top: .35rem;

        .book-volume-list-li {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &:last-of-type {
            height: 1.5rem;
          }

          span {
            @include sc(.6rem, $defaultColor)
          }

          .icon-book-container {
            @include wh(1.5rem, 1.5rem);
            display: inline-flex;
            margin-right: .15rem;

            .icon-book {
              @include wh(100%, 100%);
              fill: #2e7cf1;
            }

          }
        }
      }
    }

    .share-box-mask{
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0,0,0,0.25)
    }

  }
</style>
