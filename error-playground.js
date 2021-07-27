const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid Arguements");
};

console.log(sum(1));
