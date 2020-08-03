module list02_05 {
  const add = (a: number, b: number) => {
    return a + b;
  }

  interface CallsFunction {
    (cb: (result: string) => any): void;
  }

  const callsFunction: CallsFunction = cb => {
    cb('Done');
    // cb(1);
  }

  callsFunction(result => {
    return result;
  });
}
