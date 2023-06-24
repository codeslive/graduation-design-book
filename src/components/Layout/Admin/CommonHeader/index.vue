<template>
  <!-- <div class="book-header">
    <div class="book-header__title">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
        <el-breadcrumb-item v-for="route in breadcrumbRoutes" :key="route.path" :to="route.path">
          {{ route.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div> -->
  
    <div class="admin-header">
      <div class="admin-header__leftcontent">
        <el-button size="small" plain @click="handleCollapse">
          <el-icon :size="20">
            <Menu></Menu>
          </el-icon>
        </el-button>
      </div>
      <div class="admin-header__rightcontent">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-image :src="`${AvatarImage}`"></el-image>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Menu } from '@element-plus/icons-vue';
// 导入头像图片
import AvatarImage from '@/assets/images/avatar.webp';

const pageTitle = ref('');
const router = useRouter();

const handleCollapse = () => {
  console.log('handleCollapse');
};

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
@include b(header) {
  // 头部样式
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: antiquewhite;

  @include e(rightcontent) {
    border: none;
    background-color: yellowgreen;
    text-align: center;
    // 头像样式
    & .el-image {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
    }

  }

  @include e(leftcontent) {
    width: 100%;

  }
}
</style>
