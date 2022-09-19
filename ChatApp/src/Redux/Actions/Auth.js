import {LOGIN, LOGOUT, SETDARK, SETLIGHT} from '../Types';
export const login = payload => {
  return {
    type: LOGIN,
    payload: payload,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
    payload: {uid: ''},
  };
};
export const setDark = payload => {
  return {
    type: SETDARK,
    payload: payload,
  };
};
export const setLight = payload => {
  return {
    type: SETLIGHT,
    payload: payload,
  };
};
