// 订单
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const orders: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/orderlist',
  meta: {
    icon: 'bx:food-menu',
    title: '订单管理',
    orderNo: 2,
  },
  children: [
    {
      path: 'orderlist',
      name: 'OrderList',
      component: () => import('/@/views/order/list/index.vue'),
      meta: {
        title: '订单列表',
      },
    },
    {
      path: 'orderadd',
      name: 'OrderAdd',
      component: () => import('/@/views/order/add/index.vue'),
      meta: {
        title: '订单录入',
      },
    },
  ],
};

export default orders;
