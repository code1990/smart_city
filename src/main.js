import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import router from './router' // 你上面定义的 router
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhLocale from 'element-plus/dist/locale/zh-cn.mjs' // 引入中文语言包
// import zhLocale from 'element-plus/lib/locale/lang/zh-cn.js';
// import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

const app = createApp(App)
app.use(ElementPlus, { locale: zhLocale }); // 使用中文语言包

app.use(store)
app.use(router) // ✅ 必须 use
app.config.globalProperties.$axios = axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')


