// 食材库管理
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const foods: AppRouteModule = {
  path: '/foods',
  name: 'Foods',
  component: LAYOUT,
  redirect: '/foods/footslist',
  meta: {
    icon: 'dashicons:food',
    title: '食材库管理',
    orderNo: 8,
  },
  children: [
    {
      path: 'foodslist',
      name: 'FoodsList',
      component: () => import('/@/views/foods/list/index.vue'),
      meta: {
        title: '食材库列表',
      },
    },
    {
      path: 'foodsadd',
      name: 'FoodsAdd',
      component: () => import('/@/views/foods/add/index.vue'),
      meta: {
        title: '食材库录入',
      },
    },
  ],
};

export default foods;
