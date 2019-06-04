<template>
  <div id="app">
    <div id="nav"></div>
    <router-link to="/login">跳转Login</router-link> ||
    <router-link to="/dingweiMap">跳转定位地图</router-link>
    <router-view/>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
