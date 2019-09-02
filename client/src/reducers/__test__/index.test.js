import { SIGN_IN, SIGN_OUT } from "../../actions/types";
import authReducer from "../authReducers";

it("handles actions of SIGN_IN", () => {
  const action = {
    type: SIGN_IN,
    payload: { userId: "1234", name: "test" }
  };
  const newState = authReducer({}, action);
  expect(newState.isSignedIn).toEqual(true);
  expect(newState.userId).toEqual("1234");
  expect(newState.name).toEqual("test");
});

it("handles actions of SIGN_OUT", () => {
  const action = { type: SIGN_OUT };
  const newState = authReducer({}, action);
  expect(newState.isSignedIn).toEqual(false);
});
