import axios from "../helpers/axios";
import { brandConstants } from "./constants";


export const getListBrand = () => {
  return async (dispatch) => {
    dispatch({ type: brandConstants.GET_ALL_BRAND_REQUEST });
    const res = await axios.get(`/brand/all`);
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: brandConstants.GET_ALL_BRAND_SUCCESS,
        payload: {
          listBrand: data,
        },
      });
    } else {
      dispatch({
        type: brandConstants.GET_ALL_BRAND_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};