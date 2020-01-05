<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/communication">communication</router-link>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  // mounted(){
  //   console.log(this.$parent, this)
  // }
}
</script>

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
