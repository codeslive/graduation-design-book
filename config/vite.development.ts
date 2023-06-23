// Vite 构建工具的配置文件
import { defineConfig } from "vite";
// Vite 构建工具的 Vue 插件
import vue from '@vitejs/plugin-vue';
// Vite 构建工具的检查插件, 用于严格要求自己, 提升代码水平, 让错误输出在控制台阻止编译, 强迫自己解决问题
import checker from "vite-plugin-checker";
// element-plus 的按需引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 用于将 URL 转换为文件路径
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  server: {
    port: 5173, // 启动端口
    host: '',
    open: false // 自动打开浏览器
  },

  plugins: [
    vue(), // 这个配置是 vite-plugin-vue 插件
    checker({
      typescript: true, // 检查 TypeScript 语法
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  },
});

