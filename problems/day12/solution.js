const addTwoPromises = async function (promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  console.log(val1 + val2);
};

function printOutput() {
  const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
  addTwoPromises(promise1, promise2);
}
