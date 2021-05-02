import { cartConstants } from "./constants";

export const productQuantity = (action, id) => {
  return (dispatch) => {
    dispatch({
      type:
        action === "increase"
          ? cartConstants.INCREASE_QUANTITY
          : cartConstants.DECREASE_QUANTITY,
      payload: id,
    });
    dispatch({
      type: cartConstants.SAVE_SESSION,
    });
  };
};

export const clearProduct = (name) => {
  return (dispatch) => {
    console.log("clear product from quantity ");
    console.log("clear product name", name);
    dispatch({
      type: cartConstants.CLEAR_PRODUCT,
      payload: name,
    });
    dispatch({
      type: cartConstants.SAVE_SESSION,
    });
  };
};
