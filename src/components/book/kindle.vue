<template>
<div id="kindle">
  <head-top head-title="Kindle sync"
            :is-transparent="false" theme="light">
    <section class="fake-goback" slot='fake-goback' @click="goback">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
      </svg>
    </section>
  </head-top>
  <section class="main">
    <header class="description card">
      <p>{{this.$lang.bookPage.sendToKindleDescription}}</p>
    </header>
  </section>
</div>
</template>

<script>
import headTop from '../header/headTop'
export default {
  name: 'kindle',
  components: { headTop },
  methods: {
    goback () {
      this.$emit('goback')
    }
  }

}
</script>

<style scoped lang="scss">
 #kindle{
   width: 100vw;
   height: 100vh;
   position: absolute;
   background-color: #f6f6f6;
   top: 0;
   left:0;
   z-index: 999;
   .fake-goback{
     left: 0.4rem;
     @include wh(0.6rem, 0.8rem);
     line-height: 2.2rem;
     margin-left: .4rem;
     fill: #33373d;;
   }
   .main{
     margin-top: 1.95rem;
     position: relative;
     .card{
       position: absolute;
       background-color: #ffffff;
       margin-top: .85rem;
     }
     .description{
       padding:.55rem .85rem;
       line-height: 1.3rem;
       font-size: .75rem;
       color: #aaaaaa;
     }
   }
 }
</style>
