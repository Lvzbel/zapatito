import FormValidation from "../formVerification";

describe("Checks if input is empty", () => {
  const emptyInput = new FormValidation();
  it("checks if input is empty", () => {
    const result = emptyInput.validate("");
    expect(result.isValid).toBeFalsy();
    expect(result.errorMessage).toEqual("Input cannot be left empty");
  });
});

describe("Validates NAME input", () => {
  const nameInput = new FormValidation("NAME");

  it("validates name with letter characters only", () => {
    const result = nameInput.validate("rodrigo");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();
  });

  it("validates name with spaces", () => {
    const result = nameInput.validate("rodrigo coto");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();
  });

  it("rejects name with digits on it", () => {
    const result = nameInput.validate("rodrigo777");
    expect(result.isValid).toBeFalsy();
    expect(result.errorMessage).toEqual("Please enter a valid name");
  });
});

describe("Validates EMAIL input", () => {
  const emailInput = new FormValidation("EMAIL");

  it("validates email in the correct format", () => {
    const result = emailInput.validate("rodrigo-coto@gmail.com");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();
  });

  it("rejects email not in the correct format", () => {
    const result = emailInput.validate("rodrigo-cotogmail.com");
    expect(result.isValid).toBeFalsy();
    expect(result.errorMessage).toEqual("Please enter a valid email address");
  });
});

describe("Validates PHONE input", () => {
  const phoneInput = new FormValidation("PHONE");

  it("validates a valid US phone number in different formats", () => {
    let result = phoneInput.validate("1-888-888-8888");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();

    result = phoneInput.validate("1(888)888-8888");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();

    result = phoneInput.validate("(888)888-8888");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();

    result = phoneInput.validate("8888888888");
    expect(result.isValid).toBeTruthy();
    expect(result.errorMessage).toBeNull();
  });

  it("rejects none US phone numbers", () => {
    let result = phoneInput.validate("503-888-888-8888");
    const errorMessage = "Please enter a valid phone number";
    expect(result.isValid).toBeFalsy();
    expect(result.errorMessage).toEqual(errorMessage);

    result = phoneInput.validate("888-8888-8888");
    expect(result.isValid).toBeFalsy();
    expect(result.errorMessage).toEqual(errorMessage);
  });
});
