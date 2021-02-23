import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import Cookies from "js-cookie";

const setUser = (token) => {
  Cookies.set("mytoken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signup", newUser);

      dispatch(setUser(response.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signin", user);

      dispatch(setUser(response.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  Cookies.remove("mytoken");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkToken = () => (dispatch) => {
  const token = Cookies.get("mytoken");
  if (token) {
    const user = decode(token);
    const currtime = Date.now();
    if (currtime < user.exp) {
      dispatch(dispatch(setUser(token)));
    } else {
      signout();
    }
  }
};
