// Vite 构建工具的配置文件
import { defineConfig } from "vite";
// Vite 构建工具的压缩插件
import viteCompression from 'vite-plugin-compression';
// Vite 构建工具的 Vue 插件
import vue from '@vitejs/plugin-vue';
// element-plus 的按需引入插件
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 导入 vite-plugin-cdn-import 插件
import ViteCDNPlugin from 'vite-plugin-cdn-import';

export default defineConfig({
  
  build: {
    sourcemap: false, // 生成sourcemap文件
    target: 'es2015', // target 设置打包后的文件格式, 可选值为 'es2015' | 'esnext', 默认为 'esnext'
    rollupOptions: { // rollupOptions 设置打包后的文件配置
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
    assetsInlineLimit: 409600, // assetsInlineLimit 设置是否将小于指定大小的文件转换为 base64 格式, 默认为 4096, 设置为 0 时则关闭该功能
    outDir: "dist", // outDir 设置打包后的文件夹名称
    assetsDir: "static", // assetsDir 设置静态资源的文件夹名称
  },
  plugins: [
    viteCompression({
      verbose: true, // verbose 设置是否在控制台输出压缩结果
      disable: false, // disable 设置是否禁用压缩插件
      threshold: 1024, // threshold 设置文件大小的阈值, 单位为字节, 默认为 1024
      algorithm: 'gzip', // algorithm 设置压缩算法, 可选值为 'gzip' | 'brotliCompress', 默认为 'gzip'
      ext: '.gz', // ext 设置压缩后的文件后缀名, 默认为 '.gz'
    }), // viteCompression 设置压缩插件
    vue(), // 这个配置是 vite-plugin-vue 插件 vite-plugin-vue 插件能够让我们在 Vue 项目中使用单文件组件

    // AutoImport({
    //   resolvers: [ElementPlusResolver()], // AutoImport 设置 element-plus 按需引入插件
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()], // Components 设置 element-plus 按需引入插件
    // }),

    // cdn 配置, 版本锁定, 防止 cdn 版本更新导致项目报错
    ViteCDNPlugin({
      modules: [
        {
          name: 'axios',
          var: 'axios',
          path: '//cdn.bootcdn.net/ajax/libs/axios/1.4.0/axios.min.js'
        },
        {
          name:"vue",
          var:"Vue",
          path:"//cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.global.prod.js",
        },
        {
          name:"vue-demi",
          var:"VueDemi",
          path:"//unpkg.com/vue-demi@0.14.5"
        },
        {
          name:"element-plus",
          var:"ElementPlus",
          path:"//unpkg.com/element-plus@2.3.4",
          css:"//unpkg.com/element-plus/dist/index.css"
        },
      ]
    })
  ],

});







