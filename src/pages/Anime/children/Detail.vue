<template>
  <div id="anime-detail" ref="animeDetail">
    <section class="card-wrapper">
      <div class="anime-info-card">
        <div class="basic-info">
          <div class="info-title">{{currentAnime.title}}</div>
          <div class="info-share">
            <div class="left icon">

              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-share"/>
              </svg>

            </div>
            <div class="right" @click.stop="isActive=!isActive" :class="{active:isActive||isCopied}">
              <p>Share link</p>
              <p class="share-link-wrapper">
                <input class="link" aria-label="share-link" readonly="readonly" type="text" :value="shareURL">
                <span class="icon" @click="copy">
                       <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-copy"/>
                      </svg>
                  </span>
              </p>
              <div class="line"></div>
            </div>
          </div>
        </div>

        <div class="video-info">
          <header>
            <svg class='icon' width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"/>
            </svg>
          </header>
          <ul class="file-info-wrapper tree-view">
            <li class="file-item" v-for="(item,index) in torrentInfo.files" :key="index">
              <span class="icon">
                 <svg  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="item.type.includes('video')?'#icon-recorder':'#icon-file'"/>
            </svg>
              </span>
              <span class="title">{{item.name}}</span>
              <span class="file-size">{{getFileSize(item.size)}}</span>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import { copyTextToClipboard, isEmpty, formatBytes } from '../../../utils/common'
import { fetchAnimeDetail } from '@/apis'
import { mapActions } from 'vuex'
export default {
  name: 'Detail',
  data () {
    return {
      isActive: false,
      isCopied: false,
      torrentInfo: {}
    }
  },
  methods: {
    ...mapActions(['saveCurrentAnime']),
    initData () {
      fetchAnimeDetail(this.mid).then(res => {
        if (!isEmpty(res.response)) {
          Object.defineProperty(res.response, 'title', Object.getOwnPropertyDescriptor(res.response, 'name'))
          delete res.response.name
          this.torrentInfo = res.response
          if (isEmpty(this.currentAnime)) {
            this.saveCurrentAnime(res.response)
          }
        }
      })
    },
    getFileSize (size) {
      return formatBytes(size)
    },
    copy () {
      if (copyTextToClipboard(this.shareURL)) {
        this.isCopied = true
        this.$toast.center('copied OK')
      } else {
        this.isCopied = false
        this.$toast.center('Failed to copy')
      }
    }
  },
  computed: {
    currentAnime: function () {
      return this.$store.getters.currentAnime || {}
    },
    shareURL: function () {
      return `${this.$hostURL}${this.$route.fullPath}`
    }
  },
  created () {
    this.mid = this.$router.params.mid
  },
  mounted () {
    this.initData()
  }

}
</script>

<style lang="scss" scoped>

  @keyframes copyEffect {
    0%{
     transform: scaleX(1);
    }
    50%{
      transform: scaleX(0);
    }
    100%{
      transform: scaleX(1);
    }
  }

  #anime-detail {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #f6f6f6;
    .icon{
      width: 24px;
      height: 24px;
      *{
        width: 100%;
        height: 100%;
      }
    }
    .card-wrapper {
      height: 100%;
      padding: 60px 14px;
      display: flex;
      justify-content: center;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      min-width: 0;

      .anime-info-card {
        background-color: #FFFFFF;
        flex-basis: 66.66666666666666%;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 66.66666666666666%;
        box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
        @media(max-width: 960px) {
          flex-basis: 100%;
          max-width: 100%;

        }
      }

      .basic-info,.video-info {
        width: 100%;
        padding: 16px;
        font-size: 16px;
      }
        .info-title {
          margin-bottom: 16px !important;
          font-size: 20px !important;
          font-weight: 500;
          line-height: 1 !important;
          letter-spacing: .02em !important;
          font-family: Roboto, sans-serif !important;
        }

        .info-share {
          display: flex;
          position: relative;
          align-items: center;

          .left {
            width: 24px;
            height: 24px;
            margin-right: 9px;

            * {
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }

          .right {
            isplay: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            height: auto;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            width: 100%;
            &.active{
              p{
                color: #2e7cf1;
              }
              .line{
                animation: copyEffect .2s ease 1;
                border-bottom-color: #2e7cf1;
              }
            }
            p:first-of-type(1) {
              height: 20px;
              line-height: 20px;
            }

            p.share-link-wrapper {
              display: flex;
              align-items: center;

              .link {
                cursor: text;
                max-height: 32px;
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                line-height: 20px;
                padding: 8px 0 8px;
                max-width: 100%;
                min-width: 0;
                width: 100%;
                background-color: transparent;
                border-style: none;
                font-size: 16px;
              }
              .icon{
                cursor: pointer;

                margin-left: 15px;
                background-position: center;
                transition: background-color .8s;
                *{
                  width: 100%;
                  height: 100%;
                  display: inline-block;
                }

                &:active {
                  background-color: darken(#fff,50%);
                }
              }

            }

            .line{
              width: calc(100% - 24px);
              height: 1px;
              border-bottom: 1px solid black;
            }

          }
        }

      .video-info{
        .tree-view{
          padding-left: 50px;
        }
        .file-info-wrapper{
          li:not(:first-child){
            margin-top: 12px;
          }
          li{
            display: flex;
            span:not(:first-child){
              margin-left: 6px;
            }
          }
        }
      }

    }
  }
</style>
