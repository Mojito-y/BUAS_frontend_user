import Vue from 'vue'
import 'echarts';   //全量引入 ECharts 从而无需手动引入模块
import ECharts from 'vue-echarts'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import ElementUI from 'element-ui'    //引入elementUI
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

// 全局注册组件（也可以使用局部注册）
Vue.component('ECharts', ECharts)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
