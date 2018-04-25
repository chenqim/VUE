<template>
  <div>
    <Input v-model="nameS" placeholder="请输入名称" style="width: 300px;" readonly />
  </div>
</template>

<script>
export default {
  name: 'MySecondComponent',
  props: {
    nameF: {
      type: String
    }
  },
  data () {
    return {
      nameS: ''
    }
  },
  created () {
  },
  watch: {
    nameF: {
      handler (curVal, oldVal) {
        console.log('curVal', curVal, 'oldVal', oldVal)
        this.nameS = curVal
      },
      deep: true
    }
  },
  methods: {
  }
}
</script>
