<template>
  <div class="testBaiduMap">
    <p>测试百度地图</p>
    <ve-bmap
    :settings="chartSettings"
    :series="chartSeries"
    :tooltip="chartTooltip">
  </ve-bmap>
  </div>
</template>

<script>
//import BMap from 'BMap'
export default {
  name: 'testBaiduMap',
  data() { 
    this.chartSettings = {
        key: 'cY9vCMCRO7RZwNQyQ4oxsjgCZcC4j5sI',
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      }
      this.chartTooltip = { show: true }
      return {
        chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // 经度，维度，value，...
            ]
          }
        ]
      }
  },
  
 }
</script>

<style lang="scss" scoped>
  .testBaiduMap{

  }
</style>