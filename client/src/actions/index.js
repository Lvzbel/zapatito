import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALL,
  FETCH_SHOES,
  FETCH_BACKPACKS,
  FETCH_SHIRTS,
  FETCH_PANTS,
  FETCH_SALE
} from "./types";

const api = "http://localhost:5000/api";

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

// PRODUCT FETCHING
export const fetchAll = () => async dispatch => {
  const response = await fetch(api);
  const data = await response.json();
  dispatch({ type: FETCH_ALL, payload: data.products });
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
  const response = await fetch(`${api}/sale`);
  const data = await response.json();
  dispatch({ type: FETCH_SALE, payload: data });
};
