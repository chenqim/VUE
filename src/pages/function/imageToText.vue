<template>
    <div>
        <h1>提取图片中的文字</h1>
        <!-- upload组件的name默认值为file -->
        <Upload action="//chenqim.xyz/imageToText/upload" class="mt20" :on-success="handleSuccess">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        <Input type="textarea" v-model="text" style="width: 80%; margin-top: 20px;" />
    </div>
</template>
<script>
export default {
  name: 'UploadFile',
  components: {},
  data () {
    return {
      text: ''
    }
  },
  created () {
  },
  methods: {
    handleSuccess (response, file, fileList) {
      this.text = ''
      this.$Message.success('上传成功！')
      this.text = response
    }
  }
}
</script>
