export default class FormValidation {
  constructor(input) {
    this.input = input;
  }

  isEmpty() {
    return this.input === "";
  }
}

// const test = new FormValidation("");
// console.log(test.isEmpty());
