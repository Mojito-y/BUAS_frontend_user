<template>

  <div class="app-container" id="main">
    用户年龄聚合分析
  </div>

</template>

 <script>

    // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
    import * as echarts from 'echarts/core';
    // 引入饼图图表，图表后缀都为 Chart
    import { PieChart } from 'echarts/charts';
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
      mounted () {
        // 初始化图表，设置配置项
        var myChart = echarts.init(document.getElementById('main'));
        let option ={
            title: {
              text: "用户年龄聚合分析",
              left: "center"
            },
            tooltip: {      //图例提示组件
              trigger: "axis",
              formatter: "{a} <br/>{b} : {c} "
            },
            xAxis: {
              type: 'category',
              data: ['20岁以下', '20-30岁', '30-40岁', '40-50岁', '50-60岁', '60岁以上']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: "用户年龄",
                type: 'bar',
                data: [
                  { value: 235, name: "20岁以下" },
                  { value: 861, name: "20-30岁" },
                  { value: 1024, name: "30-40岁" },
                  { value: 599, name: "40-50岁" },
                  { value: 432, name: "50-60岁" },
                  { value: 384, name: "60岁以上" }
                ],
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                  ])
                },
                emphasis: {
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#2378f7' },
                      { offset: 0.7, color: '#2378f7' },
                      { offset: 1, color: '#83bff6' }
                    ])
                  }
                },
              }
            ]
        }
        myChart.setOption(option);    //调用工具
      },
      name: '',
    }

</script>
<style scoped>
#main {
  height: 600px;
  margin-top: 50px;
}
</style>

