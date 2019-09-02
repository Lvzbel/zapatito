import { combineReducers } from "redux";
import authReducers from "./authReducers";
import productsReducer from "./productsReducer";

export default combineReducers({
  auth: authReducers,
  products: productsReducer
});
