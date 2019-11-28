import actionTypes from '../actions/actionTypes'

const initState = {
  token: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_TO_TOKEN:
      return {
        ...state,
        token: 'newtoken'
      }
    default:
      return state;
  }
}