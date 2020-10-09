<template>
  <div class="hello">
    <Row type="flex" align="middle" style="height: 100%;">
      <i-col span="24">
        <Card class="login" :padding="20">
          <h1 style="text-align: center;">登录</h1>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" style="width: 300px; margin: auto; margin-top: 20px;">
            <FormItem prop="user">
              <i-input type="text" v-model="formInline.user" placeholder="请输入账号" style="width: 300px;">
                <span slot="prepend">账号</span>
              </i-input>
            </FormItem>
            <FormItem prop="password">
              <i-input type="password" v-model="formInline.password" placeholder="请输入密码" style="width: 300px;">
                <span slot="prepend">密码</span>
              </i-input>
            </FormItem>
            <Form-item prop="isSuccess">
              <div id="TencentCaptcha" data-appid="2084525188" data-cbfn="callback" v-show="!formInline.isSuccess" >
                  <i-input v-model="pictureText" class="check" readonly></i-input>
              </div>
              <div v-show="formInline.isSuccess">
                <Button type="default" size="large" long icon="ios-checkmark">验证成功</Button>
              </div>
            </Form-item>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formInline: {
        user: '',
        password: '',
        isSuccess: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度至少位6个字符', trigger: 'blur' }
        ],
        isSuccess: [
          { required: true, type: 'string', message: '请进行图片验证' }
        ]
      },
      pictureText: '点我进行图片验证'
    }
  },
  created () {
    // 验证码的回调函数
    window.callback = response => {
      // response（未通过验证）= {ret: 1, ticket: null}
      // response（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
      if (response.ret === 0) {
        this.formInline.isSuccess = 'true'
        this.$refs['formInline'].validate()
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.formInline.user === 'admin' && this.formInline.password === '111111') {
            this.$Message.success('登录成功!')
            this.$router.push('/my/first')
          } else {
            this.$Message.error('登录失败!')
            this.formInline.isSuccess = ''
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello {
    background: url('../image/login-background3.jpg') no-repeat fixed center;
    background-size: 100% 100%;
    height: 100%;
  }
  .login {
    height: 320px;
    width: 400px;
    margin: 0 auto;
  }
  .check .ivu-input {
    cursor: pointer;
    text-align: center;
  }
</style>
