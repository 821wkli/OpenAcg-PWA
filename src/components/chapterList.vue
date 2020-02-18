<template>
<div class="container">
  <head-top :head-title="book.title"
            :is-transparent="false">
    <section class="fake-goback" slot='fake-goback'@click="goback">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
    </svg>
    </section>
  </head-top>
  <section class="chapter-list" v-if="currentVolumeChapters">
    <header>
    <h4>{{currentVolumeChapters.name}}</h4>
    </header>
    <ul class="chapter-list-ul">
      <li
        @click="$router.push('/reader/'+book.id+'?chapterid='+item.id)" class="chapter-list-li"
          v-for="item in currentVolumeChapters.chapters"
          :key="item.id"
      >
        <span>{{item.chapter_name}}</span>
      </li>
    </ul>
  </section>
  <ios-alert title="OpenAcg"
             body-content="Failed to access data due to network connection issue"
             v-show="showAlert"@ok="goback" @cancel="goback"
  ></ios-alert>
</div>
</template>

<script>
  import headTop from "./header/head";
  import {mapState,mapMutations} from 'vuex'
  import iosAlert from "./common/alert";
    export default {
        name: "chapterList",
      data(){
          return{
            showAlert:false
          }
      },
      components:{iosAlert, headTop},
      computed:{
          ...mapState(['book','currentVolumeChapters'])
      },

      methods:{

          goback(){
            this.$emit('goback')
          }
      },
      mounted() {
          if(!this.currentVolumeChapters|| !this.book){
            this.showAlert = true;
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';

  .container{

    position: absolute;
    top: 0;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    .fake-goback{
      left: 0.4rem;
      @include wh(0.6rem, 0.8rem);
      line-height: 2.2rem;
      margin-left: .4rem;
      fill: #33373d;;
    }
    header{
      /*height: 2rem;*/
      line-height: 2rem;
      padding-left: .4rem;
      background-color: #f5f5f5;
      h4{
        font-size: .8rem;
      }
    }
    .chapter-list-ul{
      padding-left: .4rem;
      padding-right: .4rem;
      li{
        line-height: 2rem;
        height: 2rem;
        @include sc(.65rem,$defaultColor);
        border-bottom: 1px solid #cccccc;
      }
    }
  }
</style>
