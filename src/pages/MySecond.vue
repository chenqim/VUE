<template>
    <div>
        <Form :label-width="50">
            <Row>
                <i-col span="24">
                    <FormItem label="父组件">
                        <Input v-model="nameF" placeholder="请输入名称" style="width: 300px;" />
                    </FormItem>
                </i-col>
            </Row>
            <Row class="mt20">
                <i-col span="24">
                    <FormItem label="子组件">
                        <my-second-component :nameF="nameS"></my-second-component>
                    </FormItem>
                </i-col>
            </Row>
        </Form>
        <Button type="primary" class="mt20" size="large" @click="pass">父组件动态传值到子组件</Button>
    </div>
</template>
<script>
import MySecondComponent from '../components/MySecondComponent'
export default {
  name: 'MyFirst',
  components: {
    MySecondComponent
  },
  data () {
    return {
      nameF: '',
      nameS: ''
    }
  },
  methods: {
    pass () {
      this.nameS = this.nameF
    }
  }
}
</script>
<style scoped>

</style>
