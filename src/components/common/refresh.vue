<template>
  <div class="refresh-btn lite-iconf" @click="refresh">
    <div class="lite-iconf-refresh" :class="{refreshRotate:isRefresh}"></div>
  </div>
</template>

<script>
export default {
  name: 'refresh',
  props: ['isRefresh'],
  methods: {
    refresh () {
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: litefont;
    src: url(../../assets/fonts/iconfont.eot);
    src: url(../../assets/fonts/iconfont.eot#iefix) format("embedded-opentype"), url(../../assets/fonts/iconfont.ttf) format("truetype"), url(../../assets/fonts/iconfont.woff) format("woff"), url(../../assets/images/iconfont.svg#icomoon) format("svg");
    font-weight: 400;
    font-style: normal
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotateX(0deg) rotate(-1turn);
      transform: rotateX(0deg) rotate(-1turn)
    }

    to {
      -webkit-transform: rotateX(0deg) rotate(0deg);
      transform: rotateX(0deg) rotate(0deg)
    }
  }

  .lite-iconf {
    font-family: litefont;
    font-size: 1.75rem;
    color: #fff
  }

  .refresh-btn {
    position: fixed;
    right: .75rem;
    bottom: 1rem;
    color: #30a3f4;
    font-size: 1.85rem;
    background: #fff;
    border-radius: 50%;
    border: .65625rem solid #fff;
    -webkit-box-shadow: 0 .125rem .8125rem 0 rgba(143, 152, 169, .24);
    box-shadow: 0 .125rem .8125rem 0 rgba(143, 152, 169, .24);
    cursor: pointer;

    .lite-iconf-refresh{
      @extend .refresh-btn;
      @extend .lite-iconf
    }
    .lite-iconf-refresh:before {
      content: "\E032"
    }

    .refreshRotate {
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 3s linear infinite
    }

  }
</style>
