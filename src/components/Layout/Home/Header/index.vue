<template>
  <div class="book-header"> 头部</div>
</template>

<script setup lang='ts'>
import { ref } from "vue"

</script>

<style lang="scss" scoped>
@include b(header) {
  height: 60px;
  background-color: yellowgreen;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>