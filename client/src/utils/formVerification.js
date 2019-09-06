export default class FormValidation {
  constructor(input) {
    this.input = input;
    this.sanitizeInput();
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
}
