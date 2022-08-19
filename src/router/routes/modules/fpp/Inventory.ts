// 库存
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const inventory: AppRouteModule = {
  path: '/inventory',
  name: 'Inventory',
  component: LAYOUT,
  redirect: '/inventory/inventorylist',
  meta: {
    icon: 'carbon:inventory-management',
    title: '库存管理',
    orderNo: 7,
  },
  children: [
    {
      path: 'inventorylist',
      name: 'InventoryList',
      component: () => import('/@/views/inventory/list/index.vue'),
      meta: {
        title: '库存列表',
      },
    },
    {
      path: 'inventoryadd',
      name: 'InventoryAdd',
      component: () => import('/@/views/inventory/add/index.vue'),
      meta: {
        title: '库存录入',
      },
    },
  ],
};

export default inventory;
