<template>
  <div class="container" :class="{lightTheme:!setting.darkTheme,darkTheme:setting.darkTheme}">
    <section class="page-header">
      <header>
        <h1 class="chapter-title" :class="{lightTheme:!setting.darkTheme,darkTheme:setting.darkTheme}">
          {{currentChapter.chapter_name}}</h1>
      </header>
    </section>
    <section class="reader-wrapper" ref="wrapper">
      <ul class="reader-ul" @click="view.showPanel = !view.showPanel">
        <li v-for="(chapter,index) in chapters" :key="index">
          <section class="page-chapter">
            <section class="page-read">
              <div class="content">
                <header>
                  <h3 :class="{lightTheme:!setting.darkTheme,darkTheme:setting.darkTheme}" class="chapter-title">
                    {{chapter.chapter_name}}</h3>
                </header>
                <ul class="content-ul" :style="{fontSize:setting.fontSize}"
                    :class="{darkTheme:setting.darkTheme}">
                  <li class="content-sentence" v-for="item in chapter.content">{{item}}</li>
                </ul>
              </div>
            </section>
          </section>
        </li>
      </ul>
    </section>
    <section class="control-panel" v-if="view.showPanel">
      <head-top :head-title="currentChapter.chapter_name"
                go-back="true"
                :goback-handler="onGoback.bind(null)"
                theme="dark"
                header-position="fixed"

      ></head-top>

      <section class="bottom-control-panel">
        <div class="item">
          <span class="btn font-btn-w">Aa-</span>
          <div class="slider">
            <vue-range-slider v-bind="view.slider.props" v-model="view.slider.value"></vue-range-slider v-bind>
          </div>
          <span class="btn font-btn-w">Aa+</span>
        </div>
        <div class="item clearfix">
          <span class="btn square" :class="{active:!setting.darkTheme}" @click="setDarkTheme(false)">Light mode</span>
          <span class="btn square" :class="{active:setting.darkTheme}" @click="setDarkTheme(true)">Dark mode</span>
        </div>
        <div class="item clearfix">
          <span @click="switchChapter(previousChapterId)"
                class="btn square large">Last Chapter</span>
          <span @click="view.isShowChapterListPanel=true" class="btn square large menu">Menu</span>
          <span @click="switchChapter(nextChapterId)"
                class="btn square large">Next Chapter</span>
        </div>
      </section>
    </section>
    <ios-alert v-show="view.showAlert"
               :title="view.alert.title"
               :body-content="view.alert.text"
               @ok="view.showAlert=false"
               @cancel="view.showAlert=false"
    ></ios-alert>
    <jump-loader where="top"
                 v-if="view.showLoading"></jump-loader>
    <transition name="slide-left">
      <chapter-list-panel @onTouchCover="view.isShowChapterListPanel=false"
                          v-if="view.isShowChapterListPanel"
                          :chapter-list="chapterList"
                          :book-info="bookInfo"
      ></chapter-list-panel>
    </transition>
  </div>


</template>

