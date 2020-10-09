<template>
  <div>
    <!-- ElementUI 的有问题，iView 的没有问题 -->
    <InputNumber v-model="model.aegis.number" :editable="false"></InputNumber>
    <el-input-number v-model="model.aegis.number" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      model: {
        aegis: {
          // number: 10
        },
        price: {}
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      setTimeout(() => {
        // const defaultValue = {
        //   aegis: {
        //     a: 'a',
        //     b: 'b',
        //     c: 'c'
        //     // number: 10
        //   }
        // }
        // this.model = {
        //   ...defaultValue
        // }
        // 中间对象改变之后 ElementUI 就不行了
        this.model.aegis = {}
        this.model.aegis.number = 10
      }, 5000)
    },
    handleChange (v) {
      console.log(v)
    }
  }
}
</script>

<style lang="" scoped>
</style>
