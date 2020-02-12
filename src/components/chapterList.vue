<template>
<div class="container">

</div>
</template>

<script>
    export default {
        name: "chapterList",
      props:['VolumeChapters']
    }
</script>

<style lang="scss" scoped>
  .container{
    position: absolute;
    top: 0;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 202;
  }
</style>
