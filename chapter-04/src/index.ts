{
  function add(a: number, b: number): number {
    return a + b
  }
  console.log(add(1, 2))
  // console.log(add(1, 'a'))

  const greet = (name: string) => 
   `hello ${name}` 
  console.log(greet('taro'))
}

{
  const log = (message: string, userId?: string) => {
    const time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
  }
  log('Page loaded')
  log('User signed in', 'da763be')

  const log2 = (message: string, userId = 'Not signed in') => {
    const time = new Date().toISOString()
    console.log(time, message, userId)
  }
  log2('User clicked on a button', 'da763be')
  log2('User signed out')

  type Context = {
    addId?: string
    userId?: string
  }
  const log3 = (message: string, context: Context = {}) => {
    const time = new Date().toISOString()
    console.log(time, message, context.userId)
  }
  log3('Hello', { addId: 'abc', userId: 'def'})
}

{
  const sum = (numbers: number[]): number =>
    numbers.reduce((total, n) => total + n, 0)
  console.log(sum([1, 2, 3]))

  const sumVariadicSafe = (...numbers: number[]): number =>
      numbers.reduce((total, n) => total + n, 0)
  console.log(sumVariadicSafe(1, 2, 3))
}

{
  const add = (a: number, b: number) =>
    a + b
  console.log(add(10, 20))
  console.log(add.apply(null, [10, 20]))
  console.log(add.call(null, 10, 20))
  console.log(add.bind(null, 10, 20)())
}

{
  const x = {
    a() {
      return this
    }
  }
  x.a()

  // const fancyDate = () =>
    // `${this.getMonth()}`
  // fancyDate.call(new Date)
}
