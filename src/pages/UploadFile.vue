<template>
    <div>
        <h2>File upload demo</h2>
        <form action="http://localhost:8080/file/upload"  method="post" enctype="multipart/form-data">
            <input type="file" name="filename" size="45"><br>
            <input type="submit" name="submit" value="submit">
        </form>
        <Upload action="//localhost:8080/file/upload">
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
    console.log('111')
  },
  methods: {}
}
</script>
