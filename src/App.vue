<template>
  <div>
    <!-- 用来显示路由匹配到的组件 -->
    <RouterView #default="{ route, Component }">
      <Transition :enter-active-class="`animate__animated ${route.meta.transitionName}`">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import "animate.css";
</script>

<style lang="scss">

</style>
