<template>
  <div>
    <ul>
      <input placeholder="请输入" @keyup.enter="addItem" />
      <li v-for="item in items" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="feature in features" :key="feature.id">{{feature.name}}-----{{feature.desc}}-----{{feature.version}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator' 
// 导入接口
import { Feature } from "@/types"
import { getFeatures } from "@/api/feature"

@Component
export default class HelloTypeScript extends Vue {  
  // 属性就是data
  // items: string[] = ['item1', 'item2']
  items = ['item1', 'item2']
  features: Feature[] = [{id: 1, name: 'wangxiang', desc: 'efijsdiaf'}, {id: 2, name: 'wang123'}]

  addItem(e: KeyboardEvent){
    // e.target是EventTarget类型，需要断言为HTMLInputElement
    const target = e.target as HTMLInputElement
    // const target = e.target
    this.items.push(target.value)
    target.value = ''
  }

  created () {
    console.log('before created:', this.items)
    this.items = ['created item1', 'created item2'];
    console.log('created:', this.items);
    // getFeatures().then(res => {
    //   this.features = res.data
    // })

    this.$axios.get<Feature[]>('/api/list').then(res => {
      this.features = res.data
    });
  }
}
</script>

<style scoped>

</style>