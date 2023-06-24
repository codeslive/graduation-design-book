// Vite 构建工具的配置文件
import { defineConfig } from "vite";
// // Vite 构建工具的 Vue 插件
import vue from '@vitejs/plugin-vue';
// Vite 构建工具的检查插件, 用于严格要求自己, 提升代码水平, 让错误输出在控制台阻止编译, 强迫自己解决问题
import checker from "vite-plugin-checker";
// element-plus 的按需引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 引入 mockjs 插件
import { viteMockServe } from 'vite-plugin-mock';
export default defineConfig({
  server: {
    port: 5173, // 启动端口
    // host: '', // 设置主机地址
    open: false // 自动打开浏览器
  },

  plugins: [
    vue(), // 这个配置是 vite-plugin-vue 插件
    checker({
      typescript: true, // 检查 TypeScript 语法
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()], // AutoImport 设置按需引入插件
    }),
    Components({
      resolvers: [ElementPlusResolver()], // Components 设置按需引入插件
    }),
    viteMockServe() // viteMockServe 设置 mockjs 插件
  ],
});

