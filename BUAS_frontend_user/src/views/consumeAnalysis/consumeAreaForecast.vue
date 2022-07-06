<template>

  <div class="app-container" id="main">
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
  import {
    LabelLayout,
    UniversalTransition
  } from 'echarts/features';
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
  import {
    CanvasRenderer
  } from 'echarts/renderers';

  export default {
    created() {
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
      let option = {
        title: {
          text: "地域消费预测",
          left: "left",
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          data: ['Evaporation', 'Precipitation', 'Temperature']
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [{
            name: 'Evaporation',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: 'Precipitation',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      myChart.setOption(option); //调用工具
    },
    name: '',
  }
</script>
<style scoped>
  #main {
    height: 650px;
    margin-top: 50px;
  }
</style>


