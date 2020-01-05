<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>

    <slot></slot>

    <!-- 校验信息显示 -->
    <p id="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
// Asyc-validator
import Schema from "async-validator";

export default {
  inject: ["form"],
  data() {
    return {
      error: "" // error是空说明校验通过
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  mounted(){
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate(){
      // 规则
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];

      // 校验描述对象
      const desc = {[this.prop]: rules};
      // 创建Schema实例
      const scheme = new Schema(desc);

      return scheme.validate({[this.prop]: value}, (errors) => {
        if(errors){
          console.log('errors: ', errors);
          this.error = errors[0].message;
        }else{
          // 校验通过
          this.error = '';
        }
      });

    }
  },
}
</script>

<style scoped>
  #error{
    color: red;
    font-size: 12px;
  }
</style>