import actionTypes from '../actions/actionTypes'

const initState = {
  token: ''
}

export default (state = initState, action) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.LOGIN_TO_TOKEN:
      return Object.assign({}, state, {token: action.payload.token});
    default:
      return state;
  }
}