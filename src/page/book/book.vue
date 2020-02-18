<template>
  <div class="container">
    <section v-if="!showLoading">
      <section class="book-main" v-if="!volumePanel.showChapterPanel">
        <head-top :head-title="book.title"
                  :go-back="true"
                  :show-operator="false"
                  :is-transparent="true"
        ></head-top>
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
                <div class="btn">開始閱讀</div>
                <div class="btn" :class="{inBookshelfColor:bookshelfStatus.isInBookshelf}" @click="addToBookShelf">
                  {{bookshelfStatus.message}}
                </div>
                <div class="btn">同步Kindle</div>
              </div>
            </div>
          </section>
        </section>
        <section :class="{showMore:isShowMore}"
                 class="book-intro-wrapper"
                 @click="isShowMore=!isShowMore"
        >
          <section class="book-summary enabled">
            <div>
              {{book.introduction}}
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
        <section class="latest-chapter-wrapper">
          <span>{{book.last_updated_chapter_name}}</span>
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
              <span :class='{active:order ==1}' @click='reorderVolumes(1)' class="order">正順</span>
              <span :class='{active:order==-1}' @click='reorderVolumes(-1)' class="order">倒序</span>
            </div>
          </header>
        </section>
        <div class="wrapper" ref="wrapper">
          <ul class="book-volume-list-ul">
            <li v-for="(volume,index) in book.volumes"
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
          </ul>
        </div>
      </section>
      <chapter-list @goback="hidePanel" v-if="volumePanel.showChapterPanel"></chapter-list>
    </section>
    <section v-else class="loader">
      <jump-loader where="top" class="icon"></jump-loader>
    </section>
  </div>

</template>

<script>
  import headTop from "../../components/header/head";
  import {mapState, mapMutations} from 'vuex'
  import {fetchBook, fetchChapterList} from "../../service/apis";
  import ChapterList from "../../components/chapterList";
  import BScroll from 'better-scroll'
  import {RECORD_BOOKSHELF_LIST} from "../../store/mutation-types";
  import {isEmpty} from "../../config/utils";
  import jumpLoader from "../../components/loading/jumpLoader";

  export default {
    name: "book",
    created() {
      this.bookid = this.$route.params.bookid;
      this.GET_BOOKSHELF_LIST();
    },
    mounted() {

      var self = this;
      this.initData();
    //avoid create scroll before data load.
      if(this.book){
        this.createScroll();
      }
    },
    data() {
      return {
        bookid: null,
        bookshelfStatus: {
          isInBookshelf: false,
          message: ''
        },
        isShowMore: false,
        order: 1,
        volumePanel: {
          showChapterPanel: false,
          chapterList: [],
          currentVolumeChapters: {}
        }
      }
    },

    components: { ChapterList, headTop,jumpLoader},
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
        });
      },
      ...mapMutations(['RECORD_BOOK', 'SAVE_CHAPTER_LIST', 'RECORD_CURRENT_VOLUME_CHAPTERS', 'RECORD_BOOKSHELF_LIST', 'GET_BOOKSHELF_LIST']),
      hidePanel() {
        this.volumePanel.showChapterPanel = !this.volumePanel.showChapterPanel;
      },
      getChaptersOfVolume(volume) {
        this.volumePanel.currentVolumeChapters = this.volumePanel.chapterList.filter(v => v.id === volume.id)[0];
        this.RECORD_CURRENT_VOLUME_CHAPTERS(this.volumePanel.currentVolumeChapters)
        this.volumePanel.showChapterPanel = true;
      },
      async initData() {
        if (isEmpty(this.book)) {
          let book = await fetchBook(this.bookid);
          if (isEmpty(book.response) || book.response.message) {
            this.$router.push('/home');
            return;
          }
          book = {...book.response}
          book.cover_url = 'http://openacg.blob.core.windows.net/image/' + book.cover_url.split('/').pop()
          this.RECORD_BOOK(book);
        }

        let res = await fetchChapterList(this.book.id);
        if (res.response) {
          this.volumePanel.chapterList = Array.concat([], res.response);
          let chapters = this.volumePanel.chapterList.reduce((preVolume, currentVolume) => {
            return preVolume.concat(currentVolume.chapters.map(chapter => chapter.id))
          }, []);
          this.SAVE_CHAPTER_LIST(chapters);
        }



      },
      reorderVolumes(index) {
        if (index != this.order) {
          this.order = index;
          this.book.volumes = this.book.volumes.reverse();
        }
        this.scroll.scrollTo(0, 0, 500);
      },
      addToBookShelf() {
        this.RECORD_BOOKSHELF_LIST(this.book)
      }
    },
    watch: {
      bookshelfList: function (newBookshelfList) {
        this.$nextTick(() => {
          let isInBookshelf = newBookshelfList.some(item => item.id == this.bookid);
          this.bookshelfStatus.isInBookshelf = isInBookshelf;
          if (isInBookshelf) {
            this.bookshelfStatus.message = '已加入書櫃'
          } else {
            this.bookshelfStatus.message = '加入書櫃'
          }
        })


      },
      book: function (newValue) {
        if(!isEmpty(newValue)){
          this.createScroll();
        }
      }
    },
    computed: {
      ...mapState(['book', 'bookshelfList']),
      showLoading: function () {
        if (isEmpty(this.book)) {
          return true;
        }
        return false;


      },
      total_words: function () {
        if (!this.book.word_count) {
          return '未知幾多'
        }
        if (this.book.word_count < 10000) {
          return this.book.word_count;
        }
        return Number.parseFloat(this.book.word_count / 10000).toFixed(1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';

  .container {
    padding-top: 1.95rem;
    position: absolute;
    top: 0;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    .loader{
      top:0;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: #fff;
    }
    .book-main {
      height: 100%;
    }

    .book-detail-wrapper {
      overflow: hidden;
      margin-top: -1.95rem;
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
      height: 4.9rem;
      max-height: none;
      @include sc(.65rem, $defaultColor)
      overflow: hidden;
      text-align: justify;
      box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;

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

      .showMore {
        @include wh(1rem, 1rem);

        .icon-arrow-r {
          @include wh(75%, 75%);
          transform: rotate(270deg);
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

      span {
        @include sc(.65rem, blue)
        line-height: 1.8rem;
        height: 1.8rem;

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

        .active {
          color: blue;
        }
      }
    }

    .wrapper {
      padding-left: .4rem;
      padding-right: .4rem;
      margin-top: .4rem;
      height: 44vh;
      overflow: hidden;

      .book-volume-list-ul {
        background: #fff;
        margin-top: .35rem;

        .book-volume-list-li {
          display: flex;
          justify-content: flex-start;
          align-items: center;

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

  }
</style>
