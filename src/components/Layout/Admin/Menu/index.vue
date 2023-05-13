<template>
    <div class="book-menu">Menu</div>
</template>
  
  
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
  
<style scoped lang="scss">
@include b(menu) {
    min-width: 200px;
    border-right: 1px solid #ccc;
    height: 100vh;
}
</style>