import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    picture: "",
    role: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: null,
  block: false,
};

export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case authConstants.REGISTER_REQUEST:
      state = {
        ...initState,
      };
      break;
    case authConstants.REGISTER_SUCCESS:
      state = {
        ...initState,
        message: action.payload.message,
      };
      break;
    case authConstants.REGISTER_FAILURE:
      state = {
        ...initState,
        error: action.payload.error,
        loading: false,
      };
      break;
    case authConstants.REGISTER_REQUEST:
      state = {
        ...state,
        authenticating: true,
        block: false,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        authenticate: true,
        authenticating: false,
        block: false,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...initState,
        error: action.payload.error,
        loading: false,
        block: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
        block: false,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
        message: "Logout Success",
      };

      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        block: false,
      };
      break;
    case authConstants.AUTH_BLOCK:
      state = {
        ...initState,
        block: true,
      };
    case authConstants.UPDATE_INFORMATION_SUCCESS:
      state = {
        ...state,
        message: "",
        error: "",
        user: action.payload.user,
        loading: false,
      };
      break;
  }
  return state;
};
