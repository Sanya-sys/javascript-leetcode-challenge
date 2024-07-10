const createCounter = (init) => {
  const originalVal = init;
  return {
    increment: () => {
      return ++init;
    },
    decrement: () => {
      return --init;
    },
    reset: () => {
      return (init = originalVal);
    },
  };
};

const counter = createCounter(5);

function printOutput() {
  console.log(counter.increment(),counter.increment(), counter.reset(), counter.decrement());
}
