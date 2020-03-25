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
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700");
@import url("https://fonts.googleapis.com/css?family=Catamaran:400,800");
@keyframes easyoutelastic {
  0% {
    transform: rotateX(0);
  }
  9% {
    transform: rotateX(210deg);
  }
  13% {
    transform: rotateX(150deg);
  }
  16% {
    transform: rotateX(200deg);
  }
  18% {
    transform: rotateX(170deg);
  }
  20% {
    transform: rotateX(180deg);
  }
  60% {
    transform: rotateX(180deg);
  }
  80% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(0);
  }
}

@keyframes rotatedrop {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(30deg);
  }
  15% {
    transform: rotate(90deg);
  }
  70% {
    transform: rotate(90deg);
  }
  80% {
    transform: rotate(0);
  }
  100% {
    transform: rotateX(0);
  }
}
.container {
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  .main {
    padding-top: 1.95rem;
    height: 100%;
    width: 100%;
    position: relative;
    .image-container {
      position: absolute;
      top: 10%;
      left: 50%;
      width: 60%;
      height: 35%;
      transform: translateX(-50%);
      max-width: 512px;
      max-height: 777px;
      @media (min-width: 768px) and (min-height: 1024px) {
        height: 50%;
        top: 15%;
      }
      @media (max-width: 768px){
            max-width: 225px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tips {
      position: absolute;
      top: 45%;
      text-align: center;
      font-size: 4.8rem;
      font-family: "Catamaran", sans-serif;
      font-weight: 800;
      margin: 20px 15px;
      left:17%;
        @media (min-height:1024px){
            top: 65%;
        }
        @media(min-width: 756px) and (max-width:1024px){
            left:12%;
            font-size: 274px;
        }
        @media(min-width: 1024px){
            left:25%;
        }

      span {
        display: inline-block;
        line-height: 0.7;
        position: relative;
        color: #ffb485;
        span {
          display: inline-block;
          position: relative;
        }
      }
      span:nth-of-type(1) {
        perspective: 1000px;
        perspective-origin: 500% 50%;
        color: #f0e395;
        span {
          transform-origin: 50% 100% 0px;
          transform: rotateX(0);
          animation: easyoutelastic 8s infinite;
        }
      }

      span:nth-of-type(3) {
        perspective: none;
        perspective-origin: 50% 50%;
        color: #d15c95;
        span {
          transform-origin: 100% 100% 0px;
          transform: rotate(0deg);
          animation: rotatedrop 8s infinite;
        }
      }
    }
  }
}
</style>
