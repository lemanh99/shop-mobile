import { userConstants } from "../actions/constants";

const initState = {
  error: "",
  messageInfor: "",
  messagePass: "",
  loading: false,
};



export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case userConstants.CHANGE_INFORMATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.CHANGE_INFORMATION_SUCCESS:
      state = {
        ...initState,
        loading: false,
        messageInfor: action.payload.message,
      };
      break;
    case userConstants.CHANGE_INFORMATION_FAILURE:
      state = {
        ...state,
        loading: false,
        messageInfor: "",
        error: action.payload.error,
      };
      break;
    case userConstants.CHANGE_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      state = {
        ...initState,
        loading: false,
        messagePass: action.payload.message,
        // error: "",
        // messageInfor: "",
      };
      break;
    case userConstants.CHANGE_PASSWORD_FAILURE:
      state = {
        ...state,
        loading: false,
        messagePass: "",
        error: action.payload.error,
      };
      break;
  }
  return state;
};
