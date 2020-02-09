<template>
  <vue-content-loading :width="300" :height="80" :primary="'#'+'bdc3c7'" :secondary="'#'+'95a5a6'">
    <rect x="10" y="13" rx="4" ry="4" width="100" height="100"/>
    <rect x="120" y="13" rx="4" ry="4" width="50" height="10" />
    <rect x="120" y="36" rx="4" ry="4" width="100" height="10" />
    <rect x="120" y="58" rx="4" ry="4" width="150" height="10" />
<!--    <rect x="130" y="78" rx="4" ry="4" width="150" height="10" />-->
<!--    <rect x="130" y="98" rx="4" ry="4" width="150" height="10" />-->
  </vue-content-loading>
</template>

<script>
  import VueContentLoading from 'vue-content-loading';
    export default {
        name: "listSkeleton",
      components: {
        VueContentLoading,
      },
    }
</script>

<style lang="scss"scoped>
  .container{

  }
</style>
