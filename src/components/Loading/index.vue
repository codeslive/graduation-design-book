<template>
  <div class="book-wraps">
    <div ref="bar" class="book-wraps__bar"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
// 设置初始值
let speed = ref<number>(1);
// 获取dom
let bar = ref<HTMLElement>();
// 定时器
let timer = ref<number>(0);

// 开始加载
const startLoading = () => {
  // 获取dom
  let dom = bar.value as HTMLElement;
  // 设置初始值
  speed.value = 1;
  // 设置宽度
  timer.value = window.requestAnimationFrame(function fn() {
    // 判断是否小于99 如果小于90则继续执行
    if (speed.value < 99) {
      // 设置宽度自增
      speed.value += 1;
      // 设置宽度的百分比
      dom.style.width = speed.value + '%';
      // 递归调用 
      timer.value = window.requestAnimationFrame(fn);
    } else {
      // 如果大于99 则停止动画
      speed.value = 1;
      // 停止动画
      window.cancelAnimationFrame(timer.value);
    }
  });

}

// 结束加载
const endLoading = () => {
  let dom = bar.value as HTMLElement;
  setTimeout(() => {
    speed.value = 100;
    dom.style.width = speed.value + '%';
    if(speed.value === 100){
      // 关闭.wraps的高度
      dom.style.height = '0';
    }
  }, 3000);
};

// 暴露方法
defineExpose({
  startLoading,
  endLoading
})
</script>

<style lang="scss" scoped>
@include b(wraps){
  position: fixed;
  top: 0;
  width: 100%;
  height: 2px;
  @include e(bar){
    height: inherit;
    width: 0;
    background: red;
  }
}
</style>