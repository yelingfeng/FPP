// 采购路由
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const purchase: AppRouteModule = {
  path: '/purchase',
  name: 'Purchase',
  component: LAYOUT,
  redirect: '/purchase/list',
  meta: {
    icon: 'ant-design:shopping-cart-outlined',
    title: '采购管理',
    orderNo: 1,
  },
  children: [
    {
      path: 'purchaselist',
      name: 'PurchaseList',
      component: () => import('/@/views/purchase/list/index.vue'),
      meta: {
        title: '采购列表',
      },
    },
    {
      path: 'purchaseadd',
      name: 'PurchaseAdd',
      component: () => import('/@/views/purchase/add/index.vue'),
      meta: {
        title: '采购下单',
      },
    },
  ],
};

export default purchase;
