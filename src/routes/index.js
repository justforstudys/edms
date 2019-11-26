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
    component: Dashboard
  },
  {
    pathname: '/console/yearmanage',
    component: YearManage
  }
]