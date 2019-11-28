import { $http } from '../api.js';


export default {
  //用户登录
  userLogin (data) {
    return $http({
      url: '/userLogin',
      method: 'post',
      data: data
    })
  }
}
