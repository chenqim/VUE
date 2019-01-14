<template>
    <div>
        <!-- 自定义组件v-model -->
        <my-first-component v-model="collectShow"></my-first-component>
        <Row><span>组件v-model绑定值：</span>{{ collectShow }}</Row>
        <Row class="mt20"><Button type="primary" size="large" @click="add">组件自定义v-model</Button></Row>
        <Row class="mt20" type="flex" align="middle">
          <i-col span="8">
            <Select v-model="site">
              <Option value="谷歌 http://www.google.com">谷歌 http://www.google.com</Option>
              <Option value="百度 http://www.baidu.co">百度 http://www.baidu.com</Option>
              <Option value="网易 http://www.163.com">网易 http://www.163.com</Option>
            </Select>
          </i-col>
          <i-col span="8" offset="1">
            <div>site：{{ site }}</div>
            <div>name：{{ name }}</div>
            <div>url：{{ url }}</div>
          </i-col>
        </Row>
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
      message: '',
      name: '谷歌',
      url: 'http://www.google.com'
    }
  },
  computed: {
    site: {
      // 页面初始化时会先执行一次get
      // 监视 data 中 name 和 url 的属性值，只有发生改变时，它们才会重新求值
      get () {
        console.log('get')
        return this.name + ' ' + this.url
      },
      // 监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据，类似于watch的功能
      set (newValue) {
        console.log('set')
        let names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
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
