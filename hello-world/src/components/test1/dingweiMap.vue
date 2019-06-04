<template>
  <div class="dingweiMap">
      <div>
        <input id="cityName" type="text" ref='city'/>
		<input type="button"  value="查询" @click="theLocation()" />
        
        <!-- element UI Tabs组件 -->
        <el-tabs type="border-card">
            <el-tab-pane label="学校"><child1 @listenToChild1Event='radiosChange1'/></el-tab-pane>
            <el-tab-pane label="公里"><child2 @listenToChild2Event='radiosChange2'/></el-tab-pane>
            <el-tab-pane label="省市"><child3 @listenToChild3Event='radiosChange3'/></el-tab-pane>
            
        </el-tabs>


      </div>
      <div id='allMap' ref='allMap' :style="{width:'1000px', height:'500px'}"></div>
  </div>
</template>

<script>
 import child1 from './child/child1'
import child2 from './child/child2'
import child3 from './child/child3'

export default {
  name: 'dingweiMap',
  data() { 
    return {
        school:'',
        km:'',
        ss:''
    }
  },
  components:{
      child1,
      child2,
      child3
  },
  methods:{
      map(){
        let map = new BMap.Map(this.$refs.allMap);
        let point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,11);  
        map.enableScrollWheelZoom(true);  
        map.enableDragging();
                  
      },
      theLocation(){        
        let map = new BMap.Map(this.$refs.allMap);
        let city = this.$refs.city.value;
        if(city != ""){
                map.centerAndZoom(city,11);      // 用城市名设置地图中心点
                map.enableScrollWheelZoom(true);
                map.enableDragging();
        }
      },
      serchMap(){
        debugger;
        var map = new BMap.Map(this.$refs.allMap);            // 创建Map实例
        var mPoint = new BMap.Point(this.ss);  
        map.enableScrollWheelZoom();
        map.centerAndZoom(mPoint,15);

        var circle = new BMap.Circle(mPoint,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
        map.addOverlay(circle);
        var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
        local.searchNearby(this.school,mPoint,this.km*1000);




        // this.axios.get('http://api.map.baidu.com/place/v2/search?query='+this.school+'&location='+this.ss+'&radius=1000&output=xml&ak=cY9vCMCRO7RZwNQyQ4oxsjgCZcC4j5sI')
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });

      },

      radiosChange1(data){
          //console.log('父组件接收信息1',data)
          this.school=data
          //console.log(this.school)
          //this.serchMap()
      },
      radiosChange2(data){
          //console.log('父组件接收信息2',data)
          this.km=data
          //console.log(this.km)
          //this.serchMap()
      },
      radiosChange3(data){
          //console.log('父组件接收信息3',data)
          this.ss=data
          //console.log(this.ss)
          //this.serchMap()
      },
   
  },
  mounted(){
      this.map()
      
     
  }
 }
</script>

<style lang='scss' scoped>
  .dingweiMap{

    




  }
</style>