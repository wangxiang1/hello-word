class Compiler{
  constructor(el, vm){
    this.$vm = vm
    this.$el = document.querySelector(el);

    if(this.$el){
      this.complie(this.$el)
    }
  }

  complie(element){
    const childNodes = element.childNodes;

    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) { // 节点元素
        this.complieElement(node)
      }else if(this.isInterpolation(node)){ // 插值文本
        this.complieText(node)
      }

      if (node.childNodes && node.childNodes.length > 0) {
        this.complie(node)
      }
    })
  }

  // 判断节点是否为节点元素
  // nodeType: 1：元素，2：属性，3：元素或属性中的文本
  isElement(node){
    return node.nodeType === 1;
  }

  // 判断节点是否为插值文本  例如：{{xxx}}
  isInterpolation(node){
    const pattern = /\{\{(.*)\}\}/
    return node.nodeType === 3 && pattern.test(node.textContent)
  }

  // 编译插值表达式
  complieText(node){
    // node.textContent = this.$vm[RegExp.$1]
    this.update(node, RegExp.$1, 'text')
  }

  // 编译元素
  complieElement(node){
    const attrs = node.attributes // 获取元素所有属性

    Array.from(attrs).forEach(item => {
      const attrName = item.nodeName
      const exp = item.value

      if(attrName.indexOf('m-') > -1){
          const dir = attrName.substring(2)
          this[dir] && this[dir](node, exp)
      }
    })

  }

  // 插值文本 更新到dom
  text(node, exp){
    this.update(node, exp, 'text')
    // node.textContent = value
  }

  html(node, exp){
    this.update(node, exp, 'html')
  }

  // 更新函数作用：
  // 1.初始化
  // 2.创建Watcher实例
  update(node, exp, dir){
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])

    new Watcher(this.$vm, exp, function(value){
      fn && fn(node, value)
    })
  }

  // update 将vm数据更新到dom元素上
  textUpdater(node, value){
    node.textContent = value
  }

  htmlUpdater(node, value){
    node.innerHTML = value
  }

}