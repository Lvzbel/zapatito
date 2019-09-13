export default class FormValidation {
  constructor(input, type = "NAME") {
    this.input = input;
    this.type = type;
    this.result = {
      isValid: null,
      errorMessage: null
    };
    this.sanitizeInput();
  }

  validate() {
    switch (this.type) {
      case "NAME":
        testResult = this.validateName();
        testResult
          ? (this.result = { ...this.result })
          : (this.result = {
              isValid: false,
              errorMessage: "Please enter a valid name"
            });
        break;
      case "PHONE":
        testResult = this.validatePhoneNumber();
        testResult
          ? (this.result = { ...this.result })
          : (this.result = {
              isValid: false,
              errorMessage: "Please enter a valid phone number"
            });
      case "EMAIL":
        testResult = this.validateEmail();
        testResult
          ? (this.result = { ...this.result })
          : (this.result = {
              isValid: false,
              errorMessage: "Please enter a valid phone number"
            });
      default:
        break;
    }

    return this.result;
  }

  // Getter
  input() {
    return this.input;
  }

  // Checks if input is empty should return true if empty
  isEmpty() {
    return this.input === "";
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
