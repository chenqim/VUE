import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyFirst from '../pages/MyFirst'
import MySecond from '../pages/MySecond'
import LeftNav from '../pages/LeftNav'
import CommonOptions from '../pages/CommonOptions'
import AddClass from '../pages/AddClass'
import VueLifecycle from '../pages/VueLifecycle'
import VueNextTick from '../pages/VueNextTick'
import VueSlot from '../pages/VueSlot'

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
        },
        {
          path: '/my/common-options',
          name: 'CommonOptions',
          component: CommonOptions
        },
        {
          path: '/my/add-class',
          name: 'AddClass',
          component: AddClass
        },
        {
          path: '/my/vue-lifecycle',
          name: 'VueLifecycle',
          component: VueLifecycle
        },
        {
          path: '/my/vue-nextTick',
          name: 'VueNextTick',
          component: VueNextTick
        },
        {
          path: '/my/vue-slot',
          name: 'VueSlot',
          component: VueSlot
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
