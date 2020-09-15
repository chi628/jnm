import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/fronted/Home.vue';

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
        component: () => import('../views/fronted/Index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/fronted/About.vue'),
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('../views/fronted/Account.vue'),
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        component: () => import('../views/fronted/Wishlist.vue'),
      },
      {
        path: 'reserve',
        name: 'Reserve',
        component: () => import('../views/fronted/Reserve.vue'),
      },
      {
        path: 'products/:category',
        name: 'Products',
        component: () => import('../views/fronted/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/fronted/Product.vue'),
      },
      {
        path: 'ordercheck',
        name: 'Ordercheck',
        component: () => import('../views/fronted/Ordercheck.vue'),
      },
      {
        path: 'orderinfo',
        name: 'Orderinfo',
        component: () => import('../views/fronted/Orderinfo.vue'),
      },
      {
        path: 'ordersuccess/:orderId',
        name: 'Ordersuccess',
        component: () => import('../views/fronted/Ordersuccess.vue'),
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
];

const router = new VueRouter({
  routes,
});

export default router;
