import actionTypes from './actionTypes';

export const LoginToToken = (id) => {
  console.log(id);
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

  return {
    type: actionTypes.LOGIN_TO_TOKEN,
    payload: {
      id
    }
  }
}