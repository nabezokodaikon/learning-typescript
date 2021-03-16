{
  const num: number = 123;
  function identity(num: number): number {
    return num;
  }
}

{
  let num: number;
  let str: string;
  let bool: boolean;

  num = 123;
  num = 123.456;
}

{
  let boolArray: boolean[];
  boolArray = [true, false];
  console.log(boolArray[0]);
  console.log(boolArray.length)
}

{
  interface Name {
    first: string;
    second: string;
  }

  let name: Name;
  name = {
    first: 'John',
    second: 'Doe',
  };
  console.log(name);
}

{
  let name: {
    first: string,
    second: string,
  }
  name = {
    first: 'John',
    second: 'Doe'
  }
  console.log(name);
}

{
  let num: number;
  let str: string;
  // num = null;
  // str = undefined;
}

{
  function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i])
    }
    return toreturn;
  }

  const sample = [1, 2, 3];
  const reversed = reverse(sample);
  console.log(reversed);
}

{
  function formatCommlandline(command: string[]|string) {
    let line = '';
    if (typeof command === 'string') {
      return command.trim();
    } else {
      return command.join(' ').trim();
    }
  }

  console.log(formatCommlandline('abc'));
  console.log(formatCommlandline(['a', 'b', 'c']));
}

{
  function extend<T, U>(first: T, second: U): T & U {
    return { ...first, ...second };
  }

  const x = extend({ a: 'hello' }, { b: 42 });
  console.log(`${x.a} ${x.b}`);
}

{
  type StrOrNum = string|number;

  let sample: StrOrNum;
  sample = 123;
  console.log(sample);
  sample = '123';
  console.log(sample);
}

{
  interface Point {
    x: number;
    y: number;
  }

  class MyPoint implements Point {
    x: number = 1;
    y: number = 2;
  }

  const foo: Point = new MyPoint();
  console.log(foo);
}

{
  enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
  }

  const card = CardSuit.Clubs;
  console.log(card); 
}

{
  enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,
  }

  type Animal = {
    flags: AnimalFlags
  }

  function printAnimalAbilities(animal: Animal) {
    const animalFlags = animal.flags;
    if (animalFlags & AnimalFlags.HasClaws) {
      console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
      console.log('animal can flay');
    }
    if (animalFlags == AnimalFlags.None) {
      console.log('nothing');
    }
  }

  const animal: Animal = { flags: AnimalFlags.None };
  printAnimalAbilities(animal);
  animal.flags |= AnimalFlags.HasClaws;
  printAnimalAbilities(animal);
  animal.flags &= ~AnimalFlags.HasClaws;
  printAnimalAbilities(animal);
  animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
  printAnimalAbilities(animal);
}

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

{
  const mon = Weekday.Monday;
  const sun = Weekday.Sunday;
  console.log(Weekday.isBusinessDay(mon));
  console.log(Weekday.isBusinessDay(sun));
}

{
  let sampleVariable: { bar: number };

  function foo(sampleVariable: { bar: number }) {}
}

{
  interface Foo {
    foo: string;
  }

  function foo(sample: Foo): Foo {
    return sample;
  }
}

{
  function foo(bar: number): void;
  function foo(bar: number, bas: string): void;
  function foo(bar: number, bas: string = 'hello'): void {
    console.log(bar, bas);
  }
  foo(123);
  foo(123, 'world');
}

{
  type LongHand = {
    (a: number): number;
  }

  type ShortHand = (a: number) => number;
}

{
  interface Overloaded {
    (foo: string): string
    (foo: number): number
  }

  function stringOrNumber(foo: number): number;
  function stringOrNumber(foo: string): string;
  function stringOrNumber(foo: any): any {
    if (typeof foo === 'number') {
      return foo * foo;
    } else if (typeof foo === 'string') {
      return `hello ${foo}`;
    }
  }

  const overloaded: Overloaded = stringOrNumber;

  const str = overloaded('world');
  const num = overloaded(123);

  console.log(str);
  console.log(num);
}

{
  function logName(something: { name: string }) {
    console.log(something.name);
  }

  logName({ name: 'matt' });
  // logName({ name: 'matt', job: 'being awesome' });
  const foo = { name: 'matt', job: 'being awesome' };
  logName(foo);
}

{
  class Queue<T> {
    private data = new Array<T>();
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
  }

  class Utility {
    reverse<T>(items: T[]): T[] {
      const toreturn = [];
      for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
      }
      return toreturn;
    }
  }

  const sample = [1, 2, 3];
  const util = new Utility();
  const reversed = util.reverse(sample);
  console.log(reversed);
}

import fetch from 'isomorphic-unfetch';

{
  const getJSON = <T>(config: { url: string, headers?: { [key: string]: string }, }): Promise<T> => {
    const fetchConfig = ({
      method: 'GET',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(config.headers || {})
    });
    return fetch(config.url, fetchConfig)
      .then<T>(response => response.json());
  }

  type LoadUsersResponse = {
    users: {
      name: string;
      email: string;
    }[];
  }

  function loadUsers() {
    return getJSON<LoadUsersResponse>({ url: 'https://example.com/users' });
  }

  // const result = loadUsers();
  // console.log(result);
}
