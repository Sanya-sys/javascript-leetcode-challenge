const arr = [1,3,4,5,0,8]

const filter = (arr) => {
    const newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(fn(arr[i], i , arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const fn = (val) => {
    return val>2;
}

function printOutput() {
    console.log(filter(arr));
}


// filter polyfill

// Array.prototype.myFilter = function(cb) {
//     let newArr = []
//     for(let i=0;i< this.length; i++) {
//         if(cb(this[i], i , this)) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// const arr = [1,2,4,5];

// const filteredArr = arr.myFilter((num, i, arr) => {
//    return num > 2
// })

// console.log('filtered array', filteredArr);

