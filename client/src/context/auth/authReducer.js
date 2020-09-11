import { LOGIN, LOGOUT, REGISTER } from '../actions';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.removeItem('user');
      return null;
    case LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
