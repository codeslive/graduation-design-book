<template>
  <div class="book-content">
    <div class="book-content__card">
      <el-card>
        <el-button type="danger">
          <el-icon>
            <Search />
          </el-icon>按条件查询
        </el-button>
      </el-card>
    </div>
    <div class=""></div>
    <!-- 表格数据展示 -->
    <el-table v-loading="loading" element-loading-text="正在加载中……" :data="tableData" border max-height="480"
      class="book-content__table">
      <el-table-column prop="date" label="订单号" align="center" fixed />
      <el-table-column prop="name" label="电话" align="center" />
      <el-table-column prop="state" label="收货人" align="center" />
      <el-table-column prop="city" label="总价" align="center" />
      <el-table-column prop="address" label="是否付款" align="center" />
      <el-table-column prop="address" label="发货单号" align="center" />
      <el-table-column prop="address" label="下单时间" align="center" />
      <el-table-column fixed="right" label="操作" width="180px" align="center">
        <template #default="scope">
          <div class="book-content__operations">
            <el-button type="default"><el-icon>
                <View />
              </el-icon>明细</el-button>
            <el-button type="success">
              <el-icon>
                <Position />
              </el-icon>发货
            </el-button>
          </div>
        </template>
      </el-table-column>

    </el-table>

    <!-- 分页 -->
    <div class="book-content__pagination">
      <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

import {
  View,
  Search
} from '@element-plus/icons-vue'

// loading 加载
const loading = ref(true);

// 
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}


const tableData = ref([
  {
    date: '2016-05-01',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-02',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-03',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-01',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-02',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-01',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-02',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-03',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-01',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },
  {
    date: '2016-05-02',
    name: 'IT工业项目经理成长手记',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    images: 'https://b.codeslive.top/api/public/showImg/7e68bb5e-704d-4654-840b-a7221716042b'

  },


])
</script>

<style scoped lang="scss">
// 最大的容器
@include b(content) {

  @include e(card){
    margin-top: 5px;
    height: 70px;
  }

  // 表格数据
  @include e(table) {
    // margin-top: 30px;
    border-radius: 5px;
    border: 10px;
  }

  // 操作按钮
  @include e(operations) {
    display: flex;
    justify-content: space-around;
  }

  // 分页
  @include e(pagination) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
