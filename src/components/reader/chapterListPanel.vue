<template>
  <div class="reader-chapter-list" @click="onTouchCover">
    <div class="content">
      <div class="top-bar">
        <p>{{bookInfo.title}}</p>
        <p>章節</p>
      </div>
      <div class="wrapper" ref="wrapper">
        <ul class="chapters-list-ul">
          <router-link tag="li" :to="{name:'reader',param:{bookid:bookInfo.id},query:{chapterid:item.id}}"
                       v-for="item in chapterList" :key="item.id"
                       class="chapters-list-li"
                       :class="{current:item.id===bookInfo.currentChapter.id}"
          >
            <p>{{item.chapter_name}}</p>

          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "chapterListPanel",
    methods:{
      onTouchCover: function () {
        this.$emit('onTouchCover')
      }
    },
    mounted() {
      var self = this;
      this.$nextTick(() => {
        if (!this.scroll) {
          const options = {
            scrollbar:true,
            scrollY: true,
            scrollX: false,
            mouseWheel: true,
            click: true,
            taps: true,
            pullDownRefresh: true,
            pullDownRefresh: {
              threshold: 40,
              stop: 20
            }
          };
          this.scroll = new BScroll(this.$refs.wrapper, options);
          const currentChapterElement = document.getElementsByClassName('active')[0]||null;
          this.scroll.refresh();
          this.scroll.scrollToElement(currentChapterElement,0,0,0);
        }

      });
    },
    props: {
      position: {
        type: String,
        default: 'left'
      },
      chapterList: {
        type: Array,
        default: []
      },
      bookInfo: {
        type: Object,
        default: null,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";
  .reader-chapter-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);

    .content {
      width: 80%;
      height: 100%;
      background-color: #fff;
      position: absolute;
      p{
        font-family: litefont;
      }
      .top-bar {
        position: absolute;
        width: 100%;
        top: 0;
        height: 2.13333rem;
        background: #fff;
        border-bottom: 1px solid #f2f2f2;
        padding-left: .63333rem;
        z-index: 99;

        p:nth-of-type(1) {
          font-size: .7rem;
          line-height: 1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: .4rem 0 .53333rem;
          font-weight: 400;
        }

        p:nth-of-type(2) {
          font-size: .6333rem;
          height: 1rem;
          line-height: .45333rem;
          color: #999;
        }
      }
    }

    .wrapper {
      display: block;
      margin-top: 3rem;
      padding-left: .63333rem;
      height: 100%;
      overflow: hidden;

      .chapters-list-ul {
        .chapters-list-li {
          height: 1.5rem;
          line-height: 1.5rem;
          margin-bottom: .2rem;

          p {
            height: 100%;
            width: 90%;
            overflow: hidden;
            text-overflow: ellipsis;
            border-bottom: 2px solid #f2f2f2;
            color: black;
            white-space: nowrap;
            font-size: .5rem;
          }


        }
        .current {
          p {
            color: blue;
          }
        }
      }
    }
  }
</style>
