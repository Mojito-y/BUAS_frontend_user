<template>

  <div class="app-container" id="main">
    消费类别分析
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
    text: '商品类别',
    left: "center"
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
    data:[ "服装鞋帽",
            "日用百货",
            "数码产品及其配件",
            "手提包、箱包",
            "妆品和美容产品",
            "书箱音像制品",
            "家用电器",
            "食品、保健品",
            "文体用品"]
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ["服装鞋帽",
            "日用百货",
            "数码产品及其配件",
            "手提包、箱包",
            "妆品和美容产品",
            "书箱音像制品",
            "家用电器",
            "食品、保健品",
            "文体用品"]
  },
  series: [
    {
      name:'test',
      type: 'bar',
      data: [{ value: 18203, name: "服装鞋帽" },
              { value: 23489, name: "日用百货" },
              { value: 29034, name: "数码产品及其配件" },
              { value: 104970, name: "手提包、箱包" },
              { value: 131744, name: "妆品和美容产品" },
              { value: 630230, name: "书箱音像制品" },
              { value: 200405, name: "家用电器" },
              { value: 191214, name: "食品、保健品" },
              { value: 210715, name: "文体用品" }]
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

