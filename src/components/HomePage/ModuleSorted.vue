<script setup>
import { ref, defineAsyncComponent } from 'vue'
const ChargeStatus = defineAsyncComponent(() => import('./ChargeStatus.vue'))
const TechStack = defineAsyncComponent(() => import('./TechStack.vue'))
var accTech = ref(false)
var accStas = ref(false)
function ShowTechStack() {
  accTech.value = !accTech.value
}
function ShowStas() {
  accStas.value = !accStas.value
}
</script>
<template>
  <div class="bottom">
    <div>
      <div class="tech" @click="ShowTechStack">技术栈</div>
    </div>

    <div>
      <div class="status" @click="ShowStas">状态管理库</div>
    </div>

    <div class="githubIcon">这是github</div>
    <div class="juejinIcon">这是掘金</div>
    <div class="emailIcon">这是邮箱</div>
  </div>
  <TechStack v-if="accTech"></TechStack>
  <ChargeStatus v-if="accStas"></ChargeStatus>
</template>
<style scoped>
.bottom {
  font-family: '阿里妈妈东方大楷 Regular';
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  line-height: 10vh;
  background-color: blueviolet;
}
</style>
