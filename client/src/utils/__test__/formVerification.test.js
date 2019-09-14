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

//   it("rejects name with digits on it", () => {
//     const nameWithDigits = new FormValidation("rodrigo777");
//     expect(nameWithDigits.validateName()).toBeFalsy();

//     const nameWithDigits2 = new FormValidation("rodr777igo");
//     expect(nameWithDigits2.validateName()).toBeFalsy();
//   });

//   it("validates email being in the correct format", () => {
//     const validEmail = new FormValidation("rodrigo-coto@gmail.com");
//     expect(validEmail.validateEmail()).toBeTruthy();
//   });

//   it("rejects email not in the correct format", () => {
//     const invalidEmail = new FormValidation("rodrigo-cotogmail.com");
//     expect(invalidEmail.validateEmail()).toBeFalsy();
//   });

//   it("validates phone number in the correct format", () => {
//     const phone1 = new FormValidation("1-888-888-8888");
//     expect(phone1.validatePhoneNumber()).toBeTruthy();

//     const phone2 = new FormValidation("1(888)888-8888");
//     expect(phone2.validatePhoneNumber()).toBeTruthy();

//     const phone3 = new FormValidation("(888)888-8888");
//     expect(phone3.validatePhoneNumber()).toBeTruthy();

//     const phone4 = new FormValidation("8888888888");
//     expect(phone4.validatePhoneNumber()).toBeTruthy();
//   });

//   it("rejects none US phone numbers", () => {
//     const wrongPhone = new FormValidation("503-888-888-8888");
//     expect(wrongPhone.validatePhoneNumber()).toBeFalsy();
//   });
// });

// describe("Test functionality of validate method", () => {
//   it("returns error with invalid name input", () => {
//     const invalidName = new FormValidation("test123");
//     const result = invalidName.validate("NAME");
//     expect(result.isValid).toBeFalsy();
//     expect(result.errorMessage).toEqual("Please enter a valid name");
//   });

//   it("returns a valid name input", () => {
//     const validName = new FormValidation("Rodrigo");
//     const result = validName.validate("NAME");
//     expect(result.isValid).toBeTruthy();
//     expect(result.errorMessage).toBeNull();
//   });

//   it("return error with invalid phone input", () => {
//     const invalidPhone = new FormValidation("234-2343-1234");
//     const result = invalidPhone.validate("PHONE");
//     expect(result.isValid).toBeFalsy();
//     expect(result.errorMessage).toEqual("Please enter a valid phone number");
//   });

//   it("return a valid phone input", () => {
//     const validPhone = new FormValidation("8888888888");
//     const result = validPhone.validate("PHONE");
//     // expect(result.isValid).toBeTruthy();
//     expect(result.errorMessage).toBeNull();
//   });
// });
