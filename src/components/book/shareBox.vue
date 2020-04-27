<template>
  <div class="share-box">
    <header>
      <span class="left">分享小說</span>
      <span class="right icon" @click.stop="onClose">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"/>
              </svg>
        </span>
    </header>
    <section class="content">
      <div class="content-box-wrapper">
        <textarea ref="contentBox" readonly v-model="shareDescription" class="content-box"></textarea>
      </div>
      <div class="share-icons">
          <span class="icon copy" @click.stop="copy">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-copy"/>
                      </svg>
          </span>
        <a class="icon telegram" :href="shareToSocialMedia('telegram')" rel="noopener noreferrer" target="_blank">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-telegram"/>
                      </svg>
          </a>
        <a class="icon twitter" :href="shareToSocialMedia('twitter')" rel="noopener noreferrer" target="_blank">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter"/>
                      </svg>
          </a>
        <a class="icon facebook" :href="shareToSocialMedia('facebook')" rel="noopener noreferrer" target="_blank">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook"/>
                      </svg>
          </a>
        <a class="icon whatsapp" :href="shareToSocialMedia('whatsapp')" rel="noopener noreferrer" target="_blank">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-whatsapp"/>
                      </svg>
          </a>

      </div>
    </section>
  </div>
</template>

<script>
import { isEmpty } from '../../utils/common'
import { mapGetters } from 'vuex'
export default {
  name: 'shareBox',
  props: {
    book: {
      type: Object
    }
  },
  computed: {
    shareDescription: function () {
      const suffix = `- 分享自 OpenAcg\n${this.$hostURL + this.$route.fullPath}`
      if (!isEmpty(this.book)) {
        return `${this.book.title}\n${this.book.author}|${this.book.publisher}\n${this.book.introduction}\n${suffix}`
      }
      return 'Loading ...'
    },
    ...mapGetters(['system'])
  },

  methods: {
    onClose: function () {
      this.$emit('onClose')
    },
    copy: function () {
      const textArea = this.$refs.contentBox
      try {
        if (this.system === 'IOS') {
          const oldReadOnly = textArea.readOnly
          const oldEditable = textArea.contentEditable
          const range = document.createRange()
          textArea.readOnly = false
          textArea.contentEditable = 'true'
          range.selectNodeContents(textArea)
          const s = window.getSelection()
          s.removeAllRanges()
          s.addRange(range)
          textArea.setSelectionRange(0, 9999)
          textArea.contentEditable = oldEditable
          textArea.readOnly = oldReadOnly
        } else {
          textArea.focus()
          textArea.select()
        }
        document.execCommand('copy')
        textArea.blur()
        this.$toast.center(this.$lang.common.copySucess)
      } catch (err) {
        this.$toast.center(this.$lang.common.copyFailed)
      }
    },
    shareToSocialMedia: function (mediaName) {
      let appLink = ''
      if (this.book !== null) {
        const description = encodeURIComponent(`${this.book.title}\n- 分享自 OpenAcg\n${this.$hostURL + this.$route.fullPath}`)
        const telegramPrefix = 'tg://msg_url?text='
        const whatsappPrefix = 'whatsapp://send?text='
        const twitterPrefix = 'https://twitter.com/intent/tweet?text='
        const facebookPrefix = 'href="https://www.facebook.com/sharer/sharer.php?u="'
        switch (mediaName) {
          case 'telegram': appLink = telegramPrefix + description; break
          case 'whatsapp' : appLink = whatsappPrefix + description; break
          case 'twitter': appLink = twitterPrefix + description; break
          case 'facebook' : appLink = facebookPrefix + this.$hostURL + this.$route.fullPath; break
          default:
            appLink = '#'
        }
      }
      return appLink
    }
  }
}
</script>

<style lang="scss" scoped>
  .share-box {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    max-width: 512px;
    margin: 0 1rem;
    background: #f6f6f6;
    border-radius: 4px;
    -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;

    header {
      padding: 0 1rem;
      background-color: #FFFFFF;
      height: 1.8rem;
      max-height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 24px;
      }

      .right {
        &.icon {
          width: 32px;
          height: 32px;

          svg {
            width: 100%;
            height: 100%;
          }
        }
      }

    }

    .content {
      flex-grow: 1;
      padding: 23px;

      .content-box-wrapper {
        height: 120px;
        font-size: 18px;
        padding: 8px;
      }

      .content-box {
        width: 100%;
        height: 100%;
        font-size: 16px;
        padding-left: 4px;
      }

      .share-icons {
        display: flex;
        margin-top: 12px;

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          margin-right: 10px;

          svg {
            width: 24px;
            height: 24px;
          }

          &.copy {
            background-color: #fff;;
          }

          &.telegram {
            background-color: #1296db;
          }

          &.twitter {
            background-color: #00aceb;
          }

          &.whatsapp {
            background-color: #25D366;
          }

          &.facebook {
            background-color: #4761a6;
          }

        }
      }

    }

  }
</style>
