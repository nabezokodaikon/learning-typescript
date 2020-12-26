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

{
  function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
      yield a;
      [a, b] = [b, a + b]
    }
  }

  const fibonacciGenerator = createFibonacciGenerator()
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())
  console.log(fibonacciGenerator.next())

  function* createNumbers(): Generator<number> {
    let n = 0
    while (1) {
      yield n++
    }
  }
  const numbers = createNumbers();
  console.log(numbers.next())
  console.log(numbers.next())
  console.log(numbers.next())
  console.log(numbers.next())
  console.log(numbers.next())
}

{
  const numbers = {
    *[Symbol.iterator]() {
      for (let n = 1; n <= 10; n++) {
        yield n
      }
    }
  }
  for (let a of numbers) {
    console.log(a)
  }
  const allNumbers = [...numbers]
  console.log(allNumbers)
  const [one, two, ...rest] = numbers 
  console.log(rest)
}

{
  const add = (a: number, b: number): number =>
    a + b
  console.log(add(1, 2)) 

  type Log = (message: string, userId?: string) => void
  let log: Log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
  }
  log('hello')
}

{
  const times = (
    f: (index: number) => void,
    n: number
  ) => {
    for (let i = 0; i < n; i++) {
      f(i)
    }
  }
  times(n => console.log(n), 4)
}

{
  type Log = (message: string, userId?: string) => void
  let log: Log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
  }
  log('hello', 'taro')

  type Reservation = string
  type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
  }
  let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
  ) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
      return from.toISOString()
    } else if (typeof toOrDestination === 'string') {
      return from.toISOString()
    } else {
      return from.toISOString()
    }
  }
  console.log(reserve(new Date(), 'str'))

  // type HTMLAnchorElement = string
  // type HTMLCanvasElement = number
  // type HTMLTableElement = boolean
  // type HTMLElement = bigint
  // type CreateElement = {
    // (tag: 'a'): string
    // (tag: 'canvas'): number
    // (tag: 'table'): boolean
    // (tag: string): bigint
  // }
  // let createAnchor: CreateElement = (tag: 'a' | 'canvas' | 'table' | string): HTMLAnchorElement | HTMLCanvasElement | HTMLTableElement| HTMLElement => {
    // if (tag === 'a') {
      // return 'tag' 
    // } else if (tag === 'canvas') {
      // return 1
    // } else if (tag === 'table') {
      // return true
    // }
    // return 1n
  // }
  // console.log(createAnchor('a'))
}

{
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }
  const filter: Filter = (array, f) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      if (f(item)) {
        result.push(item)
      }
    }
    return result
  }
  console.log(filter([1, 2, 3], _ => _ > 2))
  console.log(filter(['a', 'b'], _ => _ !== 'b'))
  let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' },
  ]
  console.log(filter(names, _ => _.firstName.startsWith('b')))
}

{
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }

  type Filter2<T> = {
    (array: T[], f: (item: T) => boolean): T[]
  }
}

{
  type Map = {
    <T, U>(array: T[], f: (item: T) => U): U[]
  }
  const map: Map = (array, f) => {
    let result = [] 
    for (let i = 0; i < array.length; i++) {
      result[i] = f(array[i]) 
    }
    return result
  }
  console.log(map([1, 2, 3], _ => _.toString()))
}

{
  let promise = new Promise<number>(resolve =>
    resolve(45)
  )
  promise.then(result =>
    console.log(result * 4)
  )
}

{
  // type MyEvent<T> = {
    // target: T
    // type: string
  // }

  // type ButtonEvent = MyEvent<HTMLButtonElement>

  // let myEvent: MyEvent<HTMLButtonElement | null> = {
    // target: document.querySelector('#myButton'),
    // type: 'click'
  // }

  // type TimedEvent<T> = {
    // event: MyEvent<T>
    // from: Date
    // to: Date
  // }

  // function triggerEvent<T>(event: MyEvent<T>): void {
    // console.log('')
  // }

  // triggerEvent({
    // target: document.querySelector('#myButton'),
    // type: 'mouseover'
  // })
}

{
  type TreeNode = {
    value: string
  }
  type LeafNode = TreeNode & {
    isLeaf: true
  }
  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
  }

  let a: TreeNode = { value: 'a' }
  let b: LeafNode = { value: 'b', isLeaf: true }
  let c: InnerNode = { value: 'c', children: [b] }

  let a1 = mapNode(a, _ => _.toUpperCase())
  let b1 = mapNode(b, _ => _.toUpperCase())
  let c1 = mapNode(c, _ => _.toUpperCase())

  function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
  ): T {
    return {
      ...node,
      value: f(node.value)
    }
  }

  type HasSides = { numberOfSides: number }
  type SidesHaveLength = { sideLength: number }

  function logPerimeter<
    Shape extends HasSides & SidesHaveLength
  >(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
  }

  type Square = HasSides & SidesHaveLength
  let square: Square = { numberOfSides: 4, sideLength: 3 }
  logPerimeter(square)

  // function call(
    // f: (...args: unknown[]) => unknown,
    // ...args: unknown[]
  // ): unknown {
    // return f(...args)
  // }

  function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
  }

  function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
  ): R {
    return f(...args)
  }

  console.log(call(fill, 10, 'a'))
}

{
  function is<T>(a: T, ...b: [T, ...T[]]): boolean {
    return b.every(_ => _ === a)
  }

  console.log(is('string', 'otherstring'))
  console.log(is(true, false))
  console.log(is(42, 42))
  console.log(is(1, 1, 1))
  console.log(is(1, 2, 3))
}
