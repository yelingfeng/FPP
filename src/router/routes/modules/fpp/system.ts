// 系统管理
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    icon: 'icon-park-outline:system',
    title: '系统管理',
    orderNo: 9,
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('/@/views/system/user/index.vue'),
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('/@/views/system/role/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'address',
      name: 'Address',
      component: () => import('/@/views/system/address/index.vue'),
      meta: {
        title: '地址管理',
      },
    },
  ],
};

export default system;
