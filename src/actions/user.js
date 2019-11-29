import actionTypes from './actionTypes';
import userApi from '../api/user/index.js'

export const LoginToToken = ({username, password}) => {
  console.log({username, password});
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: actionTypes.LOGIN_TO_TOKEN,
  //       payload: {
  //         id
  //       }
  //     })
  //   }, 2000);
  // }
  return dispatch => {
    userApi.userLogin({username, password}).then(response => {
      console.log(response)
      dispatch({
        type: actionTypes.LOGIN_TO_TOKEN,
        payload: {
          token: response.data.token
        }
      })
    }).catch(error => {
      console.error(error);
    })
  }
  // return {
  //   type: actionTypes.LOGIN_TO_TOKEN,
  //   payload: {
  //     id
  //   }
  // }
}