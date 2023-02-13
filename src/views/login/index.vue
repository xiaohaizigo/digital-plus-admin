<template>
  <div class="login-container" ref="vantaRef">
    <!-- 左侧文字 -->
    <div class="login-left">
      <div class="web-title">DIGITAL PLUS ADMIN</div>
      <div class="web-desc">Trading website about digital collections</div>
    </div>
    <!-- 登录卡片 -->
    <el-card class="login-box">
      <div class="login-title">
        <!-- <img class="login-logo" src="@/assets/vue.svg"/> -->
        <span class="logo-text">系统登录</span>
      </div>
      <div class="login-form">
        <LoginForm/>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup name="login">
//登录组件
import LoginForm from "./LoginForm/LoginForm.vue"

import { ref,onMounted,onBeforeUnmount} from "vue";
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'
import {VANTA_RINGS} from '../../config/vanta/config'
const vantaRef = ref(null);
let vantaEffect:any;
onMounted(() => {
      vantaEffect=BIRDS({
      ...VANTA_RINGS,
      el:vantaRef.value,
      THREE:THREE
    })
})
onBeforeUnmount(()=>{
  if(vantaEffect){
    vantaEffect.destroy();
  }
})
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>