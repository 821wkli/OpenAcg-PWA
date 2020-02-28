<template>
  <div>

    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    created() {

    },
    methods: {

    }
  }

</script>

<style lang="scss">
  @import 'src/style/common';

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s;
  }

  .router-fade-enter, .router-fade-leave-to {
    opacity: 0;
  }
</style>
