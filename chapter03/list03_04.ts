module list03_04 {

  interface Vehicle {
    moveTo(x: number, y: number): void;
  }

  class Car implements Vehicle {
    moveTo(x: number, y: number) {
      console.log(`Driving to ${x} ${y}`);
    }
  }

  class SportsCar extends Car {}

  class Airplane {
    moveTo(x: number, y: number) {
      console.log(`Flying to ${x} ${y}`);
    }
  }

  const navigate = (vehicle: Vehicle) => {
    vehicle.moveTo(59.9, 10.7);
  };

  const airplane = new Airplane();
  navigate(airplane);

  const car = new SportsCar();
  navigate(car);

}
