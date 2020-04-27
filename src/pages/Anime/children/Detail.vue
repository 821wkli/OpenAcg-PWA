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
          <div class="video-wrapper" :class="{beforePlay: currentPlayingIndex===-1}">
            <div class="artplayer-app" ref="artplayer">
            </div>
          </div>
          <header>
            <svg class='icon' width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"/>
            </svg>
          </header>
          <div class='loading' v-if="showLoading">
            Loading
          </div>
          <ul class="file-info-wrapper tree-view" v-else>
            <li @click='loadVideo(item.index)' class="file-item" v-for="(item,index) in torrentInfo.files" :key="index">
              <span class="icon">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   :xlink:href="item.type.includes('video')?'#icon-recorder':'#icon-file'"/>
            </svg>
              </span>
              <span class="title" :class="{active: item.index ===currentPlayingIndex}">{{item.name}}</span>
              <span class="file-size">{{getFileSize(item.size)}}</span>
              <span class="icon play" v-if="item.type.includes('video')">
                   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"/>
                    </svg>
              </span>
              <span class="icon download" v-else>
                   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-download"/>
                    </svg>
              </span>
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
import { imageBaseUrl } from '../../../config/env'
import { mapActions, mapGetters } from 'vuex'
import Artplayer from 'artplayer'

export default {
  name: 'Detail',
  data () {
    return {
      isActive: false,
      isCopied: false,
      isLoadedVideo: false,
      torrentInfo: {},
      mid: null,
      videoSource: '',
      art: null,
      currentPlayingIndex: -1,
      isSafari: false,
      showLoading: true
    }
  },
  watch: {
    videoSource: function (newSource) {
      if (!isEmpty(newSource)) {
        this.art === null ? this.createVideo() : this.isSafari ? (this.art.src = newSource) : (this.art.switchUrl(newSource)) && (this.art.play = true)
      }
    }
  },
  methods: {
    ...mapActions(['saveCurrentAnime']),
    createVideo: function () {
      // check if safari
      this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      if (this.isSafari) {
        this.art = document.createElement('video')
        this.art.src = this.videoSource
        this.art.classList.add('safari-video')
        this.art.setAttribute('width', '100%')
        this.art.setAttribute('height', '100%')
        this.art.setAttribute('controls', 'controls')
        // add fullscreen support
        this.art.addEventListener('dblclick', () => {
          if (this.art.requestFullscreen) {
            this.art.requestFullscreen()
          } else if (this.art.mozRequestFullScreen) {
            this.art.mozRequestFullScreen()
          } else if (this.art.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            this.art.webkitRequestFullscreen()
          } else if (this.art.msRequestFullscreen) { /* IE/Edge */
            this.art.msRequestFullscreen()
          }
        })
        this.$refs.artplayer.appendChild(this.art)
      } else {
        const that = this
        this.art = new Artplayer({
          container: '.artplayer-app',
          url: this.videoSource,
          title: this.currentAnime.title || '',
          poster: `${imageBaseUrl}/image/poster.jpg`,
          volume: 0.5,
          isLive: false,
          muted: false,
          autoplay: false,
          pip: true,
          autoSize: true,
          screenshot: true,
          setting: true,
          loop: true,
          flip: true,
          playbackRate: true,
          aspectRatio: true,
          fullscreen: true,
          fullscreenWeb: true,
          subtitleOffset: true,
          miniProgressBar: true,
          localVideo: true,
          localSubtitle: true,
          networkMonitor: false,
          mutex: true,
          light: true,
          backdrop: true,
          theme: '#ffad00',
          lang: navigator.language.toLowerCase(),
          moreVideoAttr: {
            preload: 'auto'
          },
          controls: [
            {
              position: 'right',
              html: 'Download',
              click: function () {
                that.download(that.videoSource)
              }
            }
          ],
          icons: {
            loading: '<img src="http://cdn.openacg.ml/image/preloading.gif">',
            state: '<img src="http://cdn.openacg.ml/image/state.png">'
          },
          layers: [
            {
              html: '<span>OpenAcg</span>',
              style: {
                position: 'absolute',
                top: '5px',
                right: '10px',
                opacity: '.9',
                fontWeight: '400'
              }
            }
          ]
        })
        setTimeout(() => {
          // console.log(this.art.player.loaded)
          if (isNaN(this.art.player.loaded) || this.art.player.loaded <= 0) {
            this.$toast.center('Network error, please refresh again.')
          }
        }, 15000)
      }
    },
    initData () {
      fetchAnimeDetail(this.mid).then(res => {
        if (!isEmpty(res.files)) {
          'title' in res === false && Object.defineProperty(res, 'title', Object.getOwnPropertyDescriptor(res, 'name'))
          delete res.name
          this.torrentInfo = res

          if (isEmpty(this.currentAnime)) {
            this.saveCurrentAnime(res)
          }
        } else {
          this.$toast.center('Resource Unavaiable')
        }
        this.showLoading = false
      }).catch(err => {
        this.showLoading = false
        process.env.NODE_ENV === 'development' ? (this.$toast.center(err.name + ' ' + err.message)) : this.$toast.center('Network error')
      })
    },
    loadVideo: function (index) {
      if (!isEmpty(this.torrentInfo.files[index]) && this.torrentInfo.files[index].type.includes('video')) {
        this.videoSource = `${this.$hostURL}/torrent/serve/${this.mid}/${index}`
        this.currentPlayingIndex = index
      } else {
        this.download(`${this.$hostURL}/torrent/serve/${this.mid}/${index}`)
      }
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
    },
    download (link) {
      let tempElem
      if (this.system === 'IOS') {
        this.$toast.center('Not allow to download on IOS')
      } else {
        try {
          tempElem = document.createElement('iframe')
          tempElem.src = link
          tempElem.style.display = 'none'
          document.body.appendChild(tempElem)
        } catch (e) {
          this.$toast.center('Failed to download')
        }
      }
    }
  },
  computed: {
    currentAnime: function () {
      return this.$store.getters.currentAnime || {}
    },
    shareURL: function () {
      return `${this.$hostURL}${this.$route.fullPath}`
    },
    ...mapGetters(['system'])
  },
  created () {
    this.mid = this.$route.params.mid
  },
  mounted () {
    this.initData()
  }

}
</script>

