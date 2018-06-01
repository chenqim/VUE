<template>
    <div id="test">
        <Row>
            <i-col span="12">
                <img src="../../static/img/vue-lifecycle.jpg" style="width: 500px;">
            </i-col>
            <i-col span="12">
                <h1>name: {{ name }}</h1>
                <h2 ref="app">age: {{ age }} years old</h2>
                <Button type="primary" @click="updateName" class="mt20">update</Button>
                <Button type="primary" @click="destoryInstance" class="mt20">destroy</Button>
                <img src="../../static/img/destory.png" style="width: 500px;" class="mt20">
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'VueLifecycle',
  components: {

  },
  data () {
    return {
      name: 'sunnychen',
      age: 18
    }
  },
  beforeCreate () {
    // 创建之前
    console.log('---------- beforeCreate ----------')
    console.log('this', this)
    console.log('this.$data', this.$data)
    console.log('this.$el', this.$el)
  },
  created () {
    // 创建成功之后
    console.log('---------- created ----------')
    console.log('this', this)
    console.log('this.$data', this.$data)
    console.log('this.$el', this.$el)
  },
  beforeMount () {
    // 挂载之前
    console.log('---------- beforeMount ----------')
    console.log('this', this)
    console.log('this.$data', this.$data)
    console.log('this.$el', this.$el)
  },
  mounted () {
    // 挂载成功之后
    console.log('---------- mounted ----------')
    console.log('this', this)
    console.log('this.$data', this.$data)
    console.log('this.$el', this.$el)
  },
  beforeUpdate () {
    // 更新之前
    console.log('---------- beforeUpdate ----------')
    // 在更新视图之前beforeUpdate打印视图上的值，结果依然为原来的值，表明在此阶段，视图并未重新渲染更新
    let age = this.$refs.app.innerHTML
    console.log('age', age)
  },
  updated () {
    // 更新成功之后
    console.log('---------- updated ----------')
    // 打印的是更新后的值
    let age = this.$refs.app.innerHTML
    console.log('age', age)
  },
  beforeDestroy () {
    // 销毁之前
    console.log('---------- beforeDestroy ----------')
  },
  destroyed () {
    // 销毁成功之后
    console.log('---------- destroyed ----------')
    /*  销毁之前，修改name的值，可以成功修改视图，一旦调用实例的$destroy()方法销毁之后，
        实例与视图的关系解绑，再修改name的值，已于事无补，视图再也不会更新了，说明实例成功被销毁了。    */
  },
  methods: {
    // 模拟update操作
    updateName () {
      this.age += 1
    },
    // 模拟destory操作
    destoryInstance () {
      this.$destroy()
    }
  }
}
</script>
<style scoped>

</style>
