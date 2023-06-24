
import { defineConfig } from "vite";
// 用于将 URL 转换为文件路径
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";` // 全局引入 scss 文件
      }
    }
  },

  // 设置别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  },
})