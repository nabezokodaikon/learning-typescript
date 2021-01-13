{
  class Animal {}
  class Bird extends Animal {
    chirp() {}
  }
  class Crow extends Bird {
    caw() {}
  }

  function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
  }

  // chirp(new Animal())
  chirp(new Bird())
  chirp(new Crow())

  function clone(f: (b: Bird) => Bird): void {
    const parent = new Bird()
    const babyBird = f(parent)
    babyBird.chirp()
  }

  const birdToBird = (b: Bird) => b
  clone(birdToBird)

  const birdToCrow = (b: Bird) => new Crow()
  clone(birdToCrow)

  const birdToAnimal = (b: Bird) => new Animal()
  // clone(birdToAnimal)

  const animalToBird = (a: Animal) => new Bird()
  clone(animalToBird)

  const crowToBird = (a: Crow) => {
    a.caw()
    return new Bird()
  }
  // clone(crowToBird)
}

{
  let e = [1, {x: 2}] as const;
  // e[1].x = 2
}

{
  type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev'
  }

  class API {
    constructor(private options: Options) {}
  }

  new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
  });

  // new API({
    // baseURL: 'https://api.mysite.com',
    // badTier: 'prod'
  // });

  new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
  } as Options);

  const badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
  }
  new API(badOptions)

  // const options: Options = {
    // baseURL: 'https://api.mysite.com',
    // badTier: 'prod'
  // };
  // new API(options)
}

{
  type Unit = 'cm' | 'px' | '%';
  let units: Unit[] = ['cm', 'px', '%'];
  function perseUnit(value: string): Unit | null {
    for (let i = 0; i < units.length; i++) {
      if (value.endsWith(units[i])) {
        return units[i];
      }
    }
    return null;
  }

  type Width = {
    unit: Unit,
    value: number
  };

  function parseWidth(width: number | string | null | undefined): Width | null {
    if (width == null) {
      return null;
    }

    if (typeof width === 'number') {
      return { unit: 'px', value: width };
    }

    let unit = perseUnit(width);
    if (unit) {
      return { unit, value: parseFloat(width) };
    }

    return null;
  }
}

{
  // type UserTextEvent = { value: string, target: HTMLInputElement };
  type UserTextEvent = { type: 'TextEvent', value: string, target: HTMLInputElement };
  // type UserMouseEvent = { value: [number, number], target: HTMLElement };
  type UserMouseEvent = { type: 'MouseEvent', value: [number, number], target: HTMLElement };

  type UserEvent = UserTextEvent | UserMouseEvent

  function handle(event: UserEvent) {
    if (event.type === 'TextEvent') {
      event.value;
      event.target;
      return
    } else {
      event.value;
      event.target;
      return
    }
  }
}

{
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
  type Day = Weekday | 'Sat' | 'Sun'

  function getNextDay(w: Weekday): Day {
    switch (w) {
      case 'Mon': return 'Tue';
      case 'Tue': return 'Tue';
      case 'Wed': return 'Tue';
      case 'Thu': return 'Tue';
      case 'Fri': return 'Tue';
    }
  }

  function isBig(n: number) {
    if (n >= 100) {
      return true
    } else {
      return false
    }
  }

  let nextDay = {
    Mon: 'Tue'
  };
  nextDay.Mon;
}

{
  type APIResponse = {
    user: {
      userId: string
      friendList: {
        count: number
        friends: {
          firstName: string
          lastName: string
        } []
      }
    }
  }

  type FriendList = APIResponse['user']['friendList'];
  
  function renderFriendList(friendList: FriendList) {}

  function get<
    O extends object,
    K extends keyof O
  >(
    o: O,
    k: K
  ): O[K] {
    return o[k]
  }

  type ActivetyLog = {
    lastEvent: Date
    events: {
      id: string
      timestamp: Date
    }[]
  }
}

{
  type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';

  type Currency = {
    unit: Unit
    value: number
  };

  let Currency = {
    from(value: number, unit: Unit): Currency {
      return {
        unit: unit,
        value
      }
    }
  };
}

{
  function tuple<T extends unknown[]>(...ts: T): T {
    return ts
  }

  let a = tuple(1, true, 'hello')
  console.log(a)
}

{
  function isString(a: unknown): a is string {
    return typeof a === 'string';
  }

  console.log(isString('a'));
  console.log(isString([7]));

  function parseInput(input: string | number) {
    let formattedInput: string;
    if (isString(input)) {
      formattedInput = input.toUpperCase();
      console.log(formattedInput);
    }
  }

  parseInput('hello');
}

{
  type ToArray<T> = T[];
  type A = ToArray<number>;
  type B = ToArray<number | string>;
}

{
  type ToArray2<T> = T extends unknown ? T[]: T[];
  type A = ToArray2<number>;
  type B = ToArray2<number | string>;
}

{
  type Without<T, U> = T extends U ? never : T;
  type A = Without<boolean | number | string, boolean>;
}

{
  type ElementType<T> = T extends unknown[] ? T[number] : T;
  type A = ElementType<number[]>;
  type ElementType2<T> = T extends (infer U)[] ? U : T;
  type B = ElementType2<number>;
}

