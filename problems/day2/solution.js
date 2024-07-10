const counter = (n) => {
    let currentVal = n; 
    return function () {
        return ++currentVal;
    }
}

const func = counter(5)
func(); // 6
func(); // 7

function printOutput() {
    console.log(func());
    console.log(func());
}