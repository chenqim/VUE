<template>
  <div>
    <m-input-number :max="50" :min="5" :step="5" v-model="value" @on-change="onChange"></m-input-number>
    <br>
    <button @click="get">huoqu</button>
    <br>
    <br>
    <a href="">这是一个a标签</a>
  </div>
</template>

<script>
import MInputNumber from '../components/MInputNumber'
export default {
  name: '',
  components: {
    MInputNumber
  },
  data () {
    return {
      value: 30
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
    },
    get () {
      console.log(this.value)
    }
  }
}
</script>

<style lang="" scoped>
</style>
