/*
 * @Author: moohao
 * @Date: 2021-10-21 12:22:33
 * @LastEditTime: 2021-10-21 12:25:39
 * @LastEditors: moohao
 * @Description: store
 * @FilePath: /vue3_vite_template/src/store/index.js
 */
import { createStore } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new createStore({
  state,
  mutations,
  actions,
  getters
})
