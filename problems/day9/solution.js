const argumentsLength = (...args) => {
  return args.length;
};

argumentsLength(1, 2, 3);

function printOutput() {
  console.log(argumentsLength(1, 2, 3));
}
