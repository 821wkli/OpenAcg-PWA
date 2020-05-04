<template>
<div id="pokeball"></div>
</template>

<script>
export default {
  name: 'pokeBall',
  props: {
    where: {
      type: String,
      default: 'bottom'
    }
  },
  computed: {
    position: function () {
      var ret = ''
      switch (this.where) {
        case 'bottom': ret = '5%'; break
        case 'center': ret = '50%'; break
        case 'top':ret = '75%'; break
        default:
          ret = '5%'
      }
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
  $bg: #68dbea;
  $red: #d11c34;
  $blue: #24a2f7;
  $gray: #7e7e71;
  $purple: #b05eea;
  $white: #fefefe;
  $black: #000;

  * {
    box-sizing: border-box;
    &::before, &::after {
      box-sizing: border-box;
    }
  }

  #pokeball {
    position: relative;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: radial-gradient(circle at center center, $white 10px, $black 0, $black 33%, transparent 0), linear-gradient(90deg, transparent 46%, $black 0, $black 53.5%, transparent 0);
    box-shadow: 0 0 0 4px #62c4d4;
    transform-style: preserve-3d;
    animation: spin 4000ms infinite;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, $red 50%, $white 50%);
      transform: translate3d(0, 0, -1em);
      clip-path: polygon(50% 0%, 50% 50%, 50% 120%, 50% 120%, 50% 100%, 50% 50%, 50% -20%, 50% -20%);
      animation: pathShape 2000ms cubic-bezier(0, 0, 1, 1) infinite, colorChange 8000ms cubic-bezier(0, 0, 1, 1) infinite;
    }
    &::after {
      position: absolute;
      content: '';
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: #62c4d4;
      transform: translate3d(0, 0, -2em);
    }
  }

  @keyframes colorChange {
    24% {
      background: linear-gradient(90deg, $red 50%, $white 50%);
    }

    25%, 49% {
      background: linear-gradient(90deg, $blue 50%, $white 50%);
    }

    50%, 74% {
      background: linear-gradient(90deg, $white 50%, $gray 50%);
    }

    75%, 99% {
      background: linear-gradient(90deg, $white 50%, $purple 50%);
    }
  }

  @keyframes pathShape {
    25% {
      clip-path: polygon(50% -20%, 50% 50%, 120% 50%, 100% 100%, 50% 120%, 50% 50%, -25% 50%, 0% 0%);
    }

    50% {
      clip-path: polygon(50% -50%, 50% 50%, 60% -90%, 180% 100%, 50% 100%, 50% 50%, 40% 180%, -80% 100%);
    }

    85% {
      clip-path: polygon(50% -20%, 50% 50%, 120% 50%, 100% 100%, 50% 120%, 50% 50%, -25% 50%, 0% 0%);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(-0.1turn);
      animation-timing-function: cubic-bezier(0.15, 0, 1, 1);
    }

    24%, 25% {
      transform: rotate(0.59turn);
      animation-timing-function: cubic-bezier(0.7, 0, 1, 1);
    }

    50% {
      transform: rotate(1.16turn);
      animation-timing-function: cubic-bezier(0.15, 0, 1, 1);
    }

    74%, 75% {
      transform: rotate(1.84turn);
      animation-timing-function: cubic-bezier(0.7, 0, 1, 1);
    }

    100% {
      transform: rotate(2.4turn);
      animation-timing-function: cubic-bezier(0.15, 0, 1, 1);
    }
  }
</style>
