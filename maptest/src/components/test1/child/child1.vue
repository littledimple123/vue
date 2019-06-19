<template>
  <div class="child1">
      <div>这是child1组件</div>
       <el-radio v-model="radio" label="学校" @change="radiosChange1">学校</el-radio>
       <el-radio v-model="radio" label="餐厅" @change="radiosChange1">餐厅</el-radio>
  </div>
</template>

<script>
export default {
  name: 'child1',
  data() { 
    return {
        radio: '学校'
    }
  },
  mounted(){
      this.radiosChange1()
  },
  methods:{
      radiosChange1(){

          this.$emit("listenToChild1Event",this.radio)
          //console.log('子组件发送信息',this.radio)
      }
  }
 }
</script>

<style lang='scss' scoped>
  .child1{

  }
</style>