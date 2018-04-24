<template>
  <!-- 收藏弹窗 -->
  <Modal v-model="collectModal">
    <p slot="header">收藏</p>
    <Form :model="collectForm" :label-width="80">
      <FormItem label="名字：">
        <Input v-model="collectForm.name" placeholder="请输入名称" />
      </FormItem>
      <FormItem label="分类：">
        <Select v-model="collectForm.classify">
          <Option value="0">默认</Option>
          <Option value="1">喜欢的</Option>
        </Select>
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'MyFirstComponent',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      collectForm: {
        name: '',
        classify: ''
      }
    }
  },
  created () {
  },
  computed: {
    collectModal: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
  }
}
</script>
