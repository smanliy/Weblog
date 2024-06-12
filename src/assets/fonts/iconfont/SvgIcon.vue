<script setup>
import '../iconfont/iconfont.css'
import '../iconfont/iconfont.js'
import { computed } from 'vue'
const props = defineProps({
  IconClass: {
    type: String,
    required: true
  },
  SvgClass: {
    type: String,
    default: ''
  }
})
console.log(props.IconClass) //iconfont
const IconClass = computed(() => {
  return `#${props.IconClass}`
})
const SvgClass = computed(() => {
  if (props.SvgClass) {
    return `SvgClass ${props.SvgClass}`
  }
  return 'SvgClass'
})
</script>
<template>
  <svg :class="SvgClass" aria-hidden="true">
    <use :xlink:href="IconClass"></use>
  </svg>
</template>
<style scoped>
.SvgClass {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}
</style>
