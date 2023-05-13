<template>
  <div class="book-box">
    <div>
      <Menu></Menu>
    </div>
    <div class="book-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import Header from "../../components/Layout/Admin/Header/index.vue";
import Menu from "../../components/Layout/Admin/Menu/index.vue";
import Content from "../../components/Layout/Admin/Content/index.vue";
</script>

<style scoped lang="scss">
@include b(box) {
  @include bfc;
  display: flex;

  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>