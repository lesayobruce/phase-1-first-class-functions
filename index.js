const receivesAFunction = function (callback) {
    callback();
  };
  receivesAFunction();

  function returnsANamedFunction() {
    return function namedFn() {
      console.log("I am the returned named function");
    };
  }

  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am the returned anonymous function");
    };
  }