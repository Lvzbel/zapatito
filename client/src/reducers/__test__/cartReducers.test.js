import { ADD_CART, REMOVE_CART } from "actions/types";
import cartReducers from "reducers/cartReducers";

describe("Testing ADD_CART action", () => {
  it("add a new item to an empty cart", () => {
    const INITIAL_STATE = {
      cartItems: []
    };
    const action = {
      type: ADD_CART,
      payload: { id: 1 }
    };
    const newState = cartReducers(INITIAL_STATE, action);
    expect(newState.cartItems[0].id).toEqual(1);
  });

  it("add a new item to a cart with one item in it", () => {
    const INITIAL_STATE = {
      cartItems: [{ id: 1 }]
    };
    const action = {
      type: ADD_CART,
      payload: { id: 2 }
    };
    const newState = cartReducers(INITIAL_STATE, action);
    expect(newState.cartItems.length).toEqual(2);
    expect(newState.cartItems[0].id).toEqual(1);
    expect(newState.cartItems[1].id).toEqual(2);
  });
});

describe("Testing REMOVE_CART action", () => {
  const INITIAL_STATE = {
    cartItems: [{ id: 1 }, { id: 2 }]
  };

  it("remove item from cart", () => {
    const action = {
      type: REMOVE_CART,
      payload: 1
    };

    const newState = cartReducers(INITIAL_STATE, action);
    expect(newState.cartItems.length).toEqual(1);
    expect(newState.cartItems[0].id).toEqual(2);
  });
});
