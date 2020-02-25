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
        <div class="item clearfix"></div>
      </section>
    </section>
    <ios-alert v-show="view.showAlert"
               :title="view.alert.title"
               :body-content="view.alert.text"
               @ok="view.showAlert=false"
               @cancel="view.showAlert=false"
    ></ios-alert>
    <jump-loader v-if="view.showLoading"></jump-loader>
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

  export default {
    name: "read",
    components: {headTop, VueRangeSlider, iosAlert, jumpLoader},
    data() {
      return {
        cid:null,
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
        let posY = this.recentReadingChapterList.find(book => book.bookid === this.bookid&& book.chapterid === this.cid).posY;
        return posY ? posY : 0;
      }

    },
    watch: {
      'view.slider.value': function (newVal) {

        let obj = {fontSize: `${newVal / 10}rem`};
        this.SAVE_SETTING({...this.setting, ...obj});
      },
      chapters: function (newChapters) {
        this.currentChapter = newChapters[newChapters.length - 1];
        //this.RECORD_CURRENT_READING_CHAPTER({bookid: this.bookid, chapterid: this.currentChapter.id, posY: 0});
        //get next chapter id

        if (this.chapterList && this.currentChapter) {
          for (var i = 0; i < this.chapterList.length; i++) {
            if (this.currentChapter.id === this.chapterList[i] && i != this.chapterList.length - 1) {
              this.nextChapterId = this.chapterList[i + 1];
              this.previousChapterId = this.chapterList[i];
              break;
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
        let ret = renderedChapterList.reduce((pre, cur) => {
          let preHeight = pre.clientHeight || 0;
          return preHeight + cur.clientHeight;
        });
        this.view.currentFingerPosY = this.view.currentFingerPosY - ret;
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
      initData() {
        this.view.showLoading = true;
        this.loadChapterContent(this.cid).then(() => {
          this.view.showLoading = false
          if (this.previousPosY < 0&&this.scroll) {
            this.scroll.refresh();
            this.scroll.scrollTo(0, this.previousPosY);
          }
        })
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
        height: 6.53333rem;
        padding: 1.3rem .53333rem .53333rem;

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
