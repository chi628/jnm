import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/fronted/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/fronted/layout/Index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/fronted/layout/About.vue'),
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/fronted/layout/Account.vue'),
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        component: () => import('@/views/fronted/page/Wishlist.vue'),
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/fronted/page/Coupons.vue'),
      },
      {
        path: 'reserve',
        name: 'Reserve',
        component: () => import('@/views/fronted/layout/Reserve.vue'),
      },
      {
        path: 'products/:category',
        name: 'Products',
        component: () => import('@/views/fronted/layout/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/fronted/layout/Product.vue'),
      },
      {
        path: 'orderhistory',
        name: 'Orderhistory',
        component: () => import('@/views/fronted/page/Orderhistory.vue'),
      },
      {
        path: 'ordercheck',
        name: 'Ordercheck',
        component: () => import('@/views/fronted/page/Ordercheck.vue'),
      },
      {
        path: 'orderinfo',
        name: 'Orderinfo',
        component: () => import('@/views/fronted/page/Orderinfo.vue'),
      },
      {
        path: 'ordersuccess/:orderId',
        name: 'Ordersuccess',
        component: () => import('@/views/fronted/page/Ordersuccess.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/fronted/Login.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'storage',
        name: 'Storage',
        component: () => import('../views/backend/Storage.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
