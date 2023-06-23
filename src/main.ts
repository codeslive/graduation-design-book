
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// 引入 Element Plus
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';

//配置公共请求路径
const http = import.meta.env.VITE_HTTP; // 读取 开发 | 生产 环境变量
axios.defaults.baseURL = http; // 配置 axios 请求的地址
app.config.globalProperties.$Imgurl = http; // 配置全局属性

app.use(createPinia()).use(router).use(VueAxios, axios).mount("#app");

