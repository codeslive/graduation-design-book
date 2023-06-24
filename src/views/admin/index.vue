<template>
  <!-- <div class="book-box">
    <div>
      <Menu></Menu>
    </div>
    <div class="book-box__right">
      <AdminHeader></AdminHeader>
      <Content></Content>
    </div>
  </div> -->


  <div class="common-layout admin-layout">
    <el-container>
      <CommonAside></CommonAside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>

import CommonHeader from "@/components/Layout/Admin/CommonHeader/index.vue";
import CommonAside from "@/components/Layout/Admin/CommonAside/index.vue";

</script>

<style scoped lang="scss">
@include b(layout) {}

// @include b(box) {
//   @include bfc;
//   display: flex;

//   @include e(right) {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//   }
// }
</style>