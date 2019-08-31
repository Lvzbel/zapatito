import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  name: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        name: action.payload.name
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, name: null };
    default:
      return state;
  }
};
