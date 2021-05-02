import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    role: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: null,

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
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...initState,
        error: action.payload.error,
        loading: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
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
      };
      break;
  }
  return state;
};
