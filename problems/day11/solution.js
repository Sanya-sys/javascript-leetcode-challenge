const memoize = (fn) => {
  let obj = {};
  return function (...args) {
    const values = JSON.stringify(...args);
    if (values in obj) {
      return obj[values];
    } else {
      const result = fn(...args);
      obj[values] = result;
      return result;
    }
  };
};

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 3);

function printOutput() {
  console.log(memoizedFn(2, 3));
  console.log(callCount); // 1
}

// solution using map
// const optimizedSolution = () => {
//     let map = new Map();
//     return function(...args) {
//         const values = JSON.stringify(...args);
//         if(map.has(values)) {
//             return map.get(values)
//         }
//         const result = fn(...args);
//         map.set(values,result);
//         return result;
//     }
// }
