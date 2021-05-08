import { userConstants, authConstants } from "./constants";
import axios from "../helpers/axios";

export const ChangeInformation = (data) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.CHANGE_INFORMATION_REQUEST });
    const res = await axios.put(`customer/${data.id}/change-information`, {
      data,
    });
    if (res.status === 201) {
      const { message, user } = res.data;
      dispatch({
        type: userConstants.CHANGE_INFORMATION_SUCCESS,
        payload: {
          message: message,
        },
      });
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.UPDATE_INFORMATION_SUCCESS,
        payload: {
          user: user,
        },
      });
    } else {
      const { error } = res.data;
      dispatch({
        type: userConstants.CHANGE_INFORMATION_FAILURE,
        payload: {
          error: error,
        },
      });
    }
  };
};

export const ChangePasswordUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.CHANGE_PASSWORD_REQUEST });
    const res = await axios.put(`customer/${data.id}/change-password`, {
      data,
    });
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.CHANGE_PASSWORD_SUCCESS,
        payload: {
          message: message,
        },
      });
    } else {
      const { error } = res.data;
      dispatch({
        type: userConstants.CHANGE_PASSWORD_FAILURE,
        payload: {
          error: error,
        },
      });
    }
  };
};
