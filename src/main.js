/*
 * @Author: moohao
 * @Date: 2021-10-21 11:40:48
 * @LastEditTime: 2021-10-21 12:26:35
 * @LastEditors: moohao
 * @Description: main
 * @FilePath: /vue3_vite_template/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
