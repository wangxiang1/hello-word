<template>
  <div>
    <h2>组件通信</h2>
    <Child1 msg="some message from parent" @some-event="onSomeEvent"></Child1>
    <Child2 msg="some message from parent" info="zujian2detestinfo" @click="onClick"></Child2>
    <button @click="goHome">go now</button>
  </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';

export default {
  provide() {
      return {
        foo: 'foooooooooo'
      }
    },
  components: {
    Child1,
    Child2,
  },
  methods: {
    goHome() {
      this.$children[0].eat();
    },
    onSomeEvent(value){
      console.log('onSomeEvent:', value)
    },
    onClick(){
      console.log('parent click method');
    }
  },
}
</script>

<style>

</style>