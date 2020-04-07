<template>
  <div id="list" ref="animeList" >
    <section class="daily-info">
      <ul class="weekdays">
        <li v-for="(day,index) in dailyList" :key="index">
          <span>{{day.weekday}}</span>
          <div class="right">
            <div v-for="(item,i) in day.items" :key="i"><span v-if="item.name_cn"
                                                              class="anime-name">{{item.name_cn}}</span></div>
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
        <div class="post-download"><span class="title">下載</span></div>
        <div class="post-complete"><span class="title">完成</span></div>
      </div>
      <div class="wrapper" @scroll="onscroll($event)">
      <div class="row" v-for="(item,index) in animeList" :key="index" @click="saveCurrentAnime(item)&& $router.push({name:'detail',params:{mid:item.magnet.split(':').pop()}})">
        <div class="detail post-date"><span class="title">{{item.update_time.split('\t')[0]}}</span></div>
        <div class="detail post-type" :class="getTypeClass(item)"><span class="title">{{item.category}}</span></div>
        <div class="detail post-title">
          <span  v-if="item.title.includes('\n\n\t\t\t\t')">
            <span class="translator">{{item.title.split('\n\n\t\t\t\t')[0]}}</span>
            <span class="title">{{item.title.split('\n\n\t\t\t\t')[1]}}</span>
          </span>
          <span v-else class="title">
            {{item.title}}
          </span>
        </div>
        <div class="detail post-file-size"><span class="title">{{item.file_size}}</span></div>
        <div class="detail post-seed"><span class="title">{{item.seed}}</span></div>
        <div class="detail post-download"><span class="title">{{item.download}}</span></div>
        <div class="detail post-complete"><span class="title">{{item.completed}}</span></div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import { animeDaily, fetchAnimeList } from '../../../apis'
import { isEmpty } from '../../../utils/common'
import { mapActions } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      dailyList: [],
      animeList: [],
      listHeight: 0
    }
  },
  watch: {
    animeList: function (newAnimeList, oldAnimeList) {
      this.$nextTick(() => {
        if (oldAnimeList.length !== newAnimeList.length) {
          this.listHeight = this.$refs.animeList.offsetHeight
        }
      })
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
    onScroll: function () {
      // const scrollTop = e.target.scrollTop
      // this.scrollTop = scrollTop
      // const { scrollHeight, offsetHeight } = e.target
      // if (scrollTop + offsetHeight >= scrollHeight - 50) {
      //   console.log('load more dat ahere')
      // }

      console.log('total height ' + this.listHeight)
      if ((window.innerHeight + window.scrollY) >= this.listHeight - 50) {
        console.log('bottom')
      }
    },
    ...mapActions(['saveCurrentAnime']),
    initData: function () {
      animeDaily().then(res => {
        if (!isEmpty(res.response)) {
          this.dailyList = res.response
        }
      })

      fetchAnimeList(0, 20).then(res => {
        if (!isEmpty(res.response)) {
          res.response.forEach(elem => {
            if (/約\d+條評論/.test(elem.title)) {
              elem.title = elem.title.substring(0, elem.title.indexOf('約'))
            }
          })
          this.animeList = res.response
        }
      })
    },
    getTypeClass: function (entry) {
      let type = ''
      switch (entry.category) {
        case '季度全集':type = 'fullEpisode'
          break
        case '動畫':type = 'anime'
          break
        case '日劇':type = 'tv'
          break
        case '動漫音樂':type = 'music'
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
      span {
        font-size: 14px;
        color: #333;
      }

      .row {
        display: flex;
       &.header{
         font-weight: bold;
         .post-title{
           justify-content: center;
         }
       }

        div{
          display: flex;
          justify-content: center;
          align-content: center;
          padding: 12px 0;

        }
        .post-date {
          width: 160px;

        }
        .post-type{
          width: 5%;
          &.fullEpisode{
            font-weight: bold;
            span{
              color: rgb(255, 0, 0);
            }
          }
          &.anime{
            span{
              color: rgb(255,0,0);
            }
          }
          &.tv{
           span{
             color: rgb(255,0,0);
           }
          }
          &.music{
            font-weight: bold;
            span{
              color: rgb(128, 0, 128);;
            }
          }

        }

        .post-title {
          flex: 1;
          padding-left: 8px;
          display: flex;
          justify-content: flex-start;
          .translator{
            margin-right: 5px;
            padding: 5px 10px !important;
            border: none !important;
            border-radius: 100px;
            background-color: #f5f5f5;
            transition: background-color 0.3s ease-out;
          }
          .translator:hover{
            background-color: darken(#f5f5f5,15);
            cursor: pointer;
          }

          .title:hover{
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
    }

  }
</style>