{
  type A = number | string;
  type B = string;
  type C = Exclude<A, B>
}

{
  type A = number | string;
  type B = string;
  type C = Extract<A, B>
}

{
  type A = { a?: number | null }
  type B = NonNullable<A['a']>
}

{
  type F = (a: number) => string;
  type R = ReturnType<F>;
}

{
  type A = { new(): B };
  type B = { b: number };
  type I = InstanceType<A>;
}

{
  type VisibleDialog = { id: string };
  type DestroyedDialog = {};
  type Dialog = VisibleDialog | DestroyedDialog;

  function closeDialog(dialog: Dialog) {
    if (!('id' in dialog)) {
      return;
    }
    setTimeout(() =>
      removeFromDOM(
        dialog,
        document.getElementById(dialog.id)!
      )
    );

    function removeFromDOM(dialog: VisibleDialog, element: Element) {
      element.parentNode!.removeChild(element);
      // delete dialog.id
    }
  }
}

{
  type CompanyID = string & { readonly brand: unique symbol };
  type OrderID = string & { readonly brand: unique symbol };
  type UserID = string & { readonly brand: unique symbol };
  type ID = CompanyID | OrderID | UserID
  function queryForUser(id: UserID) {
  }

  function CompanyID(id: string) {
    return id as CompanyID;
  }
  function OrderID(id: string) {
    return id as OrderID;
  }
  function UserID(id: string) {
    return id as UserID;
  }

  let companyId = CompanyID('a');
  let orderId = OrderID('b');
  let userId = UserID('c');
  queryForUser(userId);
  // queryForUser(orderId);
}

{
  interface MyFoo {
    method: () => void
  }
  class Foo {
    method(): void {
      console.log('Hello world');
    }
  }
  const obj: MyFoo = new Foo();
  const obj2: Foo = obj;
  obj2.method();
}

{
  const tuple: [string, number] = ['foo', 3];
  tuple.pop();
  tuple.push('Hey!');
  const num: number = tuple[1];
  console.log(num);
}

{
  type Args = [string, ...number[]];
  const func = (f: string, ...args: Args) => args[0]
  const v1 = func('foo', 'bar');
  const v2 = func('foo', 'bar', 1, 2, 3);
}

{
  function bind<T, U extends any[], R>(func: (arg1: T, ...rest: U) => R, value: T): ((...args: U) => R) {
    return (...args: U) => func(value, ...args);
  }

  const add = (x: number, y: number, z: number) => x + y + z;
  const add1 = bind(add, 1);
  console.log(add1(5, 6));
}

{
  interface Hoge {
    foo: string;
    bar: number;
  }
  interface Piyo {
    foo: number;
    baz: boolean;
  }
  function useHogePiyo(obj: Hoge | Piyo): void {
    if ('bar' in obj) {
      console.log('Hoge', obj.bar);
    } else {
      console.log('Piyo', obj.baz);
    }
  }
  useHogePiyo({foo: 'a', bar: 0});
}

{
  interface Some<T> {
    type: 'Some';
    value: T;
  }
  interface None {
    type: 'None'
  }
  type Option<T> = Some<T> | None;

  function map<T, U>(obj: Option<T>, f: (obj: T) => U): Option<U> {
    switch (obj.type) {
      case 'Some':
        return {
          type: 'Some',
          value: f(obj.value)
        };
      case 'None':
        return {
          type: 'None'
        };
      default:
        return obj
    }
  }
  const s: Some<number> = {type: 'Some', value: 1};
  const r = map(s, (a) => a * 2);
  console.log(r);
}

{
  interface MyObj {
    [key: string]: number;
  }
  const obj: MyObj = {};
  console.log(obj.foo)
}

{
  interface Func {
    foo: string;
    a(arg: number): void;
    b(arg: string): void;
    // (arg: string): string;
  }
  const f: Func = {
    foo: 'a',
    a(arg: number): void {console.log(arg)},
    b(arg: string): void {console.log(arg)}
  };
  // f(1)
}

{
  interface Ctor<T> {
    new(): T
  }
  class Foo {
    public bar: number | undefined;
  }
  const f: Ctor<Foo> = Foo;
  const g = new f();
  g.bar = 1;
  console.log(g.bar);
}

{
  const obj = {
    foo: '123',
    bar: [1, 2, 3]
  };

  obj.foo = '';

  const obj2 = {
    foo: '123',
    bar: [1, 2, 3],
  } as const;
  // obj2.foo = '';
  // obj2.bar[1] = 3
}

{
  interface Length {
    length: number;
  }
  const o: Length = 'foo';
  console.log(o);

  const obj = { foo: 'foo' };
  const obj2: {} = obj;
  obj.foo;
}

{
  interface Options {
    foo?: string;
    bar?: number;
  }
  const obj1 = { foo: 'hello' };
  const obj2: Options = obj1;
  // const obj3: Options = 5;
}

{
  const u: unknown = 3;
  class MyClass {
    public prop: number = 10;
  }
  if (u instanceof MyClass) {
    u.prop
  }
}

{
  function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj = {
    foo: 'Hello',
    bar: 123,
  };

  const str: string = pick(obj, 'foo');
  const num: number = pick(obj, 'bar');
  // pick(obj, 'baz')
}
