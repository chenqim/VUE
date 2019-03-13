<template>
    <div id="product-list-one">
        <h1>product list 1</h1>
        <Button type="primary" @click="increase({ money: 1 })">加</Button>
        <Button type="primary" @click="decrease">减</Button>
        <Button type="primary" @click="asyncIncrease({ money: 2 })">异步加</Button>
        <Button type="primary" @click="asyncDecrease">异步减</Button>
        <ul>
            <li v-for="(product, index) in productList" :key="index">
                <span class="name">{{ product.name }}</span>
                <span class="price">￥{{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'product1',
  data () {
    return {
      // productList: this.$store.getters.getDiscountPrice
      localList: [{ name: '香蕉', price: 20 }]
    }
  },
  computed: {
    // ...为对象展开运算符
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState(['productList']), // 同名的简写，映射 this.productList 为 store.state.productList
    // ...mapState({
    //   // 箭头函数方式
    //   productList: state => state.productList,
    //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    //   productList (state) {
    //     return state.productList.concat(this.localList)
    //   },
    //   // 别名方式
    //   productList: 'productList'
    // }),
    ...mapGetters({
      getDiscountPrice: 'getDiscountPrice'
    })
  },
  methods: {
    // 增加运用mapMutations方式调用
    ...mapMutations({
      increase: 'increase' // 将 `this.increment({ money: 1 })` 映射为 `this.$store.commit('increment', { money: 1 })`
    }),
    ...mapActions({
      asyncIncrease: 'asyncIncrease' // 将 `this.asyncIncrease({ money: 1 })` 映射为 `this.$store.commit('asyncIncrease', { money: 1 })`
    }),
    // 减少运用普通方式调用
    decrease () {
      this.$store.commit('decrease', { money: 5 })
    },
    asyncDecrease () {
      this.$store.dispatch('asyncDecrease', { money: 2 })
    }
  }
}
</script>
<style lang="scss" scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
