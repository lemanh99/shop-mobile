import { productConstants } from "./constants";
import axios from "../helpers/axios";

export const getListProduct = () => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });
    const res = await axios.get(`/product/all`);
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: {
          products: data,
        },
      });
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
export const getProductById = (id) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_BY_ID_REQUEST });
    const res = await axios.get(`/product/detail/${id}`);
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
        payload: {
          products: { ...data },
        },
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getProductByBrand = (id) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });
    const res = await axios.get(`/product-by-brand/${id}`);
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: {
          products: data,
        },
      });
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getProductByCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });
    const res = await axios.get(`/product-by-category/${id}`);
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: {
          products: data,
        },
      });
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getSearch = (name) => {
  return async (dispatch) => {
    console.log("nae", name);
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });
    const res = await axios.get(`/product/search?name=${name}`);
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: {
          products: data,
        },
      });
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};





