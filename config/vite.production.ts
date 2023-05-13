// Vite 构建工具的配置文件
import { defineConfig } from "vite";
// Vite 构建工具的压缩插件
import viteCompression from 'vite-plugin-compression';
// Vite 构建工具的 Vue 插件
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    target: 'es2015', // target 设置打包后的文件格式, 可选值为 'es2015' | 'esnext', 默认为 'esnext'
    rollupOptions: {
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
    chunkSizeWarningLimit: 2000, // chunkSizeWarningLimit 设置打包后的文件大小警告的限制
    cssCodeSplit: true, // cssCodeSplit 设置是否将 css 代码分割成单独的文件
    sourcemap: false, // sourcemap 设置是否生成 sourcemap 文件
    minify: 'terser', // minify 设置是否压缩代码, 可选值为 boolean | 'terser' | 'esbuild', 默认为 terser
    assetsInlineLimit: 4096, // assetsInlineLimit 设置是否将小于指定大小的文件转换为 base64 格式, 默认为 4096, 设置为 0 时则关闭该功能
    outDir: "dist", // outDir 设置打包后的文件夹名称
    assetsDir: "static" // assetsDir 设置静态资源的文件夹名称
  },
  plugins: [
    viteCompression(), // viteCompression 设置压缩插件
    vue()
  ],

});