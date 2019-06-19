<template>
  <div class="child3">
      <div>这是child3组件</div>
      <el-radio v-model="radio" label="116.404, 39.915" @change="radiosChange3">北京</el-radio>
      <el-radio v-model="radio" label="117.210, 39.143" @change="radiosChange3">天津</el-radio>
  </div>
</template>

<script>
export default {
  name: 'child3',
  data() { 
    return {
        radio:"116.404, 39.915",
        
    }
  },
  mounted(){
      this.radiosChange3()
  },
  methods:{
    radiosChange3(){
        this.$emit("listenToChild3Event",this.radio)
        // console.log(this.radio)
        
    }
  }

 }
</script>

<style lang='scss' scoped>
  .child3{

  }
</style>