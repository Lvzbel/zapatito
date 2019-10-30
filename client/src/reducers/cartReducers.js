import { ADD_CART, REMOVE_CART } from "actions/types";

const INITIAL_STATE = {
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
