<template>
  <div class="toggle_container" :class="{isTurnOn:turnOn}">
<!--    <transition name="switch">-->
<!--   <div class="cover" v-show="turnOn"></div>-->
<!--    </transition>-->
    <div class="circle" :class="{circleActive:turnOn}" @click="turnOnOff" >
    </div>


  </div>
</template>

<script>
    export default {
        name: "switchButton",
        data(){
          return{
            turnOn:false,
          }
        },
      methods:{
          turnOnOff(){
            this.turnOn = !this.turnOn;
            this.$emit('toggleCallback',this.turnOn);
          }
      }
    }
</script>

<style lang="scss" scoped>

    .toggle_container{
      background-color: rgba(128,128,128,.2);
      border-radius: 1rem;
      cursor: pointer;
      display: inline-block;
      height: 1.5rem;
      position: relative;
      transition: all .2s ease-out;
      width: 3rem;
        .circle{
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 1px 2px 6px -1px rgba(0,0,0,.3);
          height: 1.3rem;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 1.3rem;
          left: 5%;
        }
        .circleActive{
          left: 53%;
        }

    }
  .isTurnOn{
    background-color: #fbc308;
  }
</style>
