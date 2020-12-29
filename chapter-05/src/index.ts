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
