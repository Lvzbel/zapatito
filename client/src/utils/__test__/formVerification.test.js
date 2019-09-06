import FormValidation from "../formVerification";

describe("Test an empty input", () => {
  // Test for empty strings
  it("checks if a string is empty", () => {
    const testEmptyString = new FormValidation("");
    expect(testEmptyString.isEmpty()).toBeTruthy();
  });

  // Sanitize a string to remove spaces and to lowercase input
  it("removes starting spaces, fallowing spaces and lower cases input", () => {
    const sanitizeString = new FormValidation("  Test  ");
    expect(sanitizeString.input).toEqual("test");
  });

  it("validates name with letter characters only", () => {
    const name = new FormValidation("rodrigo");
    expect(name.validateName()).toBeTruthy();
  });

  it("rejects name with digits on it", () => {
    const nameWithDigits = new FormValidation("rodrigo777");
    expect(nameWithDigits.validateName()).toBeFalsy();

    const nameWithDigits2 = new FormValidation("rodr777igo");
    expect(nameWithDigits2.validateName()).toBeFalsy();
  });

  it("validates email being in the correct format", () => {
    const validEmail = new FormValidation("rodrigo-coto@gmail.com");
    expect(validEmail.validateEmail()).toBeTruthy();
  });

  it("rejects email not in the correct format", () => {
    const invalidEmail = new FormValidation("rodrigo-cotogmail.com");
    expect(invalidEmail.validateEmail()).toBeFalsy();
  });
});
