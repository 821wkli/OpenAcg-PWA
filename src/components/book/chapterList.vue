<template>
  <div class="container">
    <head-top :head-title="book.title"
              :is-transparent="false">
      <section class="fake-goback" slot='fake-goback' @click="goback">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
        </svg>
      </section>
    </head-top>
    <section class="chapter-list" v-if="currentVolumeChapters">
      <header>
        <h4>{{currentVolumeChapters.name}}</h4>
      </header>
      <div class="wrapper" ref="wrapper">
      <ul class="chapter-list-ul">
        <li
          @click="$router.push('/reader/'+book.id+'?chapterid='+item.id)" class="chapter-list-li"
          v-for="item in currentVolumeChapters.chapters"
          :key="item.id"
        >
          <span>{{item.chapter_name}}</span>
        </li>
        <li class="chapter-list-li"></li>
      </ul>
      </div>
    </section>
  </div>
</template>

<script>
import headTop from '../header/headTop'
import { mapGetters } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'chapterList',
  data () {
    return {
    }
  },
  components: { headTop },
  computed: {
    ...mapGetters(['book', 'currentVolumeChapters']),
    sortedChapterList: function () {
      if (this.currentVolumeChapters.chapters) {
        const sorted = [...this.currentVolumeChapters.chapters]
        const orderMapping = {
          num: {
            一: 1,
            二: 2,
            三: 3,
            四: 4,
            五: 5,
            六: 6,
            七: 7,
            八: 8,
            九: 9,
            十: 10,
            終: 99999
          },
          unit: {
            十: 10,
            百: 100,
            千: 1000
          }
        }
        console.log(orderMapping)
        sorted.forEach(chapter => {
          let oid = 1
          for (const key in orderMapping.unit) {
            if (chapter.chapter_name.includes(key)) {
              oid = oid * orderMapping.unit[key]
              break
            }
          }
          for (const key in orderMapping.num) {
            if (chapter.chapter_name.includes(key)) {
              if (oid !== 1) {
                oid = oid + orderMapping.num[key]
              } else {
                oid = oid + orderMapping.num[key]
              }
              break
            }
          }
          chapter = Object.assign(chapter, { oid: oid })
        })
        sorted.sort((x, y) => {
          return x.chapter_name.localeCompare(y.chapter_name, 'zh-CN')
        })
        return sorted
      }
      return []
    }
  },
  mounted () {
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
        window.scroll(0, 0)
      }
    })
  },
  methods: {

    goback () {
      this.$emit('goback')
    }
  }
}
</script>

<style lang="scss" scoped>

  .container{

    position: absolute;
    top: 0;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    .fake-goback{
      left: 0.4rem;
      @include wh(0.6rem, 0.8rem);
      line-height: 2.2rem;
      margin-left: .4rem;
      fill: #33373d;;
    }
    .chapter-list{
      height: 100%;
    }
    header{
      /*height: 2rem;*/
      line-height: 2rem;
      padding-left: .4rem;
      background-color: #f5f5f5;
      h4{
        font-size: .8rem;
      }
    }
    .wrapper{
      height:100%;
      overflow: hidden;

    }
    .chapter-list-ul{
      padding-left: .4rem;
      padding-right: .4rem;
      background-color: #fff;

      li{
        overflow:hidden;
        text-overflow: ellipsis;
        line-height: 2rem;
        height: 2rem;
        @include sc(.65rem,$defaultColor);
        border-bottom: 1px solid #cccccc;
      }
    }
  }
</style>
