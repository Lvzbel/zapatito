export default class FormValidation {
  constructor(type = "NAME") {
    this.input = "";
    this.type = type;
    this.result = {
      isValid: null,
      errorMessage: null
    };
  }

  validate(input) {
    // Set input before validating
    this.input = input;
    this.sanitizeInput();

    // check if empty and return error
    this.isEmpty();
    // exit early if is empty
    if (this.stringIsEmpty) return this.result;

    let testResult;
    switch (this.type) {
      case "NAME":
        testResult = this.validateName();
        testResult
          ? (this.result = { ...this.result, isValid: testResult })
          : (this.result = {
              isValid: false,
              errorMessage: "Please enter a valid name"
            });
        break;
      case "PHONE":
        testResult = this.validatePhoneNumber();
        testResult
          ? (this.result = { ...this.result, isValid: testResult })
          : (this.result = {
              isValid: false,
              errorMessage: "Please enter a valid phone number"
            });
        break;
      case "EMAIL":
        testResult = this.validateEmail();
        testResult
          ? (this.result = { ...this.result, isValid: testResult })
          : (this.result = {
              isValid: false,
              errorMessage: "Please enter a valid email address"
            });
        break;
      default:
        break;
    }

    return this.result;
  }

  // Checks if input is empty
  isEmpty() {
    if (this.input.length === 0) {
      // Set error message
      this.result = {
        isValid: false,
        errorMessage: "Input cannot be left empty"
      };
      // set error string boolean
      this.stringIsEmpty = true;
    }
  }

  // Removes leading spaces and lower cases input
  sanitizeInput() {
    this.input = this.input.trim().toLowerCase();
  }

  // validates names
  validateName() {
    const regex = /^[A-Za-z\s]+?[A-Za-z]$/;
    return regex.test(this.input);
  }

  // validates emails
  validateEmail() {
    const regex = /^[\w-?]+@[\w]+\.[a-zA-Z]{2,4}$/;
    return regex.test(this.input);
  }

  // validate phone number
  validatePhoneNumber() {
    const regex = /^1?(\s?|-?)(\(?|-?)[\d]{3}(\)?|-?|\s)[\d]{3}(-?|\s)[\d]{4}$/;
    return regex.test(this.input);
  }
}
