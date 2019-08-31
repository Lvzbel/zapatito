import { SIGN_IN, SIGN_OUT } from "./types";

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
