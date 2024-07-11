const functionComp = (functions) => {
  return function (x) {
    let value = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      value = functions[i](value);
    }
    return value;
  };
};

const fn = functionComp([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
fn(4);

function printOutput() {
  console.log(fn(4));
}
