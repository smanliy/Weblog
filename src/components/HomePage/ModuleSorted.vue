<script setup>
import { defineProps, watch } from 'vue'
const props = defineProps({
  accTech: {
    type: Boolean
  },
  accStas: {
    type: Boolean
  }
})

watch(
  () => props.accStas,
  (y) => {
    console.log('管理状态存在性改变', y)
  }
)
</script>
<template>
  <div class="bottom">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="sts"></slot>
    </div>
    <div class="githubIcon">这是github</div>
    <div class="juejinIcon">这是掘金</div>
    <div class="emailIcon">这是邮箱</div>
  </div>
  <div class="test">
    <div v-if="props.accTech"><slot name="techTail"></slot></div>
    <div v-if="props.accStas"><slot name="stsDetail"></slot></div>
  </div>
</template>
<style scoped>
.bottom {
  font-family: '阿里妈妈东方大楷 Regular';
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
}
.test {
  display: flex;
  justify-content: space-around;
  margin-left: 0;
  width: 40vw;
}
</style>
