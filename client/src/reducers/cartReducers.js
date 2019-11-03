import {
  ADD_CART,
  REMOVE_CART,
  CLEAR_CART,
  UPDATE_QUANT_CART
} from "actions/types";

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

    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case UPDATE_QUANT_CART:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity
            };
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
};
