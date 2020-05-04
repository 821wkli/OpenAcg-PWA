<template>
  <div>
    <div class="round" @click.stop="setCheck">
      <input type="checkbox" :id='id' :value="value" v-model="isChecked"

      />
      <label for="test"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roundCheckbox',
  watch: {
    isChecked: function (newIsChecked) {
      newIsChecked ? this.onChecked(this.value) : this.onUnchecked(this.value)
    },
    isCheckedAll: function (newIsCheckedAll) {
      newIsCheckedAll ? this.isChecked = true : this.isChecked = false
    }
  },
  data () {
    return {
      isChecked: false
    }
  },
  computed: {
    isCheckedAll: function () {
      return this.$store.getters.isCheckedAll
    }
  },
  methods: {
    onChecked: function () {
      this.$emit('onChecked', this.value)
    },
    onUnchecked: function () {
      this.$emit('onUnchecked', this.value)
    },
    setCheck: function () {
      this.isChecked = !this.isChecked
    }
  },
  props: ['id', 'value', 'label']
}
</script>

<style lang="scss" scoped>
.round {
  position: relative;
}

.round label {
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
  @media (min-width: 960px){
    width: 66px;
    height: 66px;
  }
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: .5rem;
  @media (min-width: 960px){
    border: 4px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 14px;
    left: 13px;
    opacity: 0;
    position: absolute;
    top: 20px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: .6rem;
  }
  /*border: 2px solid #fff;*/
  /*border-top: none;*/
  /*border-right: none;*/
  /*content: "";*/
  /*height: .1rem;*/
  /*left: .25rem;*/
  /*opacity: 0;*/
  /*position: absolute;*/
  /*top: .4rem;*/
  /*-webkit-transform: rotate(-45deg);*/
  /*transform: rotate(-45deg);*/
  /*width: 0.55rem;*/
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

</style>
