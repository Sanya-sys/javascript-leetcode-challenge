async function sleep(millis) {
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve()
      }, millis)
  })
  return promise;
}

function printOutput() {
  console.log(sleep(1000));
}