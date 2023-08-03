import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import loadingBar from '../../src/utils/Loading/index';
// 声明全局路由
declare module 'vue-router' {
  interface RouteMeta {
    title: string, // 路由标题
    transitionName?: string, // 路由切换动画
    role?: string // 路由权限
  }
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [

    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录',
        transitionName: "animate__fadeIn"
      }
    },

  
    // 后台管理页面
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/index.vue'),
      meta: {
        title: '后台管理',
        transitionName: "animate__fadeIn",
        role: 'G'
      },
      children: [
        {
          path: 'type',
          name: 'type',
          component: () => import('../views/admin/adminType/index.vue'),
          meta: {
            title: '类型管理',
            transitionName: "animate__bounceInLeft",
          }
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/admin/adminProduct/index.vue'),
          meta: {
            title: '商品管理',
            transitionName: "animate__bounceInLeft",
          }
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: () => import('../views/admin/adminCarousel/index.vue'),
          meta: {
            title: '热度图片',
            transitionName: "animate__bounceInLeft",
          }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/admin/adminOrders/index.vue'),
          meta: {
            title: '订单管理',
            transitionName: "animate__bounceInLeft",
          }
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/admin/adminUsers/index.vue'),
          meta: {
            title: '用户列表',
            transitionName: "animate__bounceInLeft",
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/admin/adminRegister/index.vue'),
          meta: {
            title: '管理员添加',
            transitionName: "animate__bounceInLeft",
          }
        },
      ]
    }
  ]

});

// 路由白名单
const whileList = ['/home', '/login', '/home/detail', '/admin', '/admin/product', '/admin/orders', '/admin/users', '/admin/carousel','/admin/type','/admin/register'];

// 路由守卫 开始
router.beforeEach((to, from, next) => {
  // 开启loadingBar
  loadingBar.start();
  // 设置标题
  document.title = to.meta.title as string;
  // 如果存在白名单里面或者token存在则放行
  if (whileList.includes(to.path) || localStorage.getItem('token')) {
    next();
  } else {
    // 否则跳转到登录页面
    next('/login');
  }
});


// 路由守卫 结束
router.afterEach(() => {
  // 关闭loadingBar
  loadingBar.finish();
});


export default router