<script>
  import {getChapterContent} from "../../../service/apis";
  import {mapMutations, mapState} from "vuex";
  import headTop from "../../../components/header/head";
  import 'vue-range-component/dist/vue-range-slider.css'
  import VueRangeSlider from 'vue-range-component'
  import BScroll from 'better-scroll'
  import iosAlert from "../../../components/common/alert";
  import jumpLoader from "../../../components/loading/jumpLoader";
  import {isEmpty} from "../../../config/utils";
  import ChapterListPanel from "../../../components/reader/chapterListPanel";
  import {fetchBook} from "../../../service/apis";

  export default {
    name: "read",
    components: {ChapterListPanel, headTop, VueRangeSlider, iosAlert, jumpLoader},
    data() {
      return {
        bookInfo: null,
        book: null,
        cid: null,
        preventDuplicatedRequest: false,
        bookid: null,
        debug: {
          counter: 1
        },
        view: {
          currentFingerPosY: 0,
          darkMode: false,
          showPanel: false,
          showAlert: false,
          showLoading: false,
          isShowChapterListPanel: false,
          alert: {
            title: 'OpenAcg',
            text: ''
          },

          slider: {
            value: 8,
            props: {
              tooltip: 'hover',
              min: 5,
              max: 15
            }
          },
          paragrah: {
            fontSize: '0.8rem'
          }
        },
        chapters: [],
        currentChapter: {},
        previousChapterId: null,
        nextChapterId: null

      }
    },
    computed: {
      ...mapState(['recentReadingChapterList', 'currentVolumeChapters', 'chapterList', 'setting']),
      previousPosY: function () {
        let book = this.recentReadingChapterList.find(book => book.bookid == this.bookid && book.chapterid == this.cid);
        return !isEmpty(book) ? book.posY : 0;
      },
      isEndOfBook: function () {
        if ((this.currentChapter && this.currentChapter.id === this.nextChapterId)
          || (isEmpty(this.nextChapterId))
        ) {
          return true;
        }
        return false;
      }

    },
    watch: {
      '$route'(to, from) {
        console.log('test')
        if (from.query.chapterid && to.query.chapterid) {
          const self = this;
          this.cid = to.query.chapterid;
          this.initData().then(() => {
            let latestRenderedList = Array.from(document.getElementsByClassName('reader-ul')[0].children).pop() || null;
            if (self.scroll && latestRenderedList != null) {
              self.scroll.scrollToElement(latestRenderedList, 0, 0, 0)
            }


          })
          //this.$router.go()
        }

      },
      'view.isShowChapterListPanel': function (newValue) {
        if (newValue) {
          this.view.showPanel = false;
        }
      },
      book: function (newValue) {
        if (!isEmpty(newValue)) {
          this.bookInfo = {
            id: newValue.id,
            title: newValue.title,
            currentChapter: {
              chapter_name: this.currentChapter.chapter_name,
              id: this.currentChapter.id
            }
          }
        }

      },
      'view.slider.value': function (newVal) {

        let obj = {fontSize: `${newVal / 10}rem`};
        this.SAVE_SETTING({...this.setting, ...obj});
      },
      chapters: function (newChapters) {
        this.currentChapter = newChapters[newChapters.length - 1];
        //this.RECORD_CURRENT_READING_CHAPTER({bookid: this.bookid, chapterid: this.currentChapter.id, posY: 0});
        //get next chapter id

        if (this.chapterList && this.currentChapter) {
          const chapterids = this.chapterList.map(chapter => chapter.id)
          for (var i = 0; i < chapterids.length; i++) {
            if (this.currentChapter.id === chapterids[i]) {
              if (i < chapterids.length - 1) {
                this.nextChapterId = chapterids[i + 1];
                this.previousChapterId = chapterids[i - 1];
                break;
              }else{
                this.previousChapterId = chapterids[i - 1];
                break;
              }
            }
          }
        }
      }

    },

    created() {
      this.bookid = parseInt(this.$route.params.bookid);
      this.cid = this.$route.query.chapterid;

    },
    beforeDestroy() {
      //save reading history logic here
      let renderedChapterList = Array.from(document.getElementsByClassName('reader-ul')[0].children);
      if (renderedChapterList.length <= 1) {
        console.log(this.view.currentFingerPosY)
      } else {
        const listHeight = renderedChapterList.map(item => item.clientHeight).reduce((prev, curr) => prev + curr);
        const lastChapterListHeight = renderedChapterList[renderedChapterList.length - 1].clientHeight;
        this.view.currentFingerPosY = -(lastChapterListHeight - (listHeight - Math.abs(this.view.currentFingerPosY)))
        console.log(this.view.currentFingerPosY);
      }
      this.RECORD_CURRENT_READING_CHAPTER({
        bookid: this.bookid,
        chapterid: this.currentChapter.id,
        posY: this.view.currentFingerPosY
      });
    },
    mounted() {

      this.initData();
      var self = this;
      this.$nextTick(() => {
        if (!this.scroll) {
          const options = {
            scrollY: true,
            scrollX: false,
            click: true,
            tap: true,
            mouseWhtaps: true,
            pullUpLoad: true,
            pullUpload: {
              thresold: 5
            },
          };
          this.scroll = new BScroll(this.$refs.wrapper, options);

          this.scroll.on('scroll', (pos) => {
            console.log(pos.y);
            this.view.currentFingerPosY = pos.y;

          })
          //load more data reach bottom
          this.scroll.on('pullingUp', () => {
            console.log('bottom arrtive');
            this.view.showLoading = true;
            self.loadMore().then(() => {
              self.scroll.finishPullUp();
              this.view.showLoading = false;
            })

          })
        }
      })
    },
    methods: {
      ...mapMutations(['RECORD_CURRENT_READING_CHAPTER', 'SAVE_SETTING']),
      async initData() {
        this.view.showLoading = true;
        this.loadChapterContent(this.cid).then(() => {
          this.view.showLoading = false
          if (this.previousPosY < 0 && this.scroll) {
            this.scroll.refresh();
            this.scroll.scrollTo(0, this.previousPosY);
          }
        })

        let res = await fetchBook(this.bookid);
        if (res.response) {
          this.book = res.response;
        }

      }
      ,
      setDarkTheme(mode) {
        this.SAVE_SETTING({...this.setting, ...{darkTheme: mode}})
      },
      async loadChapterContent(cid) {

        if (this.currentChapter && this.currentChapter.id === cid) {
          throw new Error('no more data exception');
        }

        let res = await getChapterContent(cid);
        let chapter = {};
        if (res.response) {
          chapter = Object.assign({}, res.response)
          chapter.content = chapter.content.split(/\r?\n/);
          chapter.content.forEach(line => {
            line = line.replace(/\s+/, "")
          })
          this.chapters.push(chapter);
          //this.RECORD_CURRENT_READING_CHAPTER({bookid: this.bookid, chapterid: chapter.id, posY: 0});
          this.$route.params.chapterid = chapter.id;
        }
      },
      async loadMore() {
        //avoid async send duplicated data
        if (this.preventDuplicatedRequest) {
          return;
        }
        this.preventDuplicatedRequest = true;
        if (this.nextChapterId) {
          await this.loadChapterContent(this.nextChapterId)
            .catch(err => {
              this.view.alert.text = err;
              this.view.showAlert = true;
            })
        }
        setTimeout(() => {
          this.preventDuplicatedRequest = false;
          this.debug.counter++;
        }, 10000)

        return;
      },

      switchChapter(cid) {
        if (this.currentChapter && this.currentChapter.id === cid) {
          console.log('no more data');
          return;
        }
        let bid = this.bookid;
        if (!isEmpty(cid)) {
          this.$router.replace({
            query: {
              chapterid: cid
            }
          })

        }
      },
      onGoback: function(){
        let bid = this.bookid
        this.$router.push({name:'book',params:{bookid:bid}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";


  .container {
    position: absolute;
    /*padding-top: 1.95rem;*/
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;

    .control-panel {
      .bottom-control-panel {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 21;
        width: 100%;
        height: 8.53333rem;
        padding: 1.3rem .53333rem 1.3rem .53333rem;

        background-color: rgba(50, 51, 52, .9);

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: .8rem;

          span {
            font-size: .7rem;
            color: #ffffff;
          }

          .square {
            font-size: .55rem;
            border: 2px solid #535353;
            border-radius: .3rem;
            width: 40%;
            line-height: 1.8rem;
            height: 1.8rem;
            text-align: center;
          }

          .large {
            border: none;
            font-size: .8rem;
          }

          .menu {
            color: #a8a8a8;
          }

          .active {
            color: #b93221;
          }
        }

        .slider {
          width: 50%;
        }
      }
    }

    .reader-wrapper {
      overflow: hidden;
      position: absolute;
      @include wh(100%, 100%)
      /*background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;*/
      /*background-size: 100%;*/
      .reader-ul {
        min-height: 100%;
      }


    }

    .page-header {
      position: absolute;
      z-index: 10;
      top: 0;
      right: 0;
      left: 0;
      height: 1.95rem;
      max-height: 1.95rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      header {
        height: 100%;
        padding-left: .5rem;
      }

      .chapter-title {
        width: 100%;
        height: 100%;
        font-size: .5rem;
        line-height: 1.95rem;
        font-weight: 400;
        position: absolute;
      }

    }

    .page-read {
      padding-top: 1.95rem;
      height: 100%;
      width: 100%;
      /*background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;*/
      /*background-size: 100%;*/

      .content {
        /*background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;*/
        /*background-size: 100%;*/
      }

      header {
        padding-left: .5rem;
      }

      .chapter-title {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2;
      }

      .content-ul {
        padding: .5rem;

        .content-sentence {
          color: inherit;
          line-height: 1.8rem;
          word-wrap: break-word;
        }
      }

      .next-chapter-container {
        width: 100%;
        display: flex;
        justify-content: center;

        .btn {
          background: red;
          border-radius: 1rem;
          width: 50%;
          text-align: center;

        }
      }
    }

  }

  .darkTheme {
    background-color: #0c0c0c;
    color: #b9b6b6;
  }

  .lightTheme {
    background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;
    background-size: 100%;
    color: $defaultColor;
  }


</style>