<style lang="scss" scoped>

  @-webkit-keyframes ellipsis {
    from {
      width: 2px;
    }
    to {
      width: 15px;
    }

  }

  @keyframes ellipsis {
    from {
      width: 2px;
    }
    to {
      width: 15px;
    }
  }

  @keyframes copyEffect {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  #anime-detail {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #f6f6f6;

    .icon {
      width: 24px;
      height: 24px;

      * {
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

      .basic-info, .video-info {
        width: 100%;
        padding: 16px;
        font-size: 16px;
        position: relative;

      }

      .video-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        &.beforePlay {
          position: absolute;
          left: -100%
        }
      }

      .artplayer-app {
        width: 65%;
        height: 340px;
        z-index: 999;

        video.safari-video {
          width: 100%;
          height: 100%;
        }
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

          &.active {
            p {
              color: #2e7cf1;
            }

            .line {
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

            .icon {
              cursor: pointer;

              margin-left: 15px;
              background-position: center;
              transition: background-color .8s;

              * {
                width: 100%;
                height: 100%;
                display: inline-block;
              }

              &:active {
                background-color: darken(#fff, 50%);
              }
            }

          }

          .line {
            width: calc(100% - 24px);
            height: 1px;
            border-bottom: 1px solid black;
          }

        }
      }

      .video-info {
        .tree-view {
          padding-left: 50px;
          @media (max-width: 960px) {
            padding-left: 10px;
          }
        }

        .loading {
          text-align: center;
          position: absolute;
          left: 45%;
          bottom: -50%;
          font-size: 18px;
          color: #aaa;

          &:after {
            overflow: hidden;
            display: inline-block;
            vertical-align: bottom;
            animation: ellipsis 2s infinite;
            -webkit-animation: ellipsis 2s infinite;
            content: "\2026"; /* ascii code for the ellipsis character */

          }
        }

        .file-info-wrapper {
          li:not(:first-child) {
            margin-top: 12px;
          }

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span:not(:first-child) {
              margin-left: 6px;
              margin-top: 3px;
            }

            .title {
              flex: 1;

              &:hover {
                cursor: pointer;
                text-decoration: underline;
                text-decoration-color: blue;
              }

              &.active {
                color: blue;
              }
            }

            .file-size {
              margin-left: 8px;
              color: #aaaaaa;
              @media(max-width: 960px) {
                display: none;
              }
            }
          }
        }
      }

    }
  }
</style>
