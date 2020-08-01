module Shipping {

  export interface Ship {
    name: string;
    port: string;
    displacrement: number;
  }

  export class Ferry implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacrement: number
    ) {}
  }

  const defaultDisplacement = 4000;

  class PrivateShip implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacrement: number
    ) {}
  }
}

const ferry = new Shipping.Ferry('Assurance', 'London', 3220);
console.log(ferry.name)
