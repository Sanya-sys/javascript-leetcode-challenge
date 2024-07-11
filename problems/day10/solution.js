const onceFn = (fn) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
const once = onceFn(fn);
once(1, 2, 3);

function printOutput() {
  console.log(once(1, 2, 3));
}


