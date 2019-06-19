<template>
  <div class="test2">
      <form>
        <input type='text' v-model='iphone' ref='phoneNum' v-on:blur='yanzheng()'/>
      </form>
  </div>
</template>

<script>
import phone from '../../assets/js/phone'

export default {
  name: 'test2',
  data() { 
    return {
        iphone:''
    }
  },
  created(){
    this.yanzheng()
  },
  methods:{
    yanzheng(){   
      //console.log('执行验证方法')
      //console.log(this.$refs.phoneNum.value)
      this.$refs.phoneNum ? phone(this.$refs.phoneNum.value) :''
    }
  }
 }
</script>

<style lang="scss" scoped>
  .test2{

  }
</style>