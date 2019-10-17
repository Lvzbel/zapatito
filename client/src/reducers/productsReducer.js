import {
  FETCH_ALL,
  FETCH_SHOES,
  FETCH_BACKPACKS,
  FETCH_SHIRTS,
  FETCH_PANTS,
  FETCH_SALE,
  FETCH_ITEM,
  RESET_LOAD
} from "../actions/types";

const INITIAL_STATE = {
  productsAll: [],
  shopLoading: true,
  productsRecent: [],
  productsShoes: [],
  productsBackpacks: [],
  productsShirts: [],
  productsPants: [],
  productsSale: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        productsAll: action.payload,
        shopLoading: false
      };
    case FETCH_ITEM:
      return {
        ...state,
        productsRecent: action.payload
      };
    case RESET_LOAD:
      return {
        ...state,
        shopLoading: true
      };
    case FETCH_SHOES:
      return {
        ...state,
        productsShoes: action.payload
      };
    case FETCH_BACKPACKS:
      return {
        ...state,
        productsBackpacks: action.payload
      };
    case FETCH_SHIRTS:
      return {
        ...state,
        productsShirts: action.payload
      };
    case FETCH_PANTS:
      return {
        ...state,
        productsPants: action.payload
      };
    case FETCH_SALE:
      return {
        ...state,
        productsSale: action.payload
      };
    default:
      return state;
  }
};
