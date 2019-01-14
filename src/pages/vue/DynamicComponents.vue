<template>
    <div>
        <Button :type="index === activeIndex ? 'primary' : 'text'" @click="next(item.name, index)" v-for="(item, index) in btns" :key="index">{{ item.name }}</Button>
        <component class="mt20" :is="is"></component>
    </div>
</template>
<script>
import Mode1 from '../../components/Mode1'
import Mode2 from '../../components/Mode2'
import Mode3 from '../../components/Mode3'
export default {
  name: 'DynamicComponents',
  components: {
    Mode1,
    Mode2,
    Mode3
  },
  data () {
    return {
      activeIndex: 0,
      is: 'Mode1',
      btns: [
        {
          name: 'Mode1'
        },
        {
          name: 'Mode2'
        },
        {
          name: 'Mode3'
        }
      ]
    }
  },
  methods: {
    next (name, index) {
      this.activeIndex = index
      this.is = name
      this.$Message.success('success' + ' ' + name)
    }
  }
}
</script>
