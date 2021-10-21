/*
 * @Author: moohao
 * @Date: 2021-10-21 12:39:29
 * @LastEditTime: 2021-10-21 12:41:55
 * @LastEditors: moohao
 * @Description: api
 * @FilePath: /vue3_vite_template/src/api/index.js
 */
import axios from '@axios'

export const getWxJssdk = () => {
  return axios.get('/wxjssdk')
}