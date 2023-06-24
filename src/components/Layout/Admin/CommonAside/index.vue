<template>
    <div class="book-menu">
        <el-radio-group style="margin-bottom: 20px">
        </el-radio-group>
        <el-menu class="el-menu-vertical-demo" router>
            <el-menu-item v-for="item in menuList" :index="item.path" :key="item.id">
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                <template #title>{{ item.title }}</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
  
  

<script setup lang="ts">
import { ref, reactive } from "vue";
// 导入 Element Plus Icon组件
import {
    PictureFilled,
    UserFilled,
    Management,
    GoodsFilled,
    List,

} from '@element-plus/icons-vue'

// 菜单列表
const menuList = [
    {
        id: 1,
        title: '类型管理',
        icon: Management,
        path: '/admin/type'
    },
    {
        id: 2,
        title: '商品管理',
        icon: GoodsFilled,
        path: '/admin/product'
    },
    {
        id: 3,
        title: '热点图片',
        icon: PictureFilled,
        path: '/admin/carousel'
    },
    {
        id: 4,
        title: '订单发货',
        icon: List,
        path: '/admin/orders'
    },
    {
        id: 5,
        title: '用户列表',
        icon: PictureFilled,
        path: '/admin/users'
    },
    {
        id: 6,
        title: '管理员添加',
        icon: UserFilled,
        path: '/admin/register'
    }
]

</script>
  
<style scoped lang="scss">
@include b(menu) {
    min-width: 250px;
    border-right: 1px solid #ccc;
    height: 100vh;

    @include e(title) {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        background-color: #409EFF;
    }
}
</style>


