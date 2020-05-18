<template>
    <div id="tips" v-if="rendered">
      <div class="box">
        <span>Add to Home Screen</span>
      </div>
      <span @click="rendered=false" class="close"></span>

    </div>
</template>

<script>
export default {
  name: 'addToHomeScreen',
  data () {
    return {
      rendered: true
    }
  }
}
</script>

<style scoped lang="scss">
  #tips{
    background: rgba(0,0,0,.7);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 25px;
    bottom: 72px;
    bottom: calc(72px + constant(safe-area-inset-bottom));
    bottom: calc(72px + env(safe-area-inset-bottom));
    color: #fff;
    left: 50%;
    padding: 12px 24px 12px;

    position: fixed;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .box{
      font-size: 12px;
      margin: 0 12px 0 12px;
      white-space: nowrap;
      position: relative;
    }
    .close{
      margin-bottom: 10px;
    }
    .close:before, .close:after {
      position: absolute;
      content: ' ';
      height: 12px;
      width: 2px;
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
