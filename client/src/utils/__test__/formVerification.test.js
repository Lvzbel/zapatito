import FormValidation from "../formVerification";

describe("Test an empty input", () => {
  // Test for empty strings
  it("checks if a string is empty", () => {
    const testEmptyString = new FormValidation("");
    expect(testEmptyString.isEmpty()).toBeTruthy();
  });

  // Sanitize a string to remove spaces and to lowercase input
  test("removes starting spaces, fallowing spaces and lower cases input", () => {
    const sanitizeString = new FormValidation("  Test  ");
    sanitizeString.sanitizeInput();
    expect(sanitizeString.input).toEqual("test");
  });
});
