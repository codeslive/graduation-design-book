<template>
  <div class="book-content">
    <RouterView></RouterView>
  </div>
</template>
  
  
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
  
<style scoped lang="scss">
@include b(content) {
  flex: 1;
  overflow: auto;
  height: 100%;
  width: 98%;
  margin: 0 auto;
}
</style>