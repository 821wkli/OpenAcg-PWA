<template>
  <div id="kindle">
    <section class="panel">
      <header class="item title-bar">
        <div @click="onCancel" class="cancel description">{{this.$lang.bookPage.cancel}}</div>
        <div class="title description">Kindle Sync</div>
        <div @click="onConfirm" class="confirm description">{{this.$lang.bookPage.send}}</div>
      </header>

      <section class="main">
        <section>
          <p class="description tips">{{this.$lang.bookPage.kindleSetting}}</p>
          <div class="item">
            <div class="title left">{{this.$lang.bookPage.ebookDevices}}</div>
            <div class="title right" style="color: #aaaaaa">Kindle</div>
          </div>
          <div class="item">
            <div class="title left" style="color: blue;">{{this.$lang.bookPage.receiveEmailAddress}}</div>
            <div class="title right email" style="color: #aaaaaa">
              <input type="email" class="user-email-address"
                     v-model="email"
                     placeholder="example@kindle.com"
              >
            </div>
          </div>
          <div class="item">
            <div class="title left">{{this.$lang.bookPage.senderEmailAddress}}</div>
            <div class="title right" style="color: #aaaaaa">openacg@gmx.com</div>
          </div>

        </section>
        <section class="book-info">
          <p class="description tips">{{this.$lang.bookPage.bookInfo}}</p>
          <div class="item">
            <div class="title left">{{this.$lang.bookPage.bookTitile}}</div>
            <div class="title right" style="color: #aaaaaa;max-width: 75%;">{{this.book.title}}</div>
          </div>
          <div class="item">
            <div class="title left">{{this.$lang.bookPage.bookAuthor}}</div>
            <div class="title right" style="color: #aaaaaa">{{this.book.author}}</div>
          </div>
          <div class="item volume" @click="showVolumeSelector = true">
            <div class="title left">{{this.$lang.bookPage.bookVolume}}</div>
            <div class="title right icon">
              <svg class="arrow" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">-->
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-r"></use>
              </svg>
            </div>
          </div>
        </section>

        <section>
          <p class="description tips">{{$lang.bookPage.tips}}</p>
          <header class="description card">
            <p>{{this.$lang.bookPage.sendToKindleDescription}}</p>
          </header>
        </section>
        <transition name="slide" mode="out-in">
          <section class="volume-details" v-show="showVolumeSelector">
            <div class="header">
              <p class="description tips">{{this.$lang.bookPage.volumeSelectionTips}}</p>
              <p class="volume-counter description tips">{{this.$lang.bookPage.volumeCounterDesc +
                this.volumeListToBeSent.length}}</p>
            </div>

            <div class="volumes">
              <div class="volume-name" :class="{active: volumeListToBeSent.includes(volume)}"
                   v-for="(volume, index) in this.book.volumes"
                   :key="index"
                   @click="addVolume(volume)"
              ><p>{{volume.name}}</p></div>
            </div>
          </section>
        </transition>
      </section>
    </section>
  </div>
</template>

<script>
  // import headTop from '../header/headTop'
  import {mapGetters, mapActions} from 'vuex'
  import {isEmpty} from '../../utils/common'

  export default {
    name: 'kindle',
    computed: {
      ...mapGetters(['book', 'kindleEmailAddress'])
    },
    data() {
      return {
        email: null,
        volumeListToBeSent: [],
        showVolumeSelector: false
      }
    },
    created() {
      this.volumeListToBeSent = [...this.book.volumes]
      this.email = this.kindleEmailAddress
    },
    methods: {
      ...mapActions(['saveKindleEmailAddress']),
      goback() {
        this.$emit('goback')
      },
      addVolume: function (obj) {
        if (this.volumeListToBeSent.includes(obj)) {
          const pos = this.volumeListToBeSent.indexOf(obj)
          if (pos !== -1) this.volumeListToBeSent.splice(pos, 1)
        } else {
          this.volumeListToBeSent.push(obj)
        }
      },
      onCancel: function () {
        this.showVolumeSelector ? this.showVolumeSelector = false : this.$emit('onCancel')
      },
      onConfirm: function () {
        // validate email
        this.email = this.email?.toLowerCase()
        const isValidEmail = !isEmpty(this.email?.trim()) && /^[a-z0-9](\.?[a-z0-9]){5,}@kindle\.com$$/.test(this.email)
        if (isValidEmail) {
          this.saveKindleEmailAddress(this.email)
          this.$emit('onConfirm', {email: this.email, volumes: this.volumeListToBeSent})
        } else {
          if (this.showVolumeSelector) {
            this.showVolumeSelector = false
          }
          this.$toast.center(this.$lang.bookPage.invalidEmailAddressMsg)
        }
      }
    }

  }
