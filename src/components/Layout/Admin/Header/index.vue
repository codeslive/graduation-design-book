<template>
  <div class="book-header">Header</div>
</template>
  
  
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
  
<style scoped lang="scss">
@include b(header) {
  height: 60px;
  border-bottom: 1px solid #ccc;
}
</style>