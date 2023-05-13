// Vite 构建工具的配置文件 
import { defineConfig } from 'vite'
// 引入开发环境配置文件
import viteDevConfig from "./config/vite.development";
// 引入生产环境配置文件
import viteProdConfig from "./config/vite.production";

// 策略模式
const envResolver = {
  "serve": () => {
    console.log("当前环境为开发环境, 项目正在运行中……");
    return ({ ...viteProdConfig, ...viteDevConfig });
  },
  "build": () => {
    console.log("当前环境为生产环境, 项目正在打包中……");
    return ({ ...viteProdConfig, ...viteDevConfig });
  }
}

export default defineConfig(({ command, mode }) => {
  // 是 build 或 serve 主要取决于我们敲的命令是开启 开发环境 还是 生产环境
  return envResolver[command]();
});