<template>
  <div class="book-box">
    <div class="book-box__page">
      <!-- <Header></Header> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
// import Header from "../../components/Layout/Home/Header/index.vue";

</script>

<style lang="scss" scoped>
@include b(box) {
  @include bfc;
  display: flex;

  @include e(page) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>