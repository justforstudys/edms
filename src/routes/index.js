import { Login, Dashboard, NotFound, YearManage } from '../views';

export const minRouter = [
  {
    pathname: '/login',
    component: Login
  },
  {
    pathname: '/404',
    component: NotFound
  }
]

export const adminRouter = [
  {
    pathname: '/console/dashboard',
    component: Dashboard,
    isNav: true,
    icon: 'user',
    title: '桌面池'
  },
  {
    pathname: '/console/yearmanage',
    component: YearManage,
    isNav: true,
    icon: 'video-camera',
    title: '学年管理'
  }
]