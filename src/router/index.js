import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyFirst from '../pages/MyFirst'
import MySecond from '../pages/MySecond'
import LeftNav from '../pages/LeftNav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LeftNav',
      component: LeftNav,
      children: [
        {
          path: '/my/first',
          name: 'MyFirst',
          component: MyFirst
        },
        {
          path: '/my/second',
          name: 'MySecond',
          component: MySecond
        }
      ]
    },
    {
      path: '/hello/world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
