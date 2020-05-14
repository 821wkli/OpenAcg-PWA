<template>
  <div id="list" ref="animeList">
    <section class="daily-info">
      <ul class="weekdays" ref="weekdays">
        <li v-for="(day,index) in dailyList" :key="index" :class="{today : index === today}">
          <span>{{day.weekday.cn}}</span>
          <div class="right">
            <div @click='searchList(item.name_cn)' v-for="(item,i) in day.items" :key="i"><span v-if="item.name_cn"
                                                                                                class="anime-name">{{item.name_cn}}</span>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="anime-table">
      <div class="row header">
        <div class="post-date"><span class="title">更新日期</span></div>
        <div class="post-type"><span class="title">分類</span></div>
        <div class="post-title"><span class="title">標題</span></div>
        <div class="post-file-size"><span class="title">大小</span></div>
        <div class="post-seed"><span class="title">種子</span></div>
        <div class="post-complete"><span class="title">完成</span></div>
        <div class="post-download"><span class="title">下載</span></div>
      </div>
      <div class="wrapper">
        <div class="row" v-for="(item,index) in animeList" :key="index"
             @click="saveCurrentAnime(item)&& $router.push({name:'detail',params:{mid:item.magnet.split(':').pop()}})">
          <div class="detail post-date"><span class="title">{{item.update_time.split('\t')[0]}}</span></div>
          <div class="detail post-type" :class="getTypeClass(item)"><span class="title">{{item.category}}</span></div>
          <div class="detail post-title">
          <span v-if="item.title.includes('\n\n\t\t\t\t')">
            <span class="translator">{{item.title.split('\n\n\t\t\t\t')[0]}}</span>
            <span class="title">{{item.title.split('\n\n\t\t\t\t')[1]}}</span>
          </span>
            <span v-else class="title">
            {{item.title}}
          </span>
          </div>
          <div class="detail post-file-size"><span class="title">{{item.file_size}}</span></div>
          <div class="detail post-seed"><span class="title">{{item.seed}}</span></div>
          <div class="detail post-complete"><span class="title">{{item.completed}}</span></div>
          <div class="detail post-download"><span class="title">{{item.download}}</span></div>
        </div>
        <div class="row footer"><span>{{$lang.animePage.noMoreData}}</span></div>
      </div>
      <transition name="fade">
        <refresh @refresh='onRefresh'
                 v-show="!isScrolling && this.system !=='PC'"
                 :is-refresh="showLoading"></refresh>
      </transition>
    </section>

    <section class="spinner-mask" v-if="showLoading&&(dailyList.length===0 | animeList.length ===0)">
      <colorful-spinner></colorful-spinner>
    </section>
  </div>
</template>

<script>
import { animeDaily, fetchAnimeList } from '@/apis'
import { isEmpty } from '@/utils/common'
import { mapActions, mapGetters } from 'vuex'
import ColorfulSpinner from '@/components/loader/colorfulSpinner'
import refresh from '@/components/common/refresh'

