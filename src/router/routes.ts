import { RouteConfig } from 'vue-router';
import { UserRouteName, UserRoutePath } from '../enums/routes';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: UserRouteName.List,
        path: UserRoutePath.List,
        component: () => import('pages/user/List.vue'),
      },
      {
        name: UserRouteName.Create,
        path: UserRoutePath.Create,
        meta: {
          create: true,
        },
        component: () => import('pages/user/Form.vue'),
      },
      {
        name: UserRouteName.Update,
        path: UserRoutePath.Update,
        meta: {
          update: true,
        },
        component: () => import('pages/user/Form.vue'),
      },
      {
        name: UserRouteName.View,
        path: UserRoutePath.View,
        meta: {
          view: true,
        },
        component: () => import('pages/user/Form.vue'),
      },
      {
        name: UserRouteName.Remove,
        path: UserRoutePath.Remove,
        component: () => import('pages/user/Remove.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
