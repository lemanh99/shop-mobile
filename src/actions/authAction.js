import axios from "../helpers/axios";
import { authConstants, cartConstants } from "./constants";
export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    try {
      dispatch({
        type: authConstants.REGISTER_REQUEST,
      });
      const res = await axios.post(`/signup`, {
        ...user,
      });

      if (res.status === 201) {
        const { message } = res.data;
        dispatch({
          type: authConstants.REGISTER_SUCCESS,
          payload: { message },
        });
        dispatch(signin(user));
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.REGISTER_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    } catch (error) {}
  };
};

export const signin = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });

    const res = await axios.post(`/signin`, {
      ...user,
    });

    if (res.status === 400) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
    if(res.status === 204){
      const { error } = res.data;
      dispatch({
        type: authConstants.AUTH_BLOCK,
        payload: {
          error: error
        }
      })
    }
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });

    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: " Please login first",
        },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/signout`);
    try {
      if (res.status === 200) {
        localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS });
        dispatch({
          type: cartConstants.CLEAR_SESSION,
        });
      } else {
        dispatch({
          type: authConstants.LOGOUT_FAILURE,
          payload: res.data.error,
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: error,
      });
    }
  };
};
