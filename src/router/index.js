import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MyFirst from '../pages/MyFirst'
import MySecond from '../pages/MySecond'
import LeftNav from '../pages/LeftNav'
import CommonOptions from '../pages/CommonOptions'
import DynamicComponents from '../pages/vue/DynamicComponents'
import AddClass from '../pages/AddClass'
import VueLifecycle from '../pages/VueLifecycle'
import VueNextTick from '../pages/VueNextTick'
import VueSlot from '../pages/VueSlot'
import UploadFile from '../pages/UploadFile'
import Interval from '../pages/js/Interval'
import Promise from '../pages/js/Promise'
import Filter from '../pages/js/Filter'
import Axios from '../pages/js/Axios'
import ImageToText from '../pages/function/ImageToText'
import MultiFunctionTable from '../pages/function/MultiFunctionTable'
import Test from '../pages/js/Test'
import Vuex from '../pages/vue/vuex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 项目一运行进的首页
    {
      path: '/',
      name: 'Login',
      component: Login
    },
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
          path: '/my/dynamic-components',
          name: 'DynamicComponents',
          component: DynamicComponents
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
        },
        {
          path: '/vue/upload',
          name: 'UploadFile',
          component: UploadFile
        },
        {
          path: '/js/interval',
          name: 'Interval',
          component: Interval
        },
        {
          path: '/js/promise',
          name: 'Promise',
          component: Promise
        },
        {
          path: '/js/filter',
          name: 'Filter',
          component: Filter
        },
        {
          path: '/js/Axios',
          name: 'Axios',
          component: Axios
        },
        {
          path: '/js/test',
          name: 'Test',
          component: Test
        },
        {
          path: '/function/image-to-text',
          name: 'ImageToText',
          component: ImageToText
        },
        {
          path: '/function/multi-function-table',
          name: 'MultiFunctionTable',
          component: MultiFunctionTable
        },
        {
          path: '/vue/vuex',
          name: 'Vuex',
          component: Vuex
        }
      ]
    }
  ]
})
