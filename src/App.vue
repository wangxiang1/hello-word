<template>
  <div id="app">
    <div id="nav">
      <mrouter-link to="/">Home</mrouter-link>|
      <mrouter-link to="/about">About</mrouter-link>|
      <mrouter-link to="/communication">communication</mrouter-link>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 路由出口 -->
    <mrouter-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
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
