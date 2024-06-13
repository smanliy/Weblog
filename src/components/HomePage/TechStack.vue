<script setup>
import { ref } from 'vue'
import ModuleSorted from './ModuleSorted.vue'

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
  <ModuleSorted :accTech="accTech" :accStas="accStas">
    <template #header>
      <div class="tech" @click="ShowTechStack">技术栈</div>
    </template>

    <template #techTail>
      <div class="techs">
        <div>Html</div>
        <div>Css</div>
        <div>JavaScript</div>
        <div>Vue</div>
        <div>TypeScript</div>
      </div>
    </template>

    <template #sts>
      <div class="status" @click="ShowStas">状态管理库</div>
    </template>

    <template #stsDetail>
      <div class="sts">
        <div>Pinia</div>
        <div>Vuex</div>
      </div>
    </template>
  </ModuleSorted>
</template>
<style scoped>
.techs {
  width: 20vw;
  text-align: center;
  line-height: 8vh;
  font-size: 10px;
  background-color: aquamarine;
}
.sts {
  width: 20vw;
  text-align: center;
  line-height: 8vh;
  font-size: 10px;
  background-color: aquamarine;
}
</style>
