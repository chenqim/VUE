<template>
    <div>
        <Row>
            <i-col span="5">
                <Menu :theme="theme3" :active-name="activeName" @on-select="routerTo">
                    <MenuGroup title="父子组件相关">
                        <menu-item name="/my/first">
                            <Icon type="ios-nutrition"></Icon>
                            子组件自定义v-model
                        </menu-item>
                        <menu-item name="/my/second">
                            <Icon type="ios-nutrition"></Icon>
                            父组件动态传值到子组件
                        </menu-item>
                    </MenuGroup>
                    <MenuGroup title="vue常用">
                        <menu-item name="/my/common-options">
                            <Icon type="ios-nutrition"></Icon>
                            vue实例的4个常用选项
                        </menu-item>
                        <menu-item name="/my/add-class">
                            <Icon type="ios-nutrition"></Icon>
                            vue动态绑定class
                        </menu-item>
                        <menu-item name="/my/vue-lifecycle">
                            <Icon type="ios-nutrition"></Icon>
                            vue生命周期
                        </menu-item>
                        <menu-item name="/my/vue-nextTick">
                            <Icon type="ios-nutrition"></Icon>
                            vue之this.$nextTick()
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
