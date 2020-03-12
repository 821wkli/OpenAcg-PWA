<template>
  <div id="translate">
    <head-top
      show-operator="true"
      go-back="true"
      head-title="OpenAcg translator"
      header-position="fixed"
    ></head-top>
    <section class="wrapper">
      <div class="source-wrapper">
        <textarea
          class="source-input"

          placeholder="Enter text here"
          v-model="sourceText"
          @focus="doFocus"
          @keyup.enter="translate"
          @keydown="autoResize"

        ></textarea>
         <svg @click="sourceText=''"
              class="close"  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
          </svg>
      </div>
      <div class="result-wrapper">
        <div class="result">
          <p>{{targetText}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/headTop'
export default {
  name: 'translate',
  components: { headTop },
  data () {
    return {
      sourceText: '',
      targetText: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    }
  },
  methods: {
    doFocus: function () {
      this.sourceText = ''
    },
    translate: function () {
      // console.log('trasnlate trigger')
    },
    autoResize: function (event) {
      const textArea = event.target
      setTimeout(() => {
        textArea.style.cssText = 'height:auto; padding:0'
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px'
      }, 0)
    }
  }

}
</script>

<style lang="scss" scoped>
#translate {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding-top: 1.95rem;
  .wrapper {
    padding: 0.8rem;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .source-wrapper {

      min-height: 30%;
      height: auto;
      margin-bottom: .8rem;
      position: relative;
      textarea {
        width: 90%;
      }
      .close{
        @include wh(1rem,1rem);
        position: absolute;
        top: 0.2rem;
        right:0;
      }
    }
    .result-wrapper {

      //  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
      min-height: 30%;
      .result {
        p {
          overflow-wrap: break-word;
          @include sc(1rem, $defaultColor);
        }
      }
    }
  }
}
</style>
