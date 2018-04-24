<template>
  <div>
    <Input v-model="name" placeholder="请输入名称" style="width: 300px;" />
  </div>
</template>

<script>
export default {
  name: 'MySecondComponent',
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  watch: {
    name: {
      handler (curVal, oldVal) {
        console.log('curVal', curVal, 'oldVal', oldVal)
        this.name = curVal
      },
      deep: true
    }
  },
  methods: {
  }
}
</script>
