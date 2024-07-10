const arr = [1, 2, 3, 4];

const reduce = (arr, init) => {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

const fn = (val, currVal) => {
  val = val + currVal;
  return val;
};

reduce(arr, 0);

function printOutput() {
  console.log(reduce(arr, 0));
}

// // reduce polyfill

// Array.prototype.myReduce = function (cb, init) {
//   let acc = init;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }
//   return acc;
// };

// const arr = [1, 2, 4];
// arr.myReduce((acc, curr) => {
//   acc = acc + curr;
// }, 0);
