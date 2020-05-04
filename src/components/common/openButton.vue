<template>

  <button
    class="openBtn"
    :disabled="disabled"
    :class="classes"
    :type="buttonType"
    @click.stop="onClick"
  >
    <slot name="icon"></slot>
    <span>{{text}}</span>

  </button>

</template>

<script>
export default {
  name: 'openButton',
  data () {
    return {
      noBorder: true
    }
  },
  methods: {
    onClick: function () {
      !this.disabled && this.$emit('onClick')
    }
  },
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    buttonType: String
  },
  computed: {
    classes: function () {
      const that = this
      return [
        {
          disabled: !that.plain && that.disabled,
          'plain-disabled': that.plain && that.disabled,
          mini: that.mini,
          'openBtn-no-border': that.noBorder
        },
        !that.plain ? `${that.type}` : '',
        that.plain ? `plain-${that.type}` : ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .openBtn{
    position: relative;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* -webkit-transform: scale(0.5); */
    /* transform: scale(0.5); */
    -webkit-transform-origin: 0 0;
    /* transform-origin: 0 0; */
    box-sizing: border-box;
    border-radius: 10px;
    /* position: relative; */
    /* display: block; */
    /* margin-left: auto; */
    /* margin-right: auto; */
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: .8rem;
    text-align: center;
    text-decoration: none;
    line-height: 1.8rem;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
  }

  .default {
    background-color: #ffffff;
    border: none;
    span{
      color: #000000;
    }
    &:not(.disabled):visited {
      color: #000000;
    }
    &:not(.disabled):active {
      color: rgba(0,0,0,.6);;
      background-color:  #DEDEDE;
    }
  }
  .primary {
    background-color:  #1AAD19;

    &:not(.disabled){
      span{
        color: #FFFFFF;
      }
    }
    &:not(.disabled):active {
      background-color: #179B16;
      span{
        color:rgba(255,255,255,.6);
      }
    }
  }

  .warn {
    background-color: #E64340;
    &:not(.disabled){
      span{
        color:  #FFFFFF;
      }
    }
    &:not(.disabled):active {
      background-color:  #CE3C39;
      span{
        color: rgba(255,255,255,.6);
      }
    }
  }

  .disabled {
    span{
      color: rgba(255,255,255,.6);
    }

    &.default {
      background-color:  #F7F7F7;
      span{
        color: rgba(0,0,0,.3);
      }
    }
    &.primary {
      background-color: #9ED99D;
    }
    &.warn {
      background-color: #EC8B89;
    }
  }

  .openBtn-no-border:after{
    display: none;
  }
</style>
