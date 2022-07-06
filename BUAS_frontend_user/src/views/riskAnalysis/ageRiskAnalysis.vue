<template>

  <div class="app-container" id="main" >
    用户年龄聚合分析
  </div>

</template>

 <script>

     // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
     import * as echarts from 'echarts/core';
     // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
     import {
       TitleComponent,
       TooltipComponent,
       GridComponent,
       DatasetComponent,
       TransformComponent
     } from 'echarts/components';
     // 标签自动布局，全局过渡动画等特性
     import { LabelLayout, UniversalTransition } from 'echarts/features';
     // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
     import { CanvasRenderer } from 'echarts/renderers';

     export default {
       created () {
         // 注册必须的组件
         echarts.use([
           TitleComponent,
           PieChart,
           TooltipComponent,
           GridComponent,
           DatasetComponent,
           TransformComponent,
           BarChart,
           LabelLayout,
           UniversalTransition,
           CanvasRenderer,
         ]);

       },
  mounted() {
    // 初始化图表，设置配置项
    var myChart = echarts.init(document.getElementById('main'));
    const dataBJ = [
      [18, 98],
      [30, 34],
      [22, 49],

    ];

const schema = [
  { name: 'age', index: 0, text: '年龄' },
  { name: 'risk_grade', index: 1, text: '风险程度' }
];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
     let option = {

       color: ['#dd4444'],
       grid: {
         left: '10%',
         right: 150,
         top: '18%',
         bottom: '10%'
       },

       xAxis: {
         type: 'value',
         name: '年龄',
         nameGap: 10,
         nameTextStyle: {
           fontSize: 16
         },
         min:10,
         max: 90,
         splitLine: {
           show: false
         }
       },
       yAxis: {
         type: 'value',
         name: '风险程度',
         nameLocation: 'end',
         nameGap: 10,
         nameTextStyle: {
           fontSize: 16
         },
         min:10,
         max:100,

         splitLine: {
           show: false
         }
       },
       visualMap: [
         {
          show:true,
           left: 'right',
           bottom: '10%',
           dimension: 1,
           min: 10,
           max: 100,
           itemHeight: 300,
           text: ['明暗：风险程度'],
           textGap: 10,
           inRange: {
             colorLightness: [0.9, 0.5]
           },
           outOfRange: {
             color: ['rgba(255,255,255,0.4)']
           },
           controller: {
             inRange: {
               color: ['#c23531']
             },
             outOfRange: {
               color: ['#999']
             }
           }
         }
       ],
       series: [
         {
           name: '北京',
           type: 'scatter',
           itemStyle: itemStyle,
           data: dataBJ
         },

       ]

     }
    //  let option2={
    //  }
     myChart.setOption(option);    //调用工具
   },
   name: '',
 }

 </script>
<style scoped>
#main {
  height: 600px;
  margin-top: 50px;
  width: 700px;
}
</style>

