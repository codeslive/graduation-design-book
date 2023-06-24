
import { defineConfig } from "vite";
// 用于将 URL 转换为文件路径
import { fileURLToPath, URL } from 'node:url';
// 引入 postcss-preset-env 插件
const postcssPresetEnv = require('postcss-preset-env');
// Vite 构建工具的检查插件, 用于严格要求自己, 提升代码水平, 让错误输出在控制台阻止编译, 强迫自己解决问题
import checker from "vite-plugin-checker";

export default defineConfig({
  optimizeDeps: {
    exclude: [''] // 将指定数组中的依赖排除, 用于排除不需要打包的依赖
  },

  plugins:[
    checker({
      typescript: true, // 检查 TypeScript 语法
    })
  ],

  css: {

    modules: {
      localsConvention: 'camelCaseOnly', // 设置 css 的类名格式为驼峰式
      scopeBehaviour: 'local' // 配置当前的模块化配置对象的 key 的展示形式 是驼峰式还是原样式
    },

    preprocessorOptions: { // preprocessorOptions 设置 css 预处理器的配置
      // 配置scss 处理器
      scss: {
        math: 'always', // 设置 scss 文件中的计算方式为 always
        globalVars: {
          '$color': '#fff' // 设置 scss 文件中的全局变量
        },
        additionalData: `@import "./src/bem.scss";` // 全局引入 scss 文件
      },
      // 配置less 处理器
      less: {
        math: 'always', // 设置 less 文件中的计算方式为 always
        globalVars: {
          '$color': '#fff' // 设置 less 文件中的全局变量
        },
      },

    },
    devSourcemap: true, // 开启css的sourcemap, 相当于文件索引
    // 配置 postcss
    postcss: {
      plugins: [postcssPresetEnv()] 
    },
  },

  // 设置别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  },
})