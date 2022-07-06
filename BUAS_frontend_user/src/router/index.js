import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  //基本属性分析
  {
    path: '/basicAttributeAnalysis',    //基本属性分析
    component: Layout,
    redirect: '/basicAttributeAnalysis/genderAggregation', //跳转
    name: '基本属性分析',
    meta: { title: '基本属性分析', icon: 'example' },
    children: [
      {
        path: 'genderAggregation',
        name: '性别聚合分析',
        component: () => import('@/views/basicAttributeAnalysis/genderAggregation'), //设置要跳转的页面路径
        meta: { title: '性别聚合分析', icon: 'gender' }
      },
      {
        path: 'ageAggregation',
        name: '年龄聚合分析',
        component: () => import('@/views/basicAttributeAnalysis/ageAggregation'),
        meta: { title: '年龄聚合分析', icon: 'age' }
      },
      {
        path: 'cardAggregation',
        name: '持卡聚合分析',
        component: () => import('@/views/basicAttributeAnalysis/cardAggregation'),
        meta: { title: '持卡聚合分析', icon: 'card' }
      }
    ]
  },

  //地域分析
  {
    path: '/areaAnalysis',    //基本属性分析
    component: Layout,
    redirect: '/areaAnalysis/payPlace', //跳转
    name: '地域分析',
    meta: { title: '地域分析', icon: 'area1' },
    children: [
      {
        path: 'payPlace',
        name: '支付地点',
        component: () => import('@/views/areaAnalysis/payPlace'), //设置要跳转的页面路径
        meta: { title: '支付地点', icon: 'pay' }
      },
      {
        path: 'cardArea',
        name: '办卡地区',
        component: () => import('@/views/areaAnalysis/cardArea'),
        meta: { title: '办卡地区', icon: 'card' }
      }
    ]
  },

  //支付偏好分析
  {
    path: '/payPreferAnalysis',    //基本属性分析
    component: Layout,
    redirect: '/payPreferAnalysis/payWay', //跳转
    name: '支付偏好分析',
    meta: { title: '支付偏好分析', icon: 'pay' },
    children: [
      {
        path: 'payWay',
        name: '支付方式',
        component: () => import('@/views/payPreferAnalysis/payWay'), //设置要跳转的页面路径
        meta: { title: '支付方式', icon: 'zhifufangshi' }
      },
      {
        path: 'payCategory',
        name: '消费类别',
        component: () => import('@/views/payPreferAnalysis/payCategory'),
        meta: { title: '消费类别', icon: 'leibie' }
      }
    ]
  },

  //消费分析 consume
  {
    path: '/consumeAnalysis',    //基本属性分析
    component: Layout,
    redirect: '/consumeAnalysis/consumeAreaAnalysis', //跳转
    name: '消费分析',
    meta: { title: '消费分析', icon: 'xiaofei' },
    children: [
      {
        path: 'consumeAreaAnalysis',
        name: '地域消费分析',
        component: () => import('@/views/consumeAnalysis/consumeAreaAnalysis'), //设置要跳转的页面路径
        meta: { title: '地域消费分析', icon: 'area2' }
      },
      {
        path: 'consumeAreaForecast',
        name: '地域消费预测',
        component: () => import('@/views/consumeAnalysis/consumeAreaForecast'),
        meta: { title: '地域消费预测', icon: 'area2' }
      },
      {
        path: 'userConsumeForecast',
        name: '用户消费预测',
        component: () => import('@/views/consumeAnalysis/userConsumeForecast'),
        meta: { title: '用户消费预测', icon: 'user' }
      }
    ]
  },
  //价值与风险分析
  {
    path: '/riskAnalysis',    //基本属性分析
    component: Layout,
    redirect: '/riskAnalysis/consumeAreaAnalysis', //跳转
    name: '价值与风险分析',
    meta: { title: '价值与风险分析', icon: 'fengxian' },
    children: [
      {
        path: 'consumeRiskForcast',
        name: '消费风险预测',
        component: () => import('@/views/riskAnalysis/consumeRiskForcast'), //设置要跳转的页面路径
        meta: { title: '消费风险预测', icon: 'pay' }
      },
      {
        path: 'ageRiskAnalysis',
        name: '风险年龄分析',
        component: () => import('@/views/riskAnalysis/ageRiskAnalysis'),
        meta: { title: '风险年龄分析', icon: 'age' }
      },
      {
        path: 'genderRiskAnalysis',
        name: '风险性别分析',
        component: () => import('@/views/riskAnalysis/genderRiskAnalysis'),
        meta: { title: '风险性别特征', icon: 'gender' }
      },
      {
        path: 'echartsTest',
        name: 'echarts测试',
        component: () => import('@/views/riskAnalysis/echartsTest'),
        meta: { title: 'echarts测试', icon: 'gender' }
      }
    ]
  },
  //用户后台管理
  {
    path: '/backstageManage',
    component: Layout,
    redirect: '/backstageManage/backstageManage', //跳转
    name: '后台管理',
    //component: () => import('@/views/backstageManage/backstageManage'),
    meta: { title: '后台管理', icon: 'pay' },
    children:[
      {
        path: 'backstageManage',
        name: '后台管理',
        component: () => import('@/views/backstageManage/backstageManage'), //设置要跳转的页面路径
        meta: { title: '后台管理', icon: 'back' }
      },
    ],
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
