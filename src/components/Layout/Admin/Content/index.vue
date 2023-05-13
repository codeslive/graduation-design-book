<template>
  <div class="book-content">
      <div class="book-content__list" ><RouterView></RouterView></div>
  </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref, reactive } from "vue";
  </script>
  
  <style scoped lang="scss">
  @include b(content){
    flex: 1;
    overflow: auto;
    @include e(list){
      padding: 10px;
      margin: 10px;
      // border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  </style>