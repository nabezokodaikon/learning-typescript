{
  function squareOf(n: number) {
    return n * n
  }

  console.log(squareOf(2))
  // console.log(squareOf('z'))

  let a: unknown = 30
  console.log(a === 123)

  // console.log(a + 10)
  if (typeof a === 'number') {
    console.log(a + 10)
  }


  const b = 1234n
  console.log(b);

}

{
  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: 'john',
    lastName: 'barrowman',
  }

  console.log(c)

  class Person {
    constructor(
      public firstName: string,
      public lastName: string,
    ) {}
  }

  c = new Person('matt', 'smith')
  console.log(c)
}

{
  let a: {
    b: number
    c?: string
    [key: number]: boolean
  }

  a = {b: 1}
  a = {b: 1, c: undefined}
  a = {b: 1, c: 'd'}
  a = { b: 1, 10: true }
  a = { b: 1, 10: true, 20: false }
  console.log(a[10])
}

