// Vite 构建工具的配置文件
import { defineConfig } from "vite";
// Vite 构建工具的压缩插件
import viteCompression from 'vite-plugin-compression';
// Vite 构建工具的 Vue 插件
import vue from '@vitejs/plugin-vue';
// element-plus 的按需引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 用于将 URL 转换为文件路径
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({

  build: {
    sourcemap: false, // 生成sourcemap文件
    target: 'es2015', // target 设置打包后的文件格式, 可选值为 'es2015' | 'esnext', 默认为 'esnext'
    rollupOptions: {
      // rollupOptions 设置打包后的文件配置
      external: [], // external 排除外部依赖, 用于排除不需要打包的依赖
      output: {
        assetFileNames: "[hash].[name].[ext]", // assetFileNames 设置打包后的文件名
        // manualChunks 设置手动分包, 用于将依赖分包, 便于浏览器缓存
        manualChunks: (id: string) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    },
    // 去除 console.log
    terserOptions: {
      compress: {
        drop_console: true, // drop_console 设置是否删除 console.log, 默认为 false, 该配置只在生产环境下生效
        drop_debugger: true, // drop_debugger 设置是否删除 debugger, 默认为 true, 该配置只在生产环境下生效
      },
    },
    chunkSizeWarningLimit: 2000, // chunkSizeWarningLimit 设置打包后的文件大小警告的限制
    cssCodeSplit: true, // cssCodeSplit 设置是否将 css 代码分割成单独的文件
    minify: 'terser', // minify 设置是否压缩代码, 可选值为 boolean | 'terser' | 'esbuild', 默认为 terser
    assetsInlineLimit: 4096, // assetsInlineLimit 设置是否将小于指定大小的文件转换为 base64 格式, 默认为 4096, 设置为 0 时则关闭该功能
    outDir: "dist", // outDir 设置打包后的文件夹名称
    assetsDir: "static" // assetsDir 设置静态资源的文件夹名称
  },
  plugins: [
    viteCompression(), // viteCompression 设置压缩插件
    vue(), // vue 设置 Vue 插件
    AutoImport({
      resolvers: [ElementPlusResolver()], // AutoImport 设置按需引入插件
    }),
    Components({
      resolvers: [ElementPlusResolver()], // Components 设置按需引入插件
    }),
  ],

  // 设置别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  },
});







