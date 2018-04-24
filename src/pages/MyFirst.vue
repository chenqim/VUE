<template>
    <div>
        <Button type="primary" size="large" @click="add">新增</Button>
        <!-- 自定义组件v-model -->
        <my-first-component v-model="collectShow"></my-first-component>
    </div>
</template>
<script>
import MyFirstComponent from '../components/MyFirstComponent'
export default {
  name: 'MyFirst',
  components: {
    MyFirstComponent
  },
  data () {
    return {
      collectShow: false
    }
  },
  methods: {
    add () {
      this.collectShow = true
      this.$Message.info('click add')
    }
  }
}
</script>
<style scoped>

</style>
