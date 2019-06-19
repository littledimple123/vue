<template>
  <div class="home">  
    <input @blur="load1()" ref='ipt' placeholder="请输入汉字"/>      
    <HelloWorld v-bind:msg='msg1'/>
    <test1/>    
    <test2/>
    <!-- <testBaiduMap/> -->
    <maptest/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test1 from '@/components/test1/test1'
import test2 from '@/components/test1/test2'
//import testBaiduMap from '@/components/test1/testBaiduMap'
import maptest from '@/components/test1/maptest'
import pinyin from '../../node_modules/js-pinyin/index'

export default {
  name: 'home',
  data(){
  	return{
  		msg1:'hello world'
  	}
  },
  components: {
    HelloWorld,
    test1,
    test2,
    maptest
    //testBaiduMap
  },
  methods:{
    load1(){   
      console.log(pinyin.getFullChars(this.$refs.ipt.value))
      console.log(pinyin.getCamelChars(this.$refs.ipt.value))
    }
  }
}
</script>
