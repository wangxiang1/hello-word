/* 
  KVue：框架构造函数
  Observer：执行数据响应化（分辨数据是对象还是数组）
  Compile：编译模板，初始化视图，收集依赖（更新函数、watcher创建）
  Watcher：执行更新函数（更新dom）
  Dep：管理多个Watcher，批量更新 
*/

// 拦截属性
function defineReactive(obj, key, val) {
  console.log('defineReactive:',key, val)
  observe(val)

  const dep = new Dep();
  
  Object.defineProperty(obj, key, {
    get: () => {
      console.log('get===:', key)
      
      // Dep收集依赖 一个key对应一个Dep， 一个Dep对应多个Watcher
      Dep.target && dep.addDep(Dep.target) // 依赖收集收集watcher
      return val
    },
    set: (newVal) => {
      console.log('set:=========', key)
      if(newVal !== val){

        // 新值是对象的情况
        observe(newVal)
        val = newVal

        // 调用Dep的多个Watcher的update方法
        dep.notify()
      }
    }
  })
}

// 遍历对象，对每个属性进行响应化处理
function observe(obj){
  if(typeof obj !== 'object' || obj === null){
    return
  }

  new Observer(obj)
}

// 代理 允许通过vm直接获取data
function proxy(vm){

  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get: () => {
        // console.log('proxy get==', key)
        return vm.$data[key]
      },
      set: (newVal) => vm.$data[key] = newVal
    })
  })
}

class MVue{
  constructor(options){
    this.$options = options
    this.$data = options.data

    observe(this.$data)
    proxy(this)

    new Compiler(options.el, this)
  }

  // 新加的属性没有拦截, 需要用set添加新属性
  set(obj, key, val){
    defineReactive(obj, key, val)
  }
}

// 遍历响应对象
class Observer{
  constructor(value){
    this.value = value
    this.walk(value)
  }

  walk(obj){
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key])
    })
  }
}

class Watcher{
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn

    Dep.target = this // 将watcher存入全局
    this.vm[key] // 触发属性的get方法
    Dep.target = null // 触发get watcher存入dep以后，清空Dep.target,以便下一次存取watcher
  }

  update(){
    this.updateFn.call(this.vm, this.vm[this.key])
  }
  
}

// 收集依赖
class Dep {
  constructor(){
    this.deps = []
  }

  addDep(dep) {
    this.deps.push(dep)
  }

  notify() {
    this.deps.forEach(dep => dep.update())
  }
}
