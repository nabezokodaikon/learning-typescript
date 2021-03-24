{
  const a = 1;
  const b = 'hello';
  const c: boolean[] = [];
  c.push(true);
  c.push(false);
  console.log(a);
  console.log(b);
  console.log(c);
}

{
  // 3 + [1]
  const a = (3).toString() + [1].toString();
  console.log(a);
}

{
  console.log('Hello TypeScript!');
}

{
  const a = 1 + 2;
  console.log(typeof a === 'number');
  const b = a + 3;
  console.log(typeof b === 'number');
  const c = {
    apple: a,
    banana: b,
  };
  console.log(typeof c === 'object');
  const d = c.apple + 4;
  console.log(typeof d === 'number');
}
