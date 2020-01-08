let Vue

class Store {
  constructor(options){

    this._mutations = options.mutations
    this._actions = options.actions
    this._getters = options.getters

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)

    const computed = {}
    this.getters = {}
    const store = this
    Object.keys(this._getters).forEach((key) => {
      // this.getters[key] = this._getters[key](this.state);
      const fn = store._getters[key]

      computed[key] = function(){
        return fn(store.state)
      }

      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      })
    })

    this._vm = new Vue({
      data: {
        // 加两个$$,vue不做代理
        $state: options.state,
      },
      computed
    })

  }

  // 存取器
  get state(){
    return this._vm.$data.$state
  }

  set state(v){
    console.error('vuex store data不允许进行赋值!', v)
  }

  commit(type, payload){
    if(this._mutations[type]){
      this._mutations[type](this.state, payload)
    }
  }

  dispatch(type, payload){
    if(this._actions[type]){
      this._actions[type](this, payload)
    }
  }
}

function install(_Vue){
  Vue = _Vue
  
  Vue.mixin({

    beforeCreate() {
  
      if(this.$options.store){
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default{
  Store,
  install
}