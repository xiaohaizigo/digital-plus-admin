<template>
  <div class="login-container" ref="vantaRef">
    <!-- 左侧文字 -->
    <div class="login-left">
      <div class="web-title">DIGITAL PLUS ADMIN</div>
      <div class="web-desc">Trading website about digital collections</div>
    </div>
    <!-- 登录卡片 -->
    <div class="login-box">
      <div class="left-carousel">
        <el-carousel :interval="4000" type="card" indicator-position="none" arrow="never" height="300px">
          <el-carousel-item v-for="item in carousel_data" :key="item">
            <img class="carousel-img" :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-card class="right-form">
        <div class="login-title">
          <!-- <img class="login-logo" src="@/assets/img/logo.png"/> -->
          <span class="login-text">系统登录</span>
        </div>
        <LoginForm />
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup name="login">
//登录组件
import LoginForm from "./LoginForm/LoginForm.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.birds";
import { VANTA_RINGS } from "../../config/vanta/config";
import { carousel_data } from "@/config/carousel/data";
const vantaRef = ref(null);
let vantaEffect: any;
onMounted(() => {
  vantaEffect = BIRDS({
    ...VANTA_RINGS,
    el: vantaRef.value,
    THREE: THREE,
  });
});
onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
