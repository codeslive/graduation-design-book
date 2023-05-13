<template>
  <div class="login-container">
      <el-card class="box-card" shadow="hover">
        <el-form :label-position="labelPosition" label-width="150px" :model="formLabelAlign" style="max-width: 660px">
          <el-form-item label="Name">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="登录">
            <el-input v-model="formLabelAlign.region" />
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="formLabelAlign.type" />
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('left')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
  password:""
})
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box-card{
  min-width: 400px;
}


</style>
