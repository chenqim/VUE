<template>
  <div>
    <!-- <Input v-model="nameS" placeholder="请输入名称" style="width: 300px;" readonly /> -->
    <Input v-model="nameF" placeholder="请输入名称" style="width: 300px;" readonly />
    <Card class="mt20">
      <p slot="title">标题</p>
      内容
      <Row>
        <i-col span="12">
          <Button type="primary" @click="cl">Click me</Button>
        </i-col>
      </Row>
    </Card>
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
    cl () {
      console.log('111')
      console.log(this.$parent)
    }
  }
}
</script>
