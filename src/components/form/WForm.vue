<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
    }
  },

  methods: {
    validate(cb){
      const tasks = this.$children
      .filter(item => item.prop) // 过滤掉没有prop属性的Item
      .map(item => item.validate());
      
      // Promise.all(iterable) 方法返回一个 Promise 实例，
      // 此实例在 iterable 参数内所有的 promise 都“完成（resolved）”
      // 或参数中不包含 promise 时回调完成（resolve）；
      // 如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），
      // 失败原因的是第一个失败 promise 的结果。
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  },
}
</script>

<style>

</style>