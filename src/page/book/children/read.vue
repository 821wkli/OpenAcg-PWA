<template>
  <div class="container">
    <section class="page-header">
      <header>
        <h1 class="chapter-title">{{currentChapter.chapter_name}}</h1>
      </header>
    </section>
    <section class="reader-wrapper" ref="wrapper">
      <ul class="reader-ul" @click="view.showPanel = !view.showPanel">
        <li v-for="(chapter,index) in chapters" :key="index">
          <section class="page-chapter">
            <section class="page-read">
              <div class="content">
                <header>
                  <h3 class="chapter-title">{{chapter.chapter_name}}</h3>
                </header>
                <ul class="content-ul" :style="view.paragrah">
                  <li class="content-sentence" v-for="item in chapter.content">{{item}}</li>
                </ul>
              </div>
            </section>
          </section>
        </li>
      </ul>
    </section>
    <section class="control-panel" v-show="view.showPanel">
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
          <span class="btn square">Light mode</span>
          <span class="btn square">Dark mode</span>
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

  export default {
    name: "read",
    components: {headTop, VueRangeSlider, iosAlert},
    data() {
      return {
        preventDuplicatedRequest:false,
        view: {
          showPanel: false,
          showAlert: false,
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
      ...mapState(['currentVolumeChapters'])
    },
    watch: {
      'view.slider.value': function (newVal) {
        this.view.paragrah.fontSize = `${newVal / 10}rem`;
      },
      chapters: function (newChapters) {
        this.currentChapter = newChapters[newChapters.length - 1];
        this.RECORD_CURRENT_READING_CHAPTER(this.currentChapter);
        //get next chapter id

        if (this.currentVolumeChapters && this.currentChapter) {
          for (var i = 0; i < this.currentVolumeChapters.chapters.length; i++) {
            if (this.currentChapter.id === this.currentVolumeChapters.chapters[i].id && i != this.currentVolumeChapters.chapters.length - 1) {
              this.nextChapterId = this.currentVolumeChapters.chapters[i + 1].id;
              this.previousChapterId = this.currentChapter.id;
            }
          }
        }
      }

    },

    created() {
      this.cid = this.$route.query.chapterid;

    },
    mounted() {
      this.initData();
      var self = this;
      this.$nextTick(() => {
        if (!this.scroll) {
          const options = {
            scrollY: true,
            scrollX: false,
            mouseWhtaps: true,
            pullUpLoad: true,
            pullUpload: {
              thresold: 40
            },
          };
          this.scroll = new BScroll(this.$refs.wrapper, options);
          //load more data reach bottom
          this.scroll.on('pullingUp', () => {
            console.log('bottom arrtive');
            self.loadMore().then(() => {
              self.scroll.finishPullUp();
            })

          })
        }
      })
    },
    methods: {
      ...mapMutations(['RECORD_CURRENT_READING_CHAPTER']),
      initData() {
        this.loadChapterContent(this.cid);
      }
      ,
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
          this.RECORD_CURRENT_READING_CHAPTER(chapter);
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
        this.preventDuplicatedRequest = false;
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
    background-color: #fff;

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
            border: 1px solid #535353;
            border-radius: .10667rem;
            width: 40%;
            line-height: 1.5rem;
            height: 1.5rem;
            text-align: center;

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
      height: 100%;
      background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;
      background-size: 100%;

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
      background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top;
      background-size: 100%;

      header {
        height: 100%;
        padding-left: .5rem;
      }

      .chapter-title {
        height: 100%;
        font-size: .5rem;
        line-height: 1.95rem;
        font-weight: 400;
        position: absolute;
        color: rgba(0, 0, 0, .4);
      }
    }

    .page-read {
      padding-top: 1.95rem;
      height: 100%;
      width: 100%;
      background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;
      background-size: 100%;

      .content {
        background: url(../../../images/skin-default-t.ece62.jpg) no-repeat center top, url(../../../images/skin-default-b.79f06.jpg) no-repeat center bottom, url(../../../images/skin-default-m.35905.jpg) repeat-y center 119px;
        background-size: 100%;
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
          line-height: 1.8rem;
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

</style>
