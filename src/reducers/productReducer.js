import { productConstants } from "../actions/constants";
const initialState = {
  product_detail: {},
  loading: false,
  products: [],
};

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        product_detail: {},
      };
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...initialState,
        loading: false,
        products: action.payload.products,
      };
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      return {
        ...initialState,
        product_detail: {},
        loading: false,
        error: action.payload.error,
      };
    case productConstants.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        product_detail: {},
      };
    case productConstants.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product_detail: action.payload.products,
      };
    case productConstants.GET_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        product_detail: {},
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
