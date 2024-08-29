const cancellable = function(fn, args, t) {
  fn(...args)
  const timerId = setInterval(() => {
      fn(...args)
  }, t)
  const cancelFn = () => {
     clearInterval(timerId)
  }
  return cancelFn;
};

function printOutput() {
  const fn = (x) => x * 5;
  cancellable(fn, [2], 20);
}
