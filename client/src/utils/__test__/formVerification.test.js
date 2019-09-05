import FormValidation from "../formVerification";

describe("Test an empty input", () => {
  const test1 = new FormValidation("");

  test("works", () => {
    expect(test1.isEmpty()).toEqual(true);
  });
});
