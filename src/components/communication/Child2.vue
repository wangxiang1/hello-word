<template>
  <div>
    <!-- $listeners会被展开并监听 -->
    <h2 v-on="$listeners">child2</h2>
   <!--  <h3 v-on="$listeners">child2</h3> -->
    <button @click="sendToChild1">给child1发送消息</button>
    <!-- $attrs -->
    <p>{{$attrs}}</p>
    <p>{{$listeners}}</p>
    <p>{{foo}}</p>
    <p>busCount：{{busCount}}</p>
  </div>
</template>

<script>
export default {
  inject: ['foo'],
  // props: {
  //   msg: {
  //     type: String,
  //     default: '',
  //   }
  // },
  data() {
    return{
      busCount: '暂无'
    }
  },
  mounted(){
    // 利用事件总线监听事件
    this.$bus.$on('bus-child1', (value) => {
      console.log('bus-on-child2   this.busCount=', value); 
      this.busCount = value;  
    })
  },
  methods: {

    sendToChild1(){
      // 利用事件总线发送事件
      // this.$bus.$emit('event-from-child2', 'some msg from child2')
      this.$parent.$emit('event-from-child2', 'some msg from child2')
    }
  } 
}
</script>

<style>

</style>