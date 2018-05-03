<template>
    <div>
        <Input v-if="isEdit" v-model="title" @on-blur="saveTitle" style="width: 300px;" ref="title" />
        <span v-else>{{title}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Icon type="edit" @click.native="editTitle"></Icon>
    </div>
</template>
<script>
export default {
  name: 'VueNextTick',
  components: {

  },
  data () {
    return {
      isEdit: false,
      title: '这里是可以编辑的'
    }
  },
  methods: {
    editTitle () {
      this.isEdit = true
      // 如果直接调用this.$refs.title.focus()则会报title未定义
      // 因为数据层更新了DOM还没有更新所以获取不到
      // 类似于setTimeout(fn, 3000)的功能
      this.$nextTick(() => {
        this.$refs.title.focus()
      })
    },
    saveTitle () {
      this.isEdit = false
      this.$Message.success('修改成功！')
    }
  }
}
</script>
<style scoped>

</style>
