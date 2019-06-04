<template>
  <div class="child2">
      <div>这是child2组件</div>
      <el-radio v-model="radio" label="5" @change="radiosChange2">5公里</el-radio>
       <el-radio v-model="radio" label="10" @change="radiosChange2">10公里</el-radio>
  </div>
</template>

<script>
export default {
  name: 'child2',
  data() { 
    return {
        radio:'5'
    }
  },
  mounted(){
      this.radiosChange2()
  },
  methods:{
    radiosChange2(){
        this.$emit("listenToChild2Event",this.radio)
        //console.log(this.radio)
    }
  }
 }
</script>

<style lang='scss' scoped>
  .child2{

  }
</style>