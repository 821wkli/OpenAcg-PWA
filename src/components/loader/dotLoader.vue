<template>
  <div class="loader" :style="{alignItems:dotPosition,height:height}">
    <span class="dot pulse one"></span>
    <span class="dot pulse two"></span>
    <span class="dot pulse three"></span>
  </div>
</template>

<script>
export default {
  name: 'dotLoader',
  props: {
    height: {
      type: String,
      default: '2rem'
    },
    dotPosition: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang="scss" scoped>
  $dot-size: .5rem;
  $dot-color: #1a1a1a;
  $bg-color: #fff;
  @keyframes pulse {
    from {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.25);

    }

    100% {
      opacity: 0.3;
      transform: scale(1);
    }
  }

  .loader {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .dot {
      display: block;
      width: $dot-size;
      height: $dot-size;
      margin: .2rem;
      border-radius: 50%;
      background-color: $dot-color;
      float: left;
    }

    .pulse {
      will-change: transform, opacity;
      animation: pulse 1.25s infinite ease;
    }

    .one {
      animation-delay: 250ms;
    }

    .two {
      animation-delay: 500ms;
    }

    .three {
      animation-delay: 750ms;
    }
  }
</style>
