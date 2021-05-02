import { useSelector } from "react-redux";
import { cartConstants } from "./constants";

export const loadLocalStorage = (product) => {
  return (dispatch) => {
    // console.log("Adding basket of item");
    dispatch({
      type: cartConstants.LOAD_SESSION,
      payload: { ...product },
    });
  };
};

export const addToCart = (product) => {
  return (dispatch) => {
    // console.log("Adding basket of item");
    dispatch({
      type: cartConstants.ADD_TO_CART,
      payload: { ...product },
    });
    dispatch({
      type: cartConstants.SAVE_SESSION
    })
  };
};

export const getCartNumbers = () => {
  return (dispatch) => {
    // console.log("getting total cart in basket")
    dispatch({
      type: cartConstants.GET_NUMBERS_BASKET,
      // payload: item
    });
    
  };
};
