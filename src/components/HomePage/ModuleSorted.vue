<script setup>
import { userStore } from '@/store/counter'
import one from './one.vue'
import two from './Two.vue'
const store = userStore()
function ShowTechStack() {
  store.accTech = !store.accTech
}
function ShowStas() {
  store.accStas = !store.accStas
}
</script>
<template>
  <!-- 一级目录 -->
  <div class="bottom">
    <div>
      <div @click="ShowTechStack">技术栈</div>
    </div>

    <div>
      <div @click="ShowStas">状态管理库</div>
    </div>
    <div class="githubIcon">这是github</div>
    <div class="juejinIcon">这是掘金</div>
    <div class="emailIcon">这是邮箱</div>
  </div>
  <!-- 二级目录 -->
  <div class="ser-menu">
    <div>
      <one v-if="store.accTech"></one>
    </div>

    <div>
      <two v-if="store.accStas"></two>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped>
.bottom {
  font-family: '阿里妈妈东方大楷 Regular';
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  background-color: blueviolet;
}
.bottom > div {
  text-align: center;
  flex: 1;
}

.ser-menu {
  font-family: '阿里妈妈东方大楷 Regular';
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 20px;
  align-items: center;
}
.ser-menu > div {
  text-align: center;
  flex: 1;
  background-color: cadetblue;
}
</style>
