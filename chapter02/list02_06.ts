module list02_06 {
  const example = [{
    a: 'A',
    b: 1,
    c: true
  }];

  for (let i = 0; i < example.length; i++) {
    const value = example[i];

    console.log(value.a);
    console.log(value.b);
    console.log(value.c);
  }
}
