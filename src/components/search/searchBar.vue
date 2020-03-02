<template>
  <div>
    <div class="search-bar">
      <div class="search-box">
        <svg class="search-icon"
             width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
        </svg>
        <input type="search" class="search-input"
               :value="value"
               @input="$emit('input', $event.target.value)"
               autocomplete="off"
               :placeholder="placeholder"
               @focus="doFocus"
               @blur="doBlur"
               @keyup.enter="search"
               :style="{borderRadius:shape==='round'?'.512rem':'.17067rem'}"

        >
        <i v-show="showClearIcon" @click="clearText" class="clear-icon"></i>
      </div>
      <div class="search-cancel" @click="cancel"><p>{{cancelText}}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  computed: {
    showClearIcon: function () {
      return this.value !== '' && this.value !== undefined
    }
  },
  methods: {
    doFocus: function () {
      this.$emit('doFocus')
    },
    doBlur: function () {
      this.$emit('doBlur')
    },
    search: function () {
      this.$emit('search')
    },
    cancel: function () {
      this.$emit('cancel')
    },
    clearText: function () {
      this.$emit('clear')
    }
  },
  props: {
    value: {
      type: String
    },
    cancelText: {
      type: String
    },
    background: {
      type: String,
      default: '#f2f2f2'
    },
    shape: {
      type: String,
      default: 'round'
    },
    placeholder: {
      tyoe: String,
      default: 'Input text here'
    },
    inputAlign: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .search-bar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 1.8rem;
    padding: 0 3.33%;
    background-color: #fff;
    z-index: 1;

    .search-box {
      position: relative;
      width: 88.2%;
      height: 1.28rem;
      margin-top: .29867rem;
      float: left;
    }

    .search-icon {
      position: absolute;
      width: .7rem;
      height: .7rem;
      top: .35067rem;
      left: .312rem;
      fill: #aaa;
    }

    .search-input {
      display: block;
      width: 100%;
      height: 100%;
      padding-left: 1.70667rem;
      box-sizing: border-box;
      font-size: .55467rem;
      border: .02133rem solid #e7e7e7;
      border-radius: .17067rem;
      background-color: #f4f4f4;
      color: #999999;
    }

    .search-cancel {
      float: right;
      position: relative;
      width: 10%;
      margin-top: .7rem;

      p {
        text-align: right;
        @include sc(.6rem, #fb7299);
        line-height: .59733rem;
      }
    }

    .clear-icon {
      position: absolute;
      width: 1.28rem;
      height: 1.28rem;
      top: 0;
      right: 0;
      background: url(//s1.hdslb.com/bfs/static/mult/images/search-close.png) no-repeat;
      background-size: .59733rem .59733rem;
      background-position: 46.7% 46.7%;
    }
  }

</style>
