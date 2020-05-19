<template>
    <div id="tips"  @click="hide" v-show="rendered">
      <div class="box">
        <span>{{this.$lang.common.addToHomeScreen}}</span>
      </div>
      <span  class="close"></span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'addToHomeScreen',
  data () {
    return {
      rendered: false
    }
  },
  computed: {
    ...mapGetters(['system'])
  },
  created () {
    if (navigator.standalone) {
      // console.log('Launched: Installed (iOS)')
    } else if (matchMedia('(display-mode: standalone)').matches) {
      // console.log('Launched: Installed')
    } else {
      if (this.system === 'IOS') {
        this.show()
        setTimeout(() => { this.hide() }, 4000)
      }
    }
  },
  methods: {
    hide: function () {
      this.rendered = false
    },
    show: function () {
      this.rendered = true
    }
  }
}
</script>

<style scoped lang="scss">
  #tips{
    background: rgba(0,0,0,.7);
    border: 1px solid rgba(255,255,255,.1);
    bottom: 72px;
    bottom: calc(72px + constant(safe-area-inset-bottom));
    bottom: calc(72px + env(safe-area-inset-bottom));
    color: #fff;
    left: 50%;
    /*padding: 12px 24px 12px 12px;*/
    padding: .6rem 1.2rem .6rem .6rem;

    position: fixed;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      margin-left: -0.5em;
      bottom: -1em;
      left: 50%;
      box-sizing: border-box;

      border: .5em solid black;
      border-color: transparent transparent rgba(0, 0, 0, .7) rgba(0, 0, 0, .7);

      transform-origin: 0 0;
      transform: rotate(-45deg);
    }
      .box {
        /*font-size: 12px;*/
        font-size: .8rem;
        /*margin: 0 12px 0 12px;*/
        margin: 0 .6rem 0 .6rem;
        white-space: nowrap;
        position: relative;
      }

      .close {
        /*margin-bottom: 10px;*/
        margin-bottom: .6rem;
      }

      .close:before, .close:after {
        position: absolute;
        content: ' ';
        /*height: 12px;*/
        /*width: 2px;*/
        height: .7rem;
        width: .1rem;
        background-color: #FFFFFF;
        z-index: 9;
      }

      .close:before {
        transform: rotate(45deg);
      }

      .close:after {
        transform: rotate(-45deg);
      }
    }

</style>
