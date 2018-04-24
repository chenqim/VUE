<template>
    <div>
        <Row>
            <i-col span="5">
                <Menu :theme="theme3" active-name="/my/first" @on-select="routerTo">
                    <MenuGroup title="内容管理">
                        <menu-item name="/my/first">
                            <Icon type="document-text"></Icon>
                            文章管理
                        </menu-item>
                        <menu-item name="/my/second">
                            <Icon type="chatbubbles"></Icon>
                            评论管理
                        </menu-item>
                    </MenuGroup>
                    <MenuGroup title="统计分析">
                        <menu-item name="3">
                            <Icon type="heart"></Icon>
                            用户留存
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
      theme3: 'light'
    }
  },
  methods: {
    routerTo (name) {
      this.$router.push(name)
    }
  }
}
</script>
