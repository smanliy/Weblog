<script setup></script>

<template>
  <div class="top">
    <div class="top_title">12345</div>
    <div id="top_dynamic">1111111111111</div>
  </div>
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
  text-align: center;
  font-size: 40px;
  color: white;
  background-color: blueviolet;
}
#top_dynamic {
  font-family: '阿里妈妈东方大楷 Regular';
  text-align: center;
  font-size: 25px;
  color: white;
  background-color: blue;
}
</style>