export default {
  name: 'List',
  components: { ColorfulSpinner, refresh },
  data () {
    return {
      dailyList: [],
      animeList: [],
      listHeight: 0,
      offset: 0,
      showLoading: true,
      lock: false,
      keywords: null,
      isScrolling: false
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name === from.name && isEmpty(this.$route.query.type)) {
        // console.log('route change')
        this.keywords = this.$route.query.keywords
        this.offset = 0
        this.initData()
      }
    },
    animeList: function (newAnimeList, oldAnimeList) {
      this.$nextTick(() => {
        if (oldAnimeList.length !== newAnimeList.length && newAnimeList.length <= 20 && !isEmpty(this.keywords)) {
          setTimeout(() => window.scrollTo(0, this.$refs.weekdays.clientHeight), 1)
        }
        this.listHeight = this.$refs.animeList.offsetHeight
      })
    },
    hasBeenLoadedAll: function (newLoadedAll) {
      if (newLoadedAll) this.showLoading = false
    }
  },
  created () {
    this.keywords = this.$route.query.keywords
  },
  computed: {
    today: function () {
      const day = new Date().getDay()
      return day === 0 ? 6 : day - 1
    },
    ...mapGetters(['system']),
    hasBeenLoadedAll: function () {
      return !(isEmpty(this.dailyList) || isEmpty(this.animeList))
    }
  },
  mounted () {
    this.initData()
    window.addEventListener('scroll', this.onScroll)
    // window.onscroll = function (ev) {
    //   console.log('windows.innerheight' + window.innerHeight)
    //   console.log('windows.scrollY' + window.scrollY)
    //   console.log('windows.offsetHeight' + document.body.offsetHeight)
    //   console.log('total height ' + this.listHeight)
    //   // if ((window.innerHeight + window.scrollY) >= this.$refs.anime.offsetHeight) {
    //   //   console.log('bottom')
    //   // }
    // }
  },
  methods: {
    onRefresh: function () {
      this.animeList = []
      this.offset = 0
      this.initData()
    },
    searchList: function (title) {
      this.$router.replace({ name: 'anime', query: { type: 'daily', title } }).catch(() => {
      })
      this.showLoading = true
      animeDaily(title).then(res => {
        if (!isEmpty(res.response)) {
          res.response.forEach(elem => {
            if (/約\d+條評論/.test(elem.title)) {
              elem.title = elem.title.substring(0, elem.title.indexOf('約'))
            }
          })
          this.animeList = res.response
          setTimeout(() => window.scrollTo(0, this.$refs.weekdays.clientHeight), 1)
        } else {
          this.$toast.center(this.$lang.animePage.noMoreData)
        }
        this.showLoading = false
      }).catch(err => {
        this.showLoading = false
        this.$toast.center(err.message ? err.message : this.$lang.animePage.unknownError)
      })
    },
    onScroll: function () {
      this.isScrolling = true
      setTimeout(() => { this.isScrolling = false }, 500)
      if (this.$route.query.type === 'daily') return
      if ((window.innerHeight + window.scrollY) >= this.listHeight - 50) {
        // console.log('bottom')
        if (this.lock) return
        this.lock = true
        fetchAnimeList(this.offset, 20, this.keywords).then(res => {
          if (!isEmpty(res.response)) {
            res.response.forEach(elem => {
              if (/約\d+條評論/.test(elem.title)) {
                elem.title = elem.title.substring(0, elem.title.indexOf('約'))
              }
            })
            this.animeList = [...this.animeList, ...res.response]
            this.offset += 20
          }
          this.lock = false
        }).catch(err => {
          this.$toast.center(err.message ? err.message : this.$lang.animePage.unknownError)
        })
      }
    },
    ...mapActions(['saveCurrentAnime']),
    initData: function () {
      this.showLoading = true
      if (isEmpty(this.dailyList)) {
        animeDaily().then(res => {
          if (!isEmpty(res.response)) {
            this.dailyList = res.response
          }
        }).catch(err => {
          this.showLoading = false
          this.$toast.center(err.message)
        })
      }

      fetchAnimeList(this.offset, 20, this.keywords).then(res => {
        if (!isEmpty(res.response)) {
          res.response.forEach(elem => {
            if (/約\d+條評論/.test(elem.title)) {
              elem.title = elem.title.substring(0, elem.title.indexOf('約'))
            }
          })
          this.animeList = res.response
          this.offset += 20
        }
      }).catch(err => {
        this.showLoading = false
        this.$toast.center(err.message ? err.message : this.$lang.animePage.unknownError)
      })
    },
    getTypeClass: function (entry) {
      let type = ''
      switch (entry.category) {
        case '季度全集':
          type = 'fullEpisode'
          break
        case '動畫':
          type = 'anime'
          break
        case '日劇':
          type = 'tv'
          break
        case '動漫音樂':
        case '音樂':
          type = 'music'
          break
        default:
          type = 'default'
      }
      return type
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
  .spinner-mask {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  #list {
    width: 100%;
    height: 100%;

    .daily-info {
      width: 100%;
      height: auto;
      padding: 14px;

      .weekdays {
        width: 100%;
        height: 100%;
        padding-top: 16px;

        li {
          font-weight: 400;
          font-size: 16px;
          display: flex;
          margin-bottom: 16px;
          &.today{
            span{
              color: #14e414;
            }
          }

          span {
            padding-top: 6px;
            margin-right: 5px;
          }

          .right {
            flex: 1;

            div {
              display: inline-block;
            }

            .anime-name {
              display: inline-block !important;
              margin: 3px;
              padding: 3px 8px;
              border-radius: 8px;
              font-size: 13px;
              text-decoration: none;
              color: #333;
              background: #f5f5f5;
              transition: background 0.3s ease-out
            }

            .anime-name:hover {
              background-color: darken(#f5f5f5, 5);
              cursor: pointer;
            }
          }
        }
      }
    }

    .anime-table {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 10px;
      background-color: #FFFFFF;
      border-top: 1px solid #ccc;
      position: relative;

      span {
        font-size: 14px;
        color: #333;
      }

      .row {
        display: flex;

        &.header {
          font-weight: bold;

          .post-title {
            justify-content: center;
          }
        }

        &.footer {
        justify-content: center;
          align-items: center;
          span {
            margin-right: 4%;
            color: #6f6262;
          }
        }

        div {
          display: flex;
          justify-content: center;
          align-content: center;
          padding: 12px 0;

        }

        .post-date {
          width: 160px;

        }

        .post-type {
          width: 5%;

          &.fullEpisode {
            font-weight: bold;

            span {
              color: rgb(255, 0, 0);
            }
          }

          &.anime {
            span {
              color: rgb(255, 0, 0);
            }
          }

          &.tv {
            span {
              color: rgb(255, 0, 0);
            }
          }

          &.music {
            font-weight: bold;

            span {
              color: rgb(128, 0, 128);;
            }
          }

        }

        .post-title {
          flex: 1;
          padding-left: 8px;
          display: flex;
          justify-content: flex-start;

          .translator {
            margin-right: 5px;
            padding: 5px 10px !important;
            border: none !important;
            border-radius: 100px;
            background-color: #f5f5f5;
            transition: background-color 0.3s ease-out;
          }

          .translator:hover {
            background-color: darken(#f5f5f5, 15);
            cursor: pointer;
          }

          .title:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .post-file-size {
          width: 6%;
        }

        .post-seed {
          width: 5%;
        }

        .post-download {
          width: 5%;
        }

        .post-complete {
          width: 5%;
        }

      }

      @media (max-width: 760px) {
        .row {
          &.header {
            display: none;
          }

          .post-file-size, .post-seed, .post-download {
            display: none;
          }

          .post-date {
            max-width: 23%;
            text-align: center;

            span {
              width: 100%;
              word-wrap: break-word;
            }
          }

          .post-complete {
            display: flex;
            align-items: flex-end;
            margin-right: 10px;
          }

          .post-title {
            .title {
              line-height: 24px;
            }
          }
        }

      }
    }

  }
</style>
