import { combineReducers } from "redux";
import authReducers from "./authReducers";
import productsReducer from "./productsReducer";
import cartReducers from "./cartReducers";

export default combineReducers({
  auth: authReducers,
  products: productsReducer,
  cart: cartReducers
});
