type Colors = 'Black' | 'White'
type Files = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Ranks = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
  constructor(
    private files: Files,
    private ranks: Ranks
  ) {}

  distanceFrom(position: Position) {
    return {
      ranks: Math.abs(position.ranks - this.ranks)
    }
  }
}

abstract class Piece {
  protected position: Position
  constructor(
    private readonly colors: Colors,
    files: Files,
    ranks: Ranks
  ) {
    this.position = new Position(files, ranks)
  }
  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.ranks < 2 && distance.ranks < 2
  }
}
class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.ranks < 2 && distance.ranks < 2
  }
}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
    ]
  }
}

{
  let set = new Set
  set.add(1).add(2).add(3)
  console.log(set.has(2))
  console.log(set.has(4))
}

{
  class Set {
    has(value: number): boolean {
      return true
    }
    add(value: number): this {
      return this
    }
  }

  class MutableSet extends Set {
    delete(value: number): boolean {
      return true
    }
  }
}

{
  interface Food {
    calories: number
    tasty: boolean
  }
  interface Shusi extends Food {
    salty: boolean
  }
  interface Cake extends Food {
    sweet: boolean
  }
}

{
  interface User {
    name: string
  }
  interface User {
    age: number
  }
  let a: User = {
    name: 'Ashley',
    age: 30
  }
  // interface User<Age extends number> {
    // age: Age
  // }
}

{
  interface Animal {
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
  }

  interface Feline {
    meow(): void
  }

  class Cat implements Animal, Feline {
    name = 'Cat'
    eat(food: string) {
      console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
      console.info('Slept for', hours, 'hours')
    }
    meow() {
      console.info('Meow')
    }
  }

  let cat = new Cat
  cat.eat('aaa')
  cat.sleep(3)
}

{
  class Zebra {
    trot() {}
  }

  class Poodle {
    // trot() {}
    x = 1
  }

  function ambleAround(animal: Zebra) {
    animal.trot()
  }

  function sample(poodle: Poodle) {
    console.log(poodle.x)
  }

  let zebra = new Zebra
  let poodle = new Poodle
  ambleAround(zebra)
  // ambleAround(poodle)
  sample({x: 1})
}

{
  let a = 1999
  function b() {}

  type a = number
  interface b {
    (): void
  }

  class C {}
  let c = new C

  enum E { F, G }
  let e: E = E.F

  type State = {
    [key: string]: string
  }

  class StringDatabase {
    constructor(public state: State = {}) {}
    get(key: string): string | null {
      return key in this.state ? this.state[key]: null
    }
    set(key: string, value: string): void {
      this.state[key] = value
    }
    static from(state: State) {
      let db = new StringDatabase
      for (let key in state) {
        db.set(key, state[key])
      }
      return db
    }
  }

  interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
  }
  interface StringDatabaseConstructor {
    new(state?: State): StringDatabase
    from(state: State): StringDatabase
  }
}

{
  // class MyMap<K, V> {
    // constructor(initialKey: K, initialValue: V) {
    // }
    // get(key: K): V {
    // }
    // set(key: K, value: V): void {

    // }
    // merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V1 | V1> {
    // }
    // static of<K, V>(k: K, v: V):MyMap<K, V> {
    // }
  // }
}

{
  type Constructor<T> = new (...args: any[]) => T

  function withEZDebug<TBase extends Constructor<{name: string}>>(Base: TBase) {
    return class extends Base {
      debug() {
        console.log(this.name)
      }
    }
  }

  class User {
    name = 'hoge'
  }

  const DebugUser = withEZDebug(User)
  const debugUser = new DebugUser()
  debugUser.debug()
}

{
  interface Shoe {
    purpose: string
  }

  class BalletFlat implements Shoe {
    purpose = 'dancing'
  }

  class Boot implements Shoe {
    purpose = 'woodcutting'
  }

  class Sneaker implements Shoe {
    purpose = 'walking'
  }

  let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
      switch (type) {
        case 'balletFlat': return new BalletFlat
        case 'boot': return new Boot
        case 'sneaker': return new Sneaker
      }
    }
  }

  let shoe = Shoe.create('boot')
}

{
  interface BuildableRequest {
    data?: object
    method: 'get' | 'post'
    url: string
  }

  class RequestBuilder2 {
    data?: object
    method?: 'get' | 'post'
    url?: string

    setData(data: object): this & Pick<BuildableRequest, 'data'> {
      return Object.assign(this, {data})
    }

    setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
      return Object.assign(this, {method})
    }

    setURL(url: string): this & Pick<BuildableRequest, 'url'> {
      return Object.assign(this, {url})
    }

    build(this: BuildableRequest) {
      return this
    }
  }

  new RequestBuilder2()
    .setData({})
    .setMethod('post')
    .setURL('bar')
    .build()
}
