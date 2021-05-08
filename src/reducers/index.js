import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  cartState: cartReducer,
  category: categoryReducer,
  brand: brandReducer,
  product: productReducer,
  order: orderReducer,
  settings: userReducer,
});
