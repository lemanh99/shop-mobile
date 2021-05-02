import { orderConstants } from "../actions/constants";

const initState = {
  addOrder : false,
  orders: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case orderConstants.GET_ORDER_BY_ID_REQUEST:
      state = {
        ...state,
        addOrder : false,
        loading: true,
      };
      break;
    case orderConstants.GET_ORDER_BY_ID_SUCCESS:
      state = {
        ...initState,
        loading: false,
        orders: action.payload.orders,
      };
      break;
    case orderConstants.GET_ORDER_BY_ID_FAILURE:
      state = {
        ...state,
        addOrder : false,
        loading: false,
        error: action.payload.error,
      };
      break;
    case orderConstants.ADD_ORDER_REQUEST:
      state = {
        ...state,
        addOrder : false,
        loading: true,
      };
      break;
    case orderConstants.ADD_ORDER_SUCCESS:
      state = {
        ...state,
        addOrder : true,
        loading: false,
      };
      break;
    case orderConstants.ADD_ORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }

  return state;
};
