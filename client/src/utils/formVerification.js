export default class FormValidation {
  constructor(input) {
    this.input = input;
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
}
