<template>
  <div id="kindle">
    <!--  <head-top head-title="Kindle sync" class="nav-bar"-->
    <!--            :is-transparent="false" theme="light">-->
    <!--    <section class="fake-goback" slot='fake-goback' @click="goback">-->
    <!--      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">-->
    <!--        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>-->
    <!--      </svg>-->
    <!--    </section>-->
    <!--  </head-top>-->
    <section class="panel">
      <header class="item title-bar">
        <!--      <div class="title left ">Kindle sync</div>-->
        <!--      <div class="icon right">-->
        <!--        <svg class="close" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">-->
        <!--          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>-->
        <!--        </svg>-->
        <!--      </div>-->
        <div class="cancel description">cancel</div>
        <div class="title description">Kindle Sync</div>
        <div class="confirm description">Send</div>
      </header>

      <section class="main">
        <section>
          <p class="description tips">Push To Kindle Settings</p>
          <div class="item">
            <div class="title left">Send to</div>
            <div class="title right" style="color: #aaaaaa">Kindle</div>
          </div>
          <div class="item">
            <div class="title left" style="color: blue;">Kindle Email Address</div>
            <div class="title right email" style="color: #aaaaaa">
              <input type="email" class="user-email-address"
                     v-model="email"
                     placeholder="name@example.com"
              >
            </div>
          </div>
          <div class="item">
            <div class="title left">Send to</div>
            <div class="title right" style="color: #aaaaaa">Kindle</div>
          </div>

        </section>
        <section>
          <p class="description tips">{{$lang.bookPage.tips}}</p>
          <header class="description card">
            <p>{{this.$lang.bookPage.sendToKindleDescription}}</p>
          </header>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
// import headTop from '../header/headTop'
export default {
  name: 'kindle',
  data () {
    return {
      email: null
    }
  },
  methods: {
    goback () {
      this.$emit('goback')
    }
  }

}
</script>

<style scoped lang="scss">
  #kindle {
    width: 312px;
    height: 632px;
    position: absolute;
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

          &.email {
            padding-right: 0;
          }
        }

        .left {
          flex-grow: 1;
        }

        .icon {
          width: 25%;
          height: 100%;

          svg {
            width: 24px;
            height: 24px;
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
        .tips {
          font-size: .6rem;
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
      .nav-bar {
        display: none;
      }
      .description, .left, .right {
        font-size: 12px;
        padding: 16px 12px;
      }
      .tips {
        font-size: 12px;
      }

      .main {
        margin-top: 4px;
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
