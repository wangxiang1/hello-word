import MRouterLink from './mrouter-link'
import MRouterView from './mrouter-view'

let Vue;

class MVueRouter {
  constructor(options) {
    this.$options = options; 
    // console.log(this.$options);  

    Vue.util.defineReactive(this, 'current', '/');

    this.routeMap = {};
    options.routes.forEach(item => {
      this.routeMap[item.path] = item;
    });

    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }

  onHashChange(){
    console.log(window.location.hash);

    this.current = window.location.hash.slice(1);
  }
}

MVueRouter.install = function (_Vue) {
  // 保存构造函数，在MVueRouter里面使用
  Vue = _Vue;

  // 为什么要用混入方式写？主要原因是use代码在前，Router实例创建在后，而install逻辑又需要用到该实例
  Vue.mixin({
    beforeCreate () {

      // 只有根组件拥有router选项
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('mrouter-link', MRouterLink)
  Vue.component('mrouter-view', MRouterView)
}

export default MVueRouter