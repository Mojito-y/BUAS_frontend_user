<template>

  <div class="app-container" id="main">
    用户消费预测
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
        let option = {
  title: {
    text: '消费金额'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    show:true,
    orient: "",
    padding: [0, 10, 0, 20],
    data:["2023年3月",
            "2023年6月",
            "2023年9月",
            "2023年12月",
            "2024年3月",
            "2024年6月",
            "2024年9月",
            "2024年12月",
            "2025年3月",
            "2025年6月",
            "2025年9月",
            "2025年12月"]
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    name:'class',
    data: ["2023年3月",
            "2023年6月",
            "2023年9月",
            "2023年12月",
            "2024年3月",
            "2024年6月",
            "2024年9月",
            "2024年12月",
            "2025年3月",
            "2025年6月",
            "2025年9月",
            "2025年12月"]
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  series: [
    {
      name:'test',
      type: 'line',
      data: [{ value: 17761, name: "2023年3月" },
              { value: 18203, name: "2023年6月" },
              { value: 26971, name: "2023年9月" },
              { value: 25484, name: "2023年12月" },
              { value: 37546, name: "2024年3月" },
              { value: 35677, name: "2024年6月" },
              { value: 51973, name: "2024年9月" },
              { value: 49949, name: "2024年12月" },
              { value: 72943, name: "2025年3月" },
              { value: 69928, name: "2025年6月" },
              { value: 94479, name: "2025年9月" },
              { value: 97900, name: "2025年12月" },]
    }
  ]
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
}
</style>

