

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function login(user) {
 return {
    type:  LOGIN,
    payload: user
 }
}

export function logout () {
 return {
    type: LOGOUT
 }
}

export default function(state = {user: null}, action) {
  switch (action.type) {
      case LOGIN:
      return {...state, user: action.payload};

      case LOGOUT:
      return {...state, user: null };
    default:
      return state;
  }
}
