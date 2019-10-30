import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALL,
  FETCH_SHOES,
  FETCH_BACKPACKS,
  FETCH_SHIRTS,
  FETCH_PANTS,
  FETCH_SALE,
  FETCH_ITEM,
  RESET_LOAD,
  SET_PAGE,
  ADD_CART,
  REMOVE_CART
} from "./types";
import FilterProducts from "utils/filterProducts";
const axios = require("axios");

const api = "/api";

// GOOGLE AUTH
export const signIn = (userId, name) => {
  const payload = {
    userId,
    name
  };

  return {
    type: SIGN_IN,
    payload
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// PAGE CHANGE
export const setPage = newPage => {
  return {
    type: SET_PAGE,
    payload: newPage
  };
};

// PRODUCT FETCHING
export const fetchAll = filters => async dispatch => {
  const response = await fetch(api);
  const data = await response.json();
  const testClass = new FilterProducts(data.products);
  const payload = testClass.getProducts(filters);
  dispatch({ type: FETCH_ALL, payload });
};

export const resetLoad = () => async dispatch => {
  dispatch({ type: RESET_LOAD });
};

export const fetchShoes = () => async dispatch => {
  const response = await fetch(`${api}/shoes`);
  const data = await response.json();
  dispatch({ type: FETCH_SHOES, payload: data });
};

export const fetchBackpacks = () => async dispatch => {
  const response = await fetch(`${api}/backpacks`);
  const data = await response.json();
  dispatch({ type: FETCH_BACKPACKS, payload: data });
};

export const fetchShirts = () => async dispatch => {
  const response = await fetch(`${api}/shirts`);
  const data = await response.json();
  dispatch({ type: FETCH_SHIRTS, payload: data });
};

export const fetchPants = () => async dispatch => {
  const response = await fetch(`${api}/pants`);
  const data = await response.json();
  dispatch({ type: FETCH_PANTS, payload: data });
};

export const fetchSale = () => async dispatch => {
  const response = await axios.get(`${api}/sale`);
  dispatch({ type: FETCH_SALE, payload: response.data });
};

export const fetchItem = id => async dispatch => {
  const response = await axios.get(`${api}/item/${id}`);
  dispatch({ type: FETCH_ITEM, payload: response.data });
};

// CART
export const addToCart = item => {
  return {
    type: ADD_CART,
    payload: item
  };
};

export const removeToCart = id => {
  return {
    type: ADD_CART,
    payload: id
  };
};
