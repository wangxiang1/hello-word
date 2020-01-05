import Vue from 'vue'
import Notice from '@/components/Notice.vue'

function create(Component, props){

  const Ctor = Vue.extend(Component);
  const comp = new Ctor({propsData: props});
  comp.$mount();
  document.body.appendChild(comp.$el);
  comp.remove = () => {
    document.body.removeChild(comp.$el);
    comp.$destroy();
  };

  // const vm = new Vue({
  //   // h是createElement, 返回VNode，是虚拟dom
  //   // 需要挂载才能变成真实dom
  //   render: h => h(Component, { props })
  // }).$mount(); // 不指定宿主元素，则会创建真实dom，但是不会追加操作

  // document.body.appendChild(vm.$el);

  // const comp = vm.$children[0];

  // comp.remove = () => {
  //   document.body.removeChild(vm.$el);
  //   vm.$destroy();
  // };
  
  return comp;
}

export default {
  install(Vue){
    Vue.prototype.$notice = (options) => {
      return create(Notice, options)
    }
  }
};
