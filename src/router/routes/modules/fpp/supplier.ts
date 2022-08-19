// 供应商管理
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const supplier: AppRouteModule = {
  path: '/supplier',
  name: 'Supplier',
  component: LAYOUT,
  redirect: '/supplier/list',
  meta: {
    icon: 'clarity:employee-group-line',
    title: '供应商管理',
    orderNo: 3,
  },
  children: [
    {
      path: 'supplierlist',
      name: 'SupplierList',
      component: () => import('/@/views/supplier/list/index.vue'),
      meta: {
        title: '供应商列表',
      },
    },
    {
      path: 'supplieradd',
      name: 'supplierAdd',
      component: () => import('/@/views/supplier/add/index.vue'),
      meta: {
        title: '供应商录入',
      },
    },
  ],
};

export default supplier;
