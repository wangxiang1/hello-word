<template>
  <div>
   <h2>Home Compomet</h2> 
   <div @click="$store.commit('increment')">count: {{$store.state.count}}</div>
   <div>doubleCount： {{$store.getters.doubleCount}}</div>
   <div @click="$store.dispatch('increment')">actions: {{$store.state.count}}</div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('mounted==================')
    console.log(this.$store.getters.doubleCount)
    this.$store.state.count = 20000
    console.log(this.$store.getters.doubleCount)
  }
}
</script>

<style>

</style>