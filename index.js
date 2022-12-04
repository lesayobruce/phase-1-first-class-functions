const receivesAFunction = function (callback) {
    callback();
  };
  receivesAFunction();

  function returnsANamedFunction() {
    return function namedFn() {
      console.log("I'm the returned named function");
    };
  }

  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I'm the returned anonymous function");
    };
  }