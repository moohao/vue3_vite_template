/*
 * @Author: moohao
 * @Date: 2021-10-21 11:40:48
 * @LastEditTime: 2021-10-21 12:42:18
 * @LastEditors: moohao
 * @Description: vite
 * @FilePath: /vue3_vite_template/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@axios": path.resolve(__dirname, "src/common/js/axios.js"),
      "@store": path.resolve(__dirname, "src/store/index.js"),
      "@api": path.resolve(__dirname, "src/api/index.js")
    }
  }
})
