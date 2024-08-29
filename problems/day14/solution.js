const cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);
  const cancelFn = () => {
    clearTimeout(timerId);
  };
  return cancelFn;
};

function printOutput() {
  const fn = (x) => x * 5;
  cancellable(fn, [2], 20);
}
