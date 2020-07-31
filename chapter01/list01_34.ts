interface Point {
  x: number;
  y: number;
}

interface Passenger {
  name: string;
}

interface Vehicle {
  new() :Vehicle;

  currentLocation: Point;

  travelTo(point: Point);
  addPassenger(passenger: Passenger);
  removePassenger(passenger: Passenger);
}
