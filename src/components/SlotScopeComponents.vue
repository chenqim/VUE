<template>
    <div>
        <slot :userInfo="userInfo" :index="index"></slot>
    </div>
</template>
<script>
export default {
  name: 'SlotScopeComponents',
  data () {
    return {
      userInfo: {
        name: 'sunnychen',
        sex: '男',
        age: 23
      },
      index: 0
    }
  }
}
</script>
