import {LOGIN, LOGOUT, SETDARK, SETLIGHT,SELECTEDTYPE} from '../Types';
const intialState = {
  user: {},
  isLogin: false,
  theme: 'light',
};
const reducer = (state = intialState, action) => {
  // console.log(action)
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    }
    case SETDARK: {
      return {
        ...state,
        theme: 'dark',
      };
    }
    case SETLIGHT: {
      return {
        ...state,
        user: {},
        theme: 'light',
      };
    }
    case SELECTEDTYPE: {
     return{ ...state,
path: action.payload
     };
    }
    default:
      return state;
  }
};
export default reducer;
