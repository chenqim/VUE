<template>
    <div>
        <Row>
            <i-col span="3">
                <Row><Button type="ghost" @click="addGroup" class="add-btn">+添加分组</Button></Row>
                <Row v-for="(item, index) in groupList" :key="index" class="mt20">
                    <span @click="chooseGroup(item, index)" :class="{'farm-group-btn-active': index === active, 'farm-group-btn': true}">{{ item.name }}</span>
                </Row>
            </i-col>
        </Row>
        <Modal v-model="modal2" width="560" title="添加分组" :mask-closable="false">
            <Form ref="groupInfo" :model="groupInfo" label-position="right" :label-width="150" :rules="ruleInline3" class="mt20">
                <Form-item prop="name" label="分组名称">
                    <Input v-model="groupInfo.name" :maxlength="10" style="width: 300px;" />
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancel2">取消</Button>
                <Button type="primary" @click="ok2">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
  name: 'AddClass',
  components: {

  },
  data () {
    return {
      active: 0,
      modal2: false,
      groupInfo: {
        name: ''
      },
      ruleInline3: {
        name: [
          { required: true, message: '请填写分组名称', tiger: blur }
        ]
      },
      groupList: [
        {
          id: -1,
          name: '全部种养户'
        },
        {
          id: 1,
          name: '种养户一组'
        },
        {
          id: 2,
          name: '种养户二组'
        },
        {
          id: 3,
          name: '种养户三组'
        },
        {
          id: 4,
          name: '种养户四组'
        },
        {
          id: 5,
          name: '种养户五组'
        }
      ]
    }
  },
  methods: {
    addGroup () {
      // 重置表单
      this.$refs['groupInfo'].resetFields()
      this.modal2 = true
    },
    chooseGroup (item, index) {
      this.active = index
    },
    cancel2 () {
      this.modal2 = false
    },
    ok2 () {
      // 表单验证
      this.$refs['groupInfo'].validate((valid) => {
        if (valid) {
          this.groupList.push({
            id: this.groupList.length,
            name: this.groupInfo.name
          })
          this.modal2 = false
        }
      })
    }
  }
}
</script>
<style scoped>
.farm-group-btn {
    color: #9B9B9B;
    cursor: pointer;
    font-family: 'PingFangSC-Medium';
}
.farm-group-btn-active {
    color: #56B07D;
    cursor: pointer;
    font-family: 'PingFangSC-Medium';
}
.add-btn {
    color: #56B07D;
    border-color: #56B07D;
}
</style>
