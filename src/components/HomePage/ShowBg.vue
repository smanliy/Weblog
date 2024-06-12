<script setup>
import ModuleSorted from './ModuleSorted.vue'
</script>

<template>
  <div class="top">
    <div>
      <div class="top_title">灰太狼的狼堡</div>
      <!-- <div id="top_dynamic">立志成为一名优秀的全栈工程师</div> -->
      <!-- <div id="cir_rule"></div> -->
    </div>
  </div>
  <ModuleSorted></ModuleSorted>
  <!-- <SvgIcon IconClass="iconfont"></SvgIcon> -->
</template>

<style scoped>
.top {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: aqua;
  background-image: url('https://typora----magic.oss-cn-beijing.aliyuncs.com/e86c31242fe120a4b444669fdbbeb8de.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}

.top_title {
  font-family: '阿里妈妈东方大楷 Regular';
  width: 550px;
  /* height: 100px; */
  width: 50vw;
  height: 20vh;
  text-align: center;
  line-height: 20vh;
  font-size: 10em;
  color: white;
  background-color: blueviolet;
}
#top_dynamic {
  font-family: '阿里妈妈东方大楷 Regular';
  width: 800px;
  /* height: 80px; */
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  color: white;
  background-color: blue;
}
#cir_rule {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: rgb(10, 10, 10);
}
</style>
