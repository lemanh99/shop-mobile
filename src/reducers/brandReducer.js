import { brandConstants } from "../actions/constants";

const initState = {
  listBrand: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case brandConstants.GET_ALL_BRAND_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case brandConstants.GET_ALL_BRAND_SUCCESS:
      state = {
        ...initState,
        loading: false,
        listBrand: action.payload.listBrand,
      };
      break;
    case brandConstants.GET_ALL_BRAND_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    }
  return state;
};
