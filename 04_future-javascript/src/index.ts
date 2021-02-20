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
