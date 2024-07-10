const arr = [1, 2, 3];

const map = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i, arr);
  }
  return newArr;
};

const fn = (val) => {
  return val * 2;
};

function printOutput() {
  console.log(map(arr));
}

// map polyfill

// Array.prototype.myMap = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr[i] = cb(this[i], i, this);
//   }
//   return newArr;
// };

// const arr = [1, 2, 3];

// const updatedArr = arr.myMap((e) => {
//   return e * 2;
// });

// console.log(updatedArr);
