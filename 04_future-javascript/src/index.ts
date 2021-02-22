{
  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    add(point: Point) {
      return new Point(this.x + point.x, this.y + point.y);
    }
  }

  const p1 = new Point(0, 10);
  const p2 = new Point(10, 20);
  const p3 = p1.add(p2);
  console.log(p3);

  class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
      super(x, y);
      this.z = z;
    }
    add(point: Point3D) {
      const point2D = super.add(point);
      return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
  }

  class Something {
    static instance = 0;
    constructor() {
      Something.instance++;
    }
  }

  const s1 = new Something();
  const s2 = new Something();
  console.log(Something.instance);

  class FooBase {
    public x: number;
    private y: number;
    protected z: number;
    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  const foo = new FooBase(1, 2, 3);
  console.log(foo.x);
  // console.log(foo.y);
  // console.log(foo.z);

  class FooChild extends FooBase {
    constructor(x: number, y: number, z: number) {
      super(x, y, z);
      console.log(this.x);
      // console.log(this.y);
      console.log(this.z);
    }
  }

  const child = new FooChild(4, 5, 6);

  class Foo {
    x: number;
    constructor(x: number) {
      this.x = x;
    }
  }

  const foo2 = new Foo(1);
  console.log(foo2);

  class Foo2 {
    constructor(public x: number) {}
  }
  const foo3 = new Foo2(2);
  console.log(foo3);

  class Foo3 {
    member = new Array<any>();
    add(x: any) {
      this.member.push(x);
    }
  }
}

{
  class Adder {
    constructor(public a: number) {}
    add = (b: number): number => {
      return this.a + b;
    }
  }

  class Child extends Adder {
    callAdd(b: number) {
      return this.add(b);
    }
  }

  const child = new Child(123);
  console.log(child.callAdd(123));

  class ExtendedAdder extends Adder {
    private superAdd = this.add;
    add = (b: number): number => {
      return this.superAdd(b);
    }
  }

  const exAdder = new ExtendedAdder(1);
  console.log(exAdder.add(2));
}

// import fs = require('fs');
// function loadJSON(filename: string, cb: (error: Error | null, data: any) => void) {
  // fs.readFile(filename, function(err, data) {
    // if (err) cb(err, null);
    // else cb(null, JSON.parse(data.toString()))
  // });
// }

// {
  // const promise = new Promise((resolve, reject) => {
    // resolve(123);
    // // reject(new Error('Error'));
  // });
  // promise.then(res => {
    // console.log('I get called:', res === 123);
  // });
  // promise.catch(err => {
    // console.log('I get called:', err.message);
  // });
// }

// {
  // Promise.resolve(new Error('何か悪いことが起きた'))
    // .then((res) => {
      // console.log(res);
      // return 456;
    // })
    // .then((res) => {
      // console.log(res);
      // return Promise.resolve(123);
    // })
    // .then((res) => {
      // console.log(res);
      // return 123;
    // })
    // .catch(err => {
      // console.log(err.message);
      // return 123;
    // })
    // .then((res) => {
      // console.log(res);
    // })
// }

// {
  // Promise.resolve(123)
    // .then((res) => {
      // throw new Error('何か悪いことが起きた');
      // return 456;
    // })
    // .then((res) => {
      // console.log(res);
      // return Promise.resolve(123);
    // })
    // .catch(err => {
      // console.log(err.message);
    // })
// }

// console.log('--------');

// {
  // Promise.resolve(123)
    // .then((res) => {
      // throw new Error('何か悪いことが起きた');
    // })
    // .catch((err) => {
      // console.log(`first catch: ${err}`);
      // return 123
    // })
    // .then((res) => {
      // console.log(res);
      // return Promise.resolve(789);
    // })
    // .catch((err) => {
      // console.log(`second catch: ${err}`);
    // })
// }

console.log('--------');

// {
  // const iReturnPromiseAfter1Second = () => {
    // return new Promise((resolve) => {
      // setTimeout(() => resolve("Hello woorld!"), 1000);
    // });
  // } 

  // Promise.resolve(123)
    // .then((_) => {
      // return iReturnPromiseAfter1Second();
    // })
    // .then((res) => {
      // console.log(res);
    // })
// }

// import fs = require('fs');
// const readFileAsync = (filename: string) => {
  // return new Promise((resolve, reject) => {
    // fs.readFile(filename, (err, result) => {
      // if (err) reject(err);
      // else resolve(result);
    // });
  // });
// };

// const loadJSONAsync = (filename: string) => {
  // return readFileAsync(filename)
            // .then((res) => {
              // return JSON.parse(res);
            // });
// };

// const loadItem = (id: number) => {
  // return new Promise((resolve) => {
    // console.log('loading item', id);
    // setTimeout(() => {
      // resolve({ id: id });
    // }, 1000);
  // })
// };

// let item1, item2;
// loadItem(1)
  // .then((res) => {
    // item1 = res;
    // return loadItem(2);
  // })
  // .then((res) => {
    // item2 = res;
    // console.log('done');
  // })

// Promise.all([loadItem(3), loadItem(4)])
  // .then((res) => {
    // [item1, item2] = res;
    // console.log('done');
  // });

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
