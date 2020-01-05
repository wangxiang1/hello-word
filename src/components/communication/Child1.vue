<template>
  <div>
    <h3 @click="$emit('some-event', 'msg from child1')">Child1组件</h3>
    <p>{{msg}}</p>
    <button @click="handleClickBus">bus测试</button>
    <div id="busCount">{{busCount}}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    }
  },
  data(){
    return {
      busCount: 0
    }
  },
  mounted (){
    this.$parent.$on('event-from-child2', msg => {
      console.log('Child1:', msg);
    });
    
    // this.$emit('some-event','我是child1组件');
  },
  methods: {
    eat(){
      console.log('我收到了.....')
    },
    handleClickBus(){
      console.log('您点击了child1的bus测试按钮...');
      this.busCount++;
      // 利用事件总线发送事件
      this.$bus.$emit('bus-child1', this.busCount);
    }
  }
}
</script>

<style scope>
  #busCount{
    color: red;
    font-size: 16px;
  }
</style>