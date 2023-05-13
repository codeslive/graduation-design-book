import { createVNode, render } from 'vue';
import LoadingBar from "../../components/Loading/index.vue";

// Vnode 用来存储loadingBar组件 createVNode 用来创建虚拟节点 render 用来渲染虚拟节点
const Vnode = createVNode(LoadingBar);

export default {
  // 开启loadingBar
  start() {
    // 渲染loadingBar组件
    render(Vnode, document.body);
    // 调用loadingBar组件的startLoading方法
    Vnode.component?.exposed?.startLoading();
  },
  // 关闭loadingBar
  finish() {
    // 调用loadingBar组件的endLoading方法
    Vnode.component?.exposed?.endLoading();
  },
};
