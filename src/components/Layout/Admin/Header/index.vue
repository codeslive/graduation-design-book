<template>
  <div class="book-header">
    <div class="book-header__title">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
        <el-breadcrumb-item v-for="route in breadcrumbRoutes" :key="route.path" :to="route.path">
          {{ route.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';

const pageTitle = ref('');
const router = useRouter();

// 在组件挂载时设置初始页面标题
onMounted(() => {
  pageTitle.value = document.title;
});

// 在路由切换时更新页面标题
router.afterEach((to) => {
  pageTitle.value = to.meta.title || '';
});

// 根据路由生成面包屑导航项
const breadcrumbRoutes = computed(() => {
  const routes = [];
  const matchedRoutes = router.currentRoute.value.matched;
  for (const route of matchedRoutes) {
    if (route.meta.title) {
      routes.push({
        path: route.path,
        meta: route.meta,
      });
    }
  }
  return routes;
});
</script>

<style scoped lang="scss">

@include b(header){
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #409eff;
}
</style>
