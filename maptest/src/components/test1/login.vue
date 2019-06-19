<template>
  <div class="login">      
    <h1>main page</h1>
    
    <p>{{loadingTxt}}</p>    
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'login',
  data() { 
    return {
        
    }
  },
  mounted(){
      if(!this.isLoading){
          setTimeout(()=>{
              this.$store.commit('CHANGE_LOADING')
          },2e3)
      }
  },  
  computed:{
      isLoading(){
          return this.$store.state.isLoading
      },
      loadingTxt(){
          return this.$store.getters.loadingTxt
      }
  }

 }
</script>

<style lang='scss' scoped>
  .login{

  }
</style>