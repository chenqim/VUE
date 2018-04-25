<template>
    <div>
        <Row>
            <i-col span="5">
                <Menu :theme="theme3" :active-name="activeName" @on-select="routerTo">
                    <MenuGroup title="内容管理">
                        <menu-item name="/my/first">
                            <Icon type="document-text"></Icon>
                            子组件自定义v-model
                        </menu-item>
                        <menu-item name="/my/second">
                            <Icon type="chatbubbles"></Icon>
                            父组件动态传值到子组件
                        </menu-item>
                    </MenuGroup>
                    <MenuGroup title="统计分析">
                        <menu-item name="/my/common-options">
                            <Icon type="heart"></Icon>
                            vue实例的4个常用选项
                        </menu-item>
                        <menu-item name="4">
                            <Icon type="heart-broken"></Icon>
                            流失用户
                        </menu-item>
                    </MenuGroup>
                </Menu>
            </i-col>
            <i-col span="19" style="padding-top: 50px;">
                <router-view></router-view>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      theme3: 'light',
      activeName: ''
    }
  },
  created () {
    this.activeName = this.$route.path
  },
  methods: {
    routerTo (name) {
      this.$router.push(name)
    }
  }
}
</script>
