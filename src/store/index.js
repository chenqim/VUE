import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList: [
      { name: '苹果', price: 10 },
      { name: '西瓜', price: 15 },
      { name: '草莓', price: 50 },
      { name: '车厘子', price: 100 }
    ],
    countList: [2, 4, 6, 8]
  },
  getters: {
    // Getter 也可以接受其他 getter 作为第二个参数
    // 获取折扣价
    getDiscountPrice: (state, getters) => {
      let discountPrice = state.productList.map(element => {
        return { name: element.name, price: element.price * 0.8 }
      })
      return discountPrice
    }
  },
  mutations: {
    // payload自定义参数
    increase (state, payload = { money: 1 }) {
      console.log('state', state)
      console.log('payload', payload)
      state.productList.forEach(element => {
        element.price += payload.money
      })
    },
    decrease (state, payload = { money: 1 }) {
      state.productList.forEach(element => {
        element.price -= payload.money
      })
    }
  },
  actions: {
    asyncIncrease (context, payload) {
      setTimeout(() => {
        context.commit('increase', payload) // context提交
      }, 2000)
    },
    asyncDecrease (context, payload) {
      setTimeout(() => {
        context.commit('decrease', payload) // context提交
      }, 2000)
    }
  }
})
export default store
