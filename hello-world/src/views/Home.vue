<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-bind:msg='msg1'/>
    <test1/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test1 from '@/components/test1/test1'

export default {
  name: 'home',
  data(){
  	return{
  		msg1:'hello world'
  	}
  },
  components: {
    HelloWorld,
    test1
  }
}
</script>
