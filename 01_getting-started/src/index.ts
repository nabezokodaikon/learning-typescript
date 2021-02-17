interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const point2D: Point2D = { x: 0, y: 10 }
const point3D: Point3D = { x: 0, y: 10, z: 20 }

function iTakePoint2D(point: Point2D) {}

iTakePoint2D(point2D);
iTakePoint2D(point3D);
// iTakePoint2D({ x: 0 });
iTakePoint2D({ x: 0, y: 10});

class Point {
  constructor(public x: number, public y: number) {}
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

const p1 = new Point(0, 10);
const p2 = new Point(10, 20);
console.log(p1.add(p2));
