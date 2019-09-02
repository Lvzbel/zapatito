import { SIGN_IN, SIGN_OUT } from "../types";
import { signIn, signOut } from "../index";

describe("Sign In", () => {
  it("has the correct type", () => {
    const action = signIn();
    expect(action.type).toEqual(SIGN_IN);
  });
  it("has the correct payload", () => {
    const id = "1234";
    const name = "test";
    const action = signIn(id, name);
    expect(action.payload.userId).toEqual(id);
    expect(action.payload.name).toEqual(name);
  });
});

describe("Sign out", () => {
  it("has the correct type", () => {
    const action = signOut();
    expect(action.type).toEqual(SIGN_OUT);
  });
});
