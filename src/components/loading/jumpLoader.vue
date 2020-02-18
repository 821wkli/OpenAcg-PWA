<template>
  <div >
    <div class="load_img">
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    beforeDestroy() {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin.scss';

  @keyframes load {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @-webkit-keyframes _2-IV75RwmVnY_l9Emg342c {
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  }

  @keyframes _2EfR_LScj4XaGuT-Rz3RVq {
    0% {
      background-position: 0
    }

    to {
      background-position: -1056px
    }
  }


  .load_img {
    -webkit-animation: _2-IV75RwmVnY_l9Emg342c .5s linear .5s forwards, _2EfR_LScj4XaGuT-Rz3RVq .8s steps(8) infinite;
    animation: _2-IV75RwmVnY_l9Emg342c .5s linear .5s forwards, _2EfR_LScj4XaGuT-Rz3RVq .8s steps(8) infinite;
    background: url(../../images/f5bouncer.png) 50% no-repeat;
    height: 266px;
    left: 50%;
    bottom: 5%;
    margin-left: -28px;
    opacity: 0;
    position: fixed;
    -webkit-transform: scale(.56481203);
    -ms-transform: scale(.56481203);
    transform: scale(.56481203);
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    width: 132px;
    z-index: 2
  }

</style>
