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

{
  type Age = number

  type Person = {
    name: string
    age: Age
  }

  let age = 55

  let driver: Person = {
    name: 'James May',
    age: age
  }

  console.log(driver)

  type Color = 'red'

  let x = Math.random() < .5

  if (x) {
    type Color = 'blue'
    let b: Color = 'blue'
    console.log(b)
  } else {
    let c: Color = 'red'
    console.log(c)
  }
}

{
  type Cat = { name: string, purrs: boolean }
  type Dog = { name: string, barks: boolean, wags: boolean }
  type CatOrDogOrBoth = Cat | Dog
  type CatAndDog = Cat & Dog

  // Cat
  let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true,
  }
  console.log(a)

  a = {
    name: 'Domino',
    barks: true,
    wags: true,
  }
  console.log(a)

  a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true,
  }
  console.log(a)

  let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true,
  }
  console.log(b);

  type Returns = string | null
  function trueOrNull(isTrue: boolean): Returns {
    if (isTrue) {
      return 'true'
    } else {
      return null
    }
  }
  console.log(trueOrNull(true))

  function hoge(a: string, b: number) {
    return a || b
  }
  console.log(hoge('aaa', 1))
  console.log(hoge('', 1))
}

{
  let a = [1, 2, 3]
  console.log(a)
  let b = ['a', 'b']
  console.log(b)
  let c: string[] = ['a']
  console.log(c)
  let d = [1, 'a']
  console.log(d)
  const e = [2, 'b']
  console.log(e)

  let f = ['red']
  let f2 = [...f, 'blue']
  console.log(f2)
  // f.push(true)

  let g = []
  g.push(1)
  g.push('red')
  console.log(g)

  let h: number[] = []
  h.push(1)
  // h.push('red')
  console.log(h)

  let d2 = d.map(_ => {
    if (typeof _ === 'number') {
      return _ * 3
    }
    return _.toUpperCase()
  })
  console.log(d2)

  function buildArray() {
    let a = []
    a.push(1)
    a.push('x')
    return a
  }
  let myArray = buildArray()
  // myArray.push(true)
  console.log(myArray)
}
