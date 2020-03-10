<template>
  <div class="reader-chapter-list" @click="onTouchCover">
    <div class="content">
      <div class="top-bar">
        <p>{{bookInfo.title}}</p>
        <p>章節</p>
      </div>
      <div class="wrapper" ref="wrapper">
        <ul class="chapters-list-ul">
          <li  class="volume_li" v-for="volume in chapterList" :key="volume.id">
            <header>
              <h6>{{volume.name}}</h6>
            </header>
            <router-link tag="li" :to="{name:'reader',param:{bookid:bookInfo.id},query:{chapterid:item.id}}"
                         v-for="item in volume.chapters" :key="item.id"
                         class="chapters-list-li"
                         :class="{current:item.id===bookInfo.currentChapter.id}">
              <p>{{item.chapter_name}}</p>

            </router-link>
          </li>
          <li class="volume_li"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'chapterListPanel',
  methods: {
    onTouchCover: function () {
      this.$emit('onTouchCover')
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        const options = {
          scrollbar: true,
          scrollY: true,
          scrollX: false,
          mouseWheel: true,
          click: true,
          taps: true
        }
        this.scroll = new BScroll(this.$refs.wrapper, options)
        const currentChapterElement = document.getElementsByClassName('current')[0] || null
        this.scroll.refresh()
        this.scroll.scrollToElement(currentChapterElement, 0, 0, 0)
      }
    })
  },
  props: {
    position: {
      type: String,
      default: 'left'
    },
    chapterList: {
      type: Array
    },
    bookInfo: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
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
      }
      .top-bar {
        position: absolute;
        width: 100%;
        top: 0;
        height: 2.13333rem;
        background: #fff;
        padding-left: .63333rem;
        z-index: 99;

        p:nth-of-type(1) {
          max-width: 85%;
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
        .volume_li{
          h6{
            max-width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          margin-bottom: .5rem;
          &:last-of-type{
            height: 1.8rem;
          }
          &:last-of-type{
            margin-top:1.8rem;
          }
        }
      }
    }
  }
</style>
