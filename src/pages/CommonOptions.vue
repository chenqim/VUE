<template>
    <div>
        <!-- vue实例的4个常用选项 -->
        <div>原数据</div>
        数字1：{{ num1 }}<br>
        数字2：{{ num2 }}<br>
        数字3：{{ num3 }}<br>
        <hr class="mt20">
        <div class="mt20">增加过滤器后</div>
        数字1：{{ num1 | toInt }}<br>
        数字2：{{ num2 | toInt }}<br>
        数字3：{{ num3 | toInt }}<br>
        <hr class="mt20">
        <div class="mt20">computed计算属性求和</div>
        数字1：{{ num1 }}<br>
        数字2：{{ num2 }}<br>
        数字3：{{ num3 }}<br>
        和：{{ sum }}<br>
        <hr class="mt20">
        <div class="mt20">调用methods</div>
        数字：{{ num }} &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" @click="plus" size="small">加1</Button>
        <hr class="mt20">
        <div class="mt20">watch观察</div>
        F12 控制台查看打印日志
        <Button type="primary" @click="plus" size="small">改变</Button>
        <hr class="mt20">
    </div>
</template>
<script>
export default {
  name: 'CommonOptions',
  components: {
  },
  data () {
    return {
      num: 0,
      num1: 33.141,
      num2: 46.212,
      num3: 78.541
    }
  },
  filters: {
    toInt (value) {
      return parseInt(value)
    }
  },
  computed: {
    sum () {
      return this.num1 + this.num2 + this.num3
    }
  },
  watch: {
    num (newVal, oldVal) {
      console.log('数字发生了改变', 'new', newVal, 'old', oldVal)
    }
  },
  methods: {
    plus () {
      return this.num++
    }
  }
}
</script>
<style scoped>

</style>
