const createHelloWorld = () => {
  return function () {
    return "Hello world";
  };
};

const func = createHelloWorld();
func();

function printOutput() {
  console.log(func());
}
