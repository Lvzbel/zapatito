const desc = (a, b) => {
  // a is less than b by some ordering criterion
  if (a < b) {
    return -1;
  }
  // a is greater than b by the ordering criterion
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
};

const inc = (a, b) => {
  // a is greater than b by some ordering criterion
  if (a > b) {
    return -1;
  }
  // a is less than b by the ordering criterion
  if (a < b) {
    return 1;
  }
  // a must be equal to b
  return 0;
};

export { desc, inc };
