<template>
    <div>
        <h1>File upload demo</h1>
        <h3 class="mt20">原生的form表单上传</h3>
        <form action="http://localhost:8080/file/upload" class="mt20" method="post" enctype="multipart/form-data">
            <!-- name的值要与后台的一致 -->
            <input type="file" name="file" size="45"><br/><br/>
            <input type="submit" name="submit" value="提交" style="width: 64px;">
        </form>
        <h3 class="mt20">运用iview的upload组件上传</h3>
        <!-- upload组件的name默认值为file -->
        <Upload action="//localhost:8080/file/upload" class="mt20" :on-success="handleSuccess">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
    </div>
</template>
<script>
export default {
  name: 'UploadFile',
  components: {},
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    handleSuccess (response, file, fileList) {
      if (response === 'Upload Success!') {
        this.$Message.success('上传成功！')
      }
    }
  }
}
</script>
