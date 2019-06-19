<template>
  <div class="maptest">
      <div id='allmap' ref='allmap' :style="{height:'500px'}"></div>
  </div>
</template>

<script>
//import BMap from 'BMap'
export default {
  name: 'maptest',
  data() { 
    return {

    }
  },
  mounted(){
      this.map()
  },
  methods:{
      map(){
        let map = new BMap.Map(this.$refs.allmap);    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
        mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
        ]}));	  
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); 
        var b = new BMap.Bounds(new BMap.Point(116.027143, 39.772348),new BMap.Point(116.832025, 40.126349));
        try {	
            BMapLib.AreaRestriction.setBounds(map, b);
        } catch (e) {
            alert(e);
        }

        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        local.search('故宫');



      }
  }
 }
</script>

<style lang='scss' scoped>
  .maptest{

  }
</style>