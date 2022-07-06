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
var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '1', '2', '3','4'],
      ['18~30', 43.3, 85.8, 93.7,44],
      ['30~40', 83.1, 73.4, 55.1,29],
      ['40~50', 86.4, 65.2, 82.5,93],
      ['50~60', 72.4, 53.9, 39.1,97],
      ['60~70', 86.4, 65.2, 82.5,93],
      ['70~80', 72.4, 53.9, 39.1,97],

    ]
  },
  grid:{
    right:10,
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{type:'bar'}]
};

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
