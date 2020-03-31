<template>
  <div>
    <div class="round" @click.stop="isChecked = !isChecked">
      <input type="checkbox" :id='id' :value="value" v-model="isChecked"

      />
      <label for="test"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roundCheckbox',
  data () {
    return {
      isChecked: false
    }
  },
  props: ['id', 'value', 'label']
}
</script>

<style scoped>
.round {
  position: relative;
}

.round label {
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 1rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 1rem;
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
