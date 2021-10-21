<!--
 * @Author: moohao
 * @Date: 2021-10-21 11:46:26
 * @LastEditTime: 2021-10-21 12:49:56
 * @LastEditors: moohao
 * @Description: Home
 * @FilePath: /vue3_vite_template/src/views/Home.vue
-->
<template>
  <Logo></Logo>
</template>

<script>
import Logo from '@/components/Logo.vue'
import axios from '@axios'
import store from '@store'
import { getWxJssdk } from '@api'
export default {
  name: 'Home',
  components: {
    Logo
  },
  setup() {
    console.log(axios)
    console.log(store)
    console.log(getWxJssdk)
    getWxJssdk().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="less">
  .home {
    text-align: center;
  }
</style>