<template>
  <div class="container">
    <head-top
      show-operator="true"
      go-back="true"
      head-title="404"
      header-position="fixed"
      theme="light"
    ></head-top>
    <section class="main">
      <div class="image-container">
        <img src="../../assets/images/akarin.png" />
      </div>
      <div class="tips">
          <p>404 not found</p>
      </div>
    </section>
  </div>
</template>

<script>
import headTop from '@/components/header/headTop'
export default {
  components: { headTop }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  .main{
      padding-top: 1.95rem;
      height: 100%;
      width: 100%;
      position: relative;
      .image-container{
          position: absolute;
          top: 10%;
          left: 50%;
          width:50%;
          height:33%;
          transform: translateX(-50%);
          max-width: 512px;
          max-height: 777px;
          @media (min-width:1024px) and (min-height:1024px){
              height:50%;
              top:15%;
          }

          img{
              width: 100%;
              height: 100%;
          }

      }
    .tips{
        position: absolute;
        top: 45%;
        left:30%;
        @media (min-height:1024px){
            top:70%;
        }
        p{
            color: #999;
            font-size: .85rem;
            font-weight: .85rem;
        }
    }

  }
}
</style>
