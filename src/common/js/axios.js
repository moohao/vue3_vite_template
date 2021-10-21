/*
 * @Author: moohao
 * @Date: 2021-10-21 12:08:09
 * @LastEditTime: 2021-10-21 12:11:41
 * @LastEditors: moohao
 * @Description: axios
 * @FilePath: /vue3_vite_template/src/common/js/axios.js
 */
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://dev.com/api/v1' : 'http://prod.com/api/v1'

export default axios