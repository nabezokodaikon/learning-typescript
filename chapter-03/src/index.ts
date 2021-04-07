{
  function squareOf(n: number) {
    return n * n;
  }
  console.log(squareOf(2));
}

{
  const a = 1234;
  const b = Infinity * 0.1;
  const c = 5678;
  const d = a < b;
  const e = 100;
  const f: 26.218 = 26.218;
  // let g: 26.218 = 10;
  const oneMillion = 1_000_000;
  const twoMillion = 2_000_000;
}

{
  const a = Symbol('a');
  const b = Symbol('b');
  // const c = a === b;
  // console.log(c);
  // let d = a + 'x';
  const e = Symbol('e');
  const f: unique symbol = Symbol('f');
  // console.log(e === f);
}

{
  let a: {
    b: number;
    c?: string;
    [key: number]: boolean;
  };

  a = { b: 1 };
  a = { b: 1, c: undefined };
  a = { b: 1, 10: true };
  a = { b: 1, 10: true, 20: false };
  console.log(a[10]);
}

{
  type Age = number;
  type Person = {
    name: string;
    age: Age;
  };

  const age: Age = 55;
  const driver: Person = {
    name: 'James May',
    age: age,
  };

  type Color = 'red';
}

{
  type Cat = { name: string; purrs: boolean };
  type Dog = { name: string; barks: boolean; wags: boolean };
  type CatOrDogOrBoth = Cat | Dog;
  type CatAndDog = Cat & Dog;

  const a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true,
  };

  const b: CatOrDogOrBoth = {
    name: 'Domino',
    barks: true,
    wags: true,
  };

  const c: CatOrDogOrBoth = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true,
  };

  const d: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true,
  };
}