</script>

<style scoped lang="scss">

  #kindle {
    width: 312px;
    height: 632px;
    position: fixed;
    overflow-y: scroll;
    background-color: #f6f6f6;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-content: center;

    .panel {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;

      .title-bar {
        position: fixed;
        z-index: 10;
      }

      .cancel, .confirm {
        color: rgb(0, 122, 255);
        font-weight: 400;
      }

      .item {
        width: 100%;
        display: flex;
        background-color: #FFFFFF;
        border-bottom: 1px solid #e0e0e0;
        justify-content: space-between;

        .left, .right {
          display: flex;
          align-items: center;
        }

        .right {
          justify-content: flex-end;

        }

        .left {
          flex-grow: 1;
        }

        .icon {
          svg {
            fill: #737070;
          }
        }

      }

      .main {
        width: 100%;
        height: 100%;
        position: relative;

        .card {
          position: absolute;
          background-color: #ffffff;
          /*margin-top: .85rem;*/
          max-width: 100%;
          max-height: 100%;
        }

        .description {
          color: #aaaaaa;
        }

        .tips {
          color: #0c0c0c;
        }

        input {
          font-size: inherit;
          text-align: right;
        }

        .title, .tips {
          letter-spacing: 1px;
        }

        .volume-details {
          width: 100%;
          height: 100%;
          background-color: #f6f6f6;
          position: absolute;
          top: 0;

          .header {
            display: flex;
            justify-content: space-between;

            .volume-counter {
              color: #999999;
            }
          }

          .volumes {
            display: flex;
            flex-wrap: wrap;
            padding: 0 .85rem 0 .85rem;

            div {
              background-color: #FFFFFF;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              margin: 0 .2rem .2rem 0;
              flex: 1 0 21%; /* explanation below */
              p {
                display: inline-block;
                font-size: .6rem;
                padding: .55rem .55rem;
                white-space: nowrap;
                color: #aaaaaa;
              }

              &.active {
                background: #f7fb08bf !important;
                color: #000;
                z-index: 1;
              }
            }
          }

          @media (min-width: 1025px) {
            .volumes {
              padding: 16px 12px;

              div {
                margin: 0 4px 4px 0;

                p {
                  font-size: 12px;
                  padding: 12px 12px;
                }
              }

              .icon {
                width: .65rem;
                height: .65rem;

                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }

    @media(max-width: 1024px) {
      width: 100vw;
      height: 100vh;
      .left, .right, .description {
        padding: .55rem .85rem;
        font-size: .6rem;
      }
      .main {
        margin-top: 1.95rem;

        .tips {
          font-size: .6rem;
        }

        .email {
          padding-right: .8rem;
        }

        .icon {
          svg {
            width: .65rem;
            height: .65rem;
          }
        }
      }
    }
    @media(min-width: 1025px) {
      top: 50%;
      left: 50%;
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
      .item {
        max-height: 40px;
        height: 48px;
      }

      .description, .left, .right {
        font-size: 12px;
        padding: 16px 12px;
      }
      .tips {
        font-size: 12px;
      }

      .main {
        margin-top: 36px;

        .icon {
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }

    .fake-goback {
      left: 0.4rem;
      @include wh(0.6rem, 0.8rem);
      line-height: 2.2rem;
      margin-left: .4rem;
      fill: #33373d;;
    }
  }
</style>
