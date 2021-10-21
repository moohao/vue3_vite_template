/*
 * @Author: moohao
 * @Date: 2021-10-21 11:49:40
 * @LastEditTime: 2021-10-21 11:50:55
 * @LastEditors: moohao
 * @Description: router
 * @FilePath: /vue3_vite_template/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router