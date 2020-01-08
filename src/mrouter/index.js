/*
 * @Author: wangxiang 
 * @Date: 2020-01-05 22:45:32 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-01-07 15:37:04
 */
import Vue from 'vue'
import Router from './mvue-router'
import Home from '@/views/Home'
import Communication from '@/components/communication'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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