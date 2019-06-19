<template>
  <div class="dingweiMap">
      <div>
        <input id="cityName" type="text" ref='city' placeholder="请输入单位和地址"/>
		    <input type="button"  value="查询" @click="theLocation()" />
        <div id="result" ref='result'></div>
        
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
        ss:[]
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
        //debugger;
        //请求后台返回数据，包括（1、搜索内容的经纬度放到this.ss中）      
        let map = new BMap.Map(this.$refs.allMap); 
        var myKeys = [this.$refs.city.value];
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        
        var local = new BMap.LocalSearch(map, {
          renderOptions:{map: map, panel:this.$refs.result},
          pageCapacity:6
        });
        local.searchInBounds(myKeys, map.getBounds());
      },
      serchMap(){
        //debugger;
        //console.log(this.ss)
        var map = new BMap.Map(this.$refs.allMap);            // 创建Map实例
        var mPoint = new BMap.Point(this.ss[0],this.ss[1]);  
        map.enableScrollWheelZoom();
        map.centerAndZoom(mPoint,15);

        var circle = new BMap.Circle(mPoint,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
        map.addOverlay(circle);
        var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
        local.searchNearby(this.school,mPoint,Number(this.km*1000));

      },

      radiosChange1(data){
          //console.log('父组件接收信息1',data)
          this.school='';
          this.school=data
          console.log(this.school)
          this.serchMap()
      },
      radiosChange2(data){
          //console.log('父组件接收信息2',data)
          this.kk='';
          this.km=data
          console.log(this.km)
          this.serchMap()
      },
      radiosChange3(data){
        
          console.log('父组件接收信息3',data)
          let a = Number(data.split(',')[0])
          let b = Number(data.split(',')[1])
          this.ss=[];
          this.ss.push(a,b)
          
          //console.log(typeof this.ss)
          console.log(this.ss[0],this.ss[1])
          this.serchMap()
      },
   
  },
  mounted(){
      this.map()
     this.serchMap()
      console.log('mounted')
     
  }

 }
</script>

<style lang='scss' scoped>
  .dingweiMap{

    




  }
</style>