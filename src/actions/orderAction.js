import { cartConstants, orderConstants } from "./constants";
import axios from "../helpers/axios";

export const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.GET_ORDER_BY_ID_REQUEST });
    const res = await axios.get(`/order/all`);
    if (res.status === 200) {
      console.log(res.data);
      const { data } = res.data;
      dispatch({
        type: orderConstants.GET_ORDER_BY_ID_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } else {
      dispatch({
        type: orderConstants.GET_ORDER_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addOrder = (typePayment) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let productDetails = [];
  Object.keys(cart.products).forEach(function (item) {
    if (cart.products[item].inCart) {
      var product = {
        productId: cart.products[item]._id,
        payablePrice:
          cart.products[item].price -
          (cart.products[item].price * cart.products[item].discount) / 100,
        purchasedQty: cart.products[item].quantity_buy,
      };
      productDetails.push(product);
    }
  });
  const data = {
    totalAmount: Math.round(cart.cartPrice),
    paymentStatus: typePayment!==2?"pending":"completed",
    productDetail: productDetails,
  };
  return async (dispatch) => {
    dispatch({ type: orderConstants.ADD_ORDER_REQUEST });
    const res = await axios.post(`/addOrder`, { ...data });
    if (res.status === 201) {
      dispatch({
        type: orderConstants.ADD_ORDER_SUCCESS,
      });
      dispatch({
        type: cartConstants.CLEAR_SESSION,
      });
    } else {
      dispatch({
        type: orderConstants.ADD_ORDER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getOrderById = (id) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.GET_ORDER_BY_ID_REQUEST });
    console.log("id", id);
    const res = await axios.get(`/order/${id}`);
    if (res.status === 200) {
      const { orders } = res.data;
      dispatch({
        type: orderConstants.GET_ORDER_BY_ID_SUCCESS,
        payload: {
          orders: [ ...orders ],
        },
      });
    } else {
      dispatch({
        type: orderConstants.GET_ORDER_BY_ID_SUCCESS,
        payload: { error: res.data.error },
      });
    }
  };
};


export const orderDeliveryed = (id) => {
  
  return async (dispatch) => {
    console.log('id', id)
    const res = await axios.post(`/confirm-delivered/${id}`);
    if (res.status === 201) {
      dispatch(getOrderById());
    } else {
      const { error } = res.data;
      console.log(error);
    }
  };
};
