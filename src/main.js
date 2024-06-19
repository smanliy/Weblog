

import { createApp } from 'vue'

import App from './App.vue'
// 全局样式
import '../src/assets/styles/global.css'

// 字体
import '../src/assets/fonts/font.css'

// 图标
import '../src/assets/fonts/iconfont/iconfont.js'
import '../src/assets/fonts/iconfont/iconfont.css'

// Svg组件
import SvgIcon from './assets/fonts/iconfont/SvgIcon.vue'


import { createPinia } from 'pinia'
// import { userStore } from './store/counter.js'


const app = createApp(App)
const pinia = createPinia()
// const store = userStore()
app.component('SvgIcon', SvgIcon)
app.use(pinia)
app.mount('#app')
