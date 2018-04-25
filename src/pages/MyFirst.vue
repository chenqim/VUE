<template>
    <div>
        <!-- 自定义组件v-model -->
        <my-first-component v-model="collectShow"></my-first-component>
        <Row><span>组件v-model绑定值：</span>{{ collectShow }}</Row>
        <Row class="mt20"><Button type="primary" size="large" @click="add">组件自定义v-model</Button></Row>
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
      collectShow: false,
      message: ''
    }
  },
  methods: {
    add () {
      this.collectShow = true
    }
  }
}
</script>
<style scoped>

</style>
