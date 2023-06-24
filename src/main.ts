
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 引入 Element icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
const app = createApp(App);

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//配置公共请求路径
const http = import.meta.env.VITE_HTTP; // 读取 开发 | 生产 环境变量
axios.defaults.baseURL = http; // 配置 axios 请求的地址
app.config.globalProperties.$Imgurl = http; // 配置全局属性

// 这是 element-plus icons 注册的方式
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// mock 数据获取
const getUsers = async () => {
  const res = await axios.get('/api/users');
  console.log(res);
}

getUsers();



app.use(createPinia()).use(router).use(VueAxios, axios).use(ElementPlus).mount("#app");

