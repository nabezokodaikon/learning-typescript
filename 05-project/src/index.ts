{
  class Foo {};
  var some = Foo;
  var someOtherVar = 123;
  console.log(some)
}

{
  let something = {foo: 1};
  (function(something) {
    something.foo = 123;
  })(something || (something = {foo: 1}))
}
