<template>
    <div>
        <Row>
            <h1>ES6 js setTimeout()基础</h1>
            <code>
                this.b += '1 '<br/>
                let s = setTimeout(() => {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.b += '2 '<br/>
                }, 1000)<br/>
                this.b += '3 '<br/>
            </code>
            <Button @click="run" size="small" class="mt20">点击运行上面一段js代码</Button>
            <div class="mt20">{{ b }}</div>
        </Row>
        <Row class="mt20">
            <h1>ES6 js setInterval()基础</h1>
            <p class="mt20">点击按钮每 1 秒输出 "Hello"。</p>
            <Button @click="start" size="small" class="mt20" :disabled="disabled">开始</Button>
            <Button @click="stop" size="small" class="mt20">停止</Button>
            <div class="mt20">{{ a }}</div>
        </Row>
        <Row class="mt20">
            <h1>60s后重新获取验证码的demo</h1>
            <Button type="primary" @click="getCode" class="mt20" :disabled="codeDisabled">{{ text }}</Button>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'Interval',
  data () {
    return {
      a: '',
      b: '',
      id: 0,
      disabled: false,
      codeDisabled: false,
      text: '获取验证码'
    }
  },
  methods: {
    run () {
      this.b += '1 '
      // eslint-disable-next-line
      let s = setTimeout(() => {
        this.b += '2 '
      }, 1000)
      this.b += '3 '
    },
    start () {
      this.disabled = true
      this.id = setInterval(() => {
        this.a += 'Hello '
      }, 1000)
    },
    stop () {
      clearInterval(this.id)
    },
    getCode () {
      this.codeDisabled = true
      let time = 60
      let id = setInterval(() => {
        if (time === 0) {
          clearInterval(id)
          this.codeDisabled = false
          this.text = '重新获取'
        } else {
          this.text = time + 's后重新获取'
          time--
        }
      }, 1000)
    }
  }
}
</script>
