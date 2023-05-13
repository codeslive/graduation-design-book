// Vite 构建工具的配置文件
import { defineConfig } from "vite";
// Vite 构建工具的 Vue 插件
import vue from '@vitejs/plugin-vue';
// Vite 构建工具的检查插件, 用于严格要求自己, 提升代码水平, 让错误输出在控制台阻止编译, 强迫自己解决问题
import checker from "vite-plugin-checker";
// 导入 node.js 的 url 模块, 用于处理路径
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  server: {
    port: 8080, // 启动端口
    open: true // 自动打开浏览器
  },
  build: {
    sourcemap: true, // 生成sourcemap文件
  },
  optimizeDeps: {
    exclude: ["node_modules"], // 排除依赖
  },
  plugins: [
    vue(), // 这个配置是 vite-plugin-vue 插件
    checker({
      typescript: true, // 检查 TypeScript 语法
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";` // 全局引入 scss 文件
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});