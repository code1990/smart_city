<template>
  <div>
    <div ref="chartRef" style="width: 100%; height: 100vh;"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';

const chartRef = ref(null); // 绑定 DOM
let myChart;

onMounted(() => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value);

    const option = {
      title: {
        text: '知识图谱'
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 50,
          roam: true,
          label: {
            show: true
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20
          },
          data: [
            { name: '黄浦区', x: 300, y: 300 },
            { name: '平岗河流域', x: 550, y: 100 },
            { name: '雨水', x: 650, y: 200 },
            { name: '污水', x: 650, y: 0 },
            { name: '南岗河流域', x: 550, y: 500 }
          ],
          links: [
            { source: '黄浦区', target: '平岗河流域' },
            { source: '平岗河流域', target: '雨水' },
            { source: '平岗河流域', target: '污水' },
            { source: '黄浦区', target: '南岗河流域' }
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      ]
    };

    myChart.setOption(option);
  }
});
</script>

<style scoped>
</style>
