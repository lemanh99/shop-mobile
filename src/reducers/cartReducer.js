import { cartConstants } from "../actions/constants";

const initialState = {
  cart: 0,
  cartPrice: 0,
  products: {},
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      console.log(action.type);
      productSelected = { ...action.payload };
      if (state.products[action.payload._id]) {
        productSelected.quantity_buy =
          state.products[action.payload._id].quantity_buy + 1;
      } else {
        productSelected.quantity_buy = 1;
      }
      console.log(productSelected.quantity_buy);
      productSelected.inCart = true;
      productSelected.price_discount =
        productSelected.price -
        (productSelected.discount * productSelected.price) / 100;
      
      return {
        ...state,
        cart: state.cart + 1,
        cartPrice: state.cartPrice + productSelected.price_discount,
        products: {
          ...state.products,
          [action.payload._id]: productSelected,
        },
      };
    case cartConstants.GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case cartConstants.INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.quantity_buy += 1;
      productSelected.price_discount =
      productSelected.price -
      (productSelected.discount * productSelected.price) / 100;
      return {
        ...state,
        cart: state.cart + 1,
        cartPrice: state.cartPrice + state.products[action.payload].price_discount,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case cartConstants.DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartPrice = 0;
      let newCartNumbers = 0;
      productSelected.price_discount =
      productSelected.price -
      (productSelected.discount * productSelected.price) / 100;
      
      if (productSelected.quantity_buy === 0) {
        productSelected.quantity_buy = 0;
        newCartPrice = state.cartPrice;
        newCartNumbers = state.cart;
      } else {
        productSelected.quantity_buy -= 1;
        newCartPrice = state.cartPrice - state.products[action.payload].price_discount;
        newCartNumbers = state.cart - 1;
      }
      return {
        ...state,
        cart: newCartNumbers,
        cartPrice: newCartPrice,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case cartConstants.CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.quantity_buy;
      productSelected.price_discount =
      productSelected.price -
      (productSelected.discount * productSelected.price) / 100;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        cartPrice: state.cartPrice - numbersBackup * productSelected.price_discount,
        cart: state.cart - numbersBackup,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case cartConstants.SAVE_SESSION:
        localStorage.setItem("cart", JSON.stringify({...state}));
        return {...state}
    case cartConstants.CLEAR_SESSION:
        localStorage.removeItem("cart")
        return {...initialState}
    case cartConstants.LOAD_SESSION:
        return {...action.payload}
    default:
      return state;
  }
};
