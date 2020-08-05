module List04_01 {
  function test() {
    const testStart = performance.now();

    setTimeout(() => {
      console.log(performance.now() - testStart);
    }, 50);

    const start = +new Date();
    while (true) {
      if (+new Date() - start > 100) {
        break;
      }
    }
  }

  test();
}
