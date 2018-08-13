<template>
    <div>
      <Input v-model="success" style="width: 200px;" />
      <Button @click="start" class="ml20">开始</Button>
      <div class="mt20" v-html="text"></div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Promise',
  data () {
    return {
      success: '',
      text: ''
    }
  },
  methods: {
    testPromise () {
      return new Promise((resolve, reject) => {
        if (this.success) {
          // 模拟异步请求
          this.text = '模拟异步请求数据中...'
          setTimeout(() => {
            this.text = '请求完成...<br/>'
            resolve(this.success)
          }, 5000)
        } else {
          reject('error')
        }
      })
    },
    start () {
      this.testPromise().then((success) => {
        this.text += '结果为：' + success
      }).catch((error) => {
        this.text = '请求出错...'
      })
    }
  }
}
</script>
