// 类型注解
let var1: string
var1 = 'string'
// var1 = 1

// 类型推论
let var2 = true
// var2 = 222

// 原始类型： number string boolean undefined null symbol
// 联合类型
let var3: string | number
var3 = '第三个变量'
var3 = 123
// var3 = true

// 交叉类型
type First = {first: number}
type Second = {second: number}
// 扩展的新类型
type FirstAndSecond = First & Second

function fn4(): FirstAndSecond {
  return {first: 1, second: 2}
}

// 类型数组
let arr: string[]
arr = ['ww', 'ee']
// arr = [1,2]

// 任意类型
let var4: any
var4 = 1
var4 = '333'
var4 = null

let arr2: any[]

// 函数类型约束
function greet(params: string): string {
  return 'string'
}

greet('str')
// greet(1)

// void类型
function warn(): void {
  console.log('void---------')
}

// 对象object
function fn1(o: object) {
  
}

fn1({name: 1, age: 1})
// fn1('999')

function fn2(o: {prop: number, age: number}) {
  
}

// fn2({prop: '111', age: 111})
fn2({prop: 222, age: 111})

// 类型别名 type  和 interface基本相同
type Prop = {prop: number, age: number} 

interface Prop1 {
  prop: number, 
  age: number
}

function fn3(o: Prop) { // 等同于fn2
  
}

// fn3(1)
fn3({prop: 222, age: 111})

// 类型断言
const someValue: any = 'this is a string'
const strLen = (someValue as string).length
console.log(strLen)

//类装饰器 表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
function log(target: Function) {
  // target是构造函数
  target.prototype.log = function() {
    console.log('类装饰器:')
    console.log(this.bar);
  }
}

// 属性装饰器
function mua(target, name){
  console.log("属性装饰器：",target, name)
  target[name] = 'mua~~~'
}

function mua1(params){
  return function (target, name){
    console.log("属性装饰器 接收参数：",target, name, params)
    target[name] = params
  }
}

// 方法装饰器
function fd(target: any, name: string, descriptor: any) {
  // 这里通过修改descriptor.value扩展了bar方法
  const baz = descriptor.value
  descriptor.value = function (val: string){
    console.log('方法装饰器：')
    baz.call(this, val)
  }

  return descriptor
}

@log
class Foo {
  bar = 'bar'

  // !称为明确赋值断言，它是提供给ts的
  @mua ns!: string

  @mua1('test mua1') wx!: string


  @fd
  fn11(params: string) {
    const name = params
    console.log(name)
  }
}

const foo = new Foo()
// @ts-ignore
foo.log()
console.log(foo.ns, foo.wx)
foo.fn11('ceshi method')
