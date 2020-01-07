/*
 * @Author: wangxiang 
 * @Date: 2020-01-05 22:45:32 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-01-07 10:31:24
 */
import Vue from 'vue'
import Router from './mvue-router'
import HelloWorld from '@/components/HelloWorld'
import Communication from '@/components/communication'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/communication',
      name: 'Communication',
      component: Communication
    }
  ]
})