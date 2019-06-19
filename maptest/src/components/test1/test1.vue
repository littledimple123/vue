<template>
  <div class="test1">
    <span>1111</span>
    <br/>
    <button @click='increase()'>点击增加</button>
    <span>{{this.$store.state.increase}}</span>
  </div>
</template>

<script>
export default {
  name: 'test1',
  methods:{
    increase(){      
      return this.$store.commit('increment')
    }
  }
  
}
</script>


<style scoped lang ='scss'>
.test1{
  color:$themeColor;
}
</style>


