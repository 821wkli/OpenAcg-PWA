<template>
    <div>
    <div class="list-box" @touchstart.capture="touchStart"  @touchend.capture="touchEnd" @click="skip">
        <slot name='row'></slot>
    </div>
    <div class="delete" >删除</div>
</div>
</template>

<script>
export default {
  name: 'slideDelete',
  props: {
    itemIndex: {
      type: Number
    }
  },
  data () {
    return {
      startX: 0,
      endX: 0,
      isSliding: false
    }
  },
  methods: {
    // 跳转
    skip () {
      if (this.checkSlide()) {
        this.isSliding = false
      } else {
        alert('You click the slide!')
      }
    },
    // 滑动开始
    touchStart (e) {
      this.startX = e.touches[0].clientX
    },
    // 滑动结束
    touchEnd (e) {
      this.endX = e.changedTouches[0].clientX
      if (this.startX - this.endX > 30) {
        this.isSliding = true
      }
      if (this.startX - this.endX < -30) {
        this.isSliding = false
      }
      this.startX = 0
      this.endX = 0
      this.$emit('onSliding', this.isSliding, this.itemIndex)
    },
    // 判断当前是否有滑块处于滑动状态
    checkSlide () {
      return this.isSliding
    }

  }
}
</script>

<style scoped>
    .list-box{
       width: 100%;
    }

    .list-item .delete{
        width: 2rem;
        height: 1.6rem;
        background: #ff4949;
        font-size: 17px;
        color: #fff;
        text-align: center;
        line-height: 1.6rem;
        position: absolute;
        top:0;
        right: -2rem;
    }
</style>
