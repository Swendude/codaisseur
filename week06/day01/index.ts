let cow: boolean = true;
let sheep: number = 1;
let pig: string = "Hello, world";

let transaction: number[] = [42, 12, 83, 9];

interface Engine {
  cc: number;
  cylinders: number;
  type: string;
}

interface Vehicle {
  brand: string;
  model: string;
}

interface Bike extends Vehicle {
  gears: number;
  wheels: number;
  racing: boolean;
}

interface Car extends Vehicle {
  gears: number;
  wheels: number;
  engine: Engine;
  price?: number;
}

let vehicles: Vehicle[] = [];

let car: Car = {
  brand: "Fiat",
  model: "126",
  gears: 4,
  wheels: 4,
  engine: {
    cc: 650,
    cylinders: 4,
    type: "four stroke"
  }
};

const showCarName = (c: Car): string => {
  return c.brand + " " + c.model;
};

const double = (x: number): number => {
  return x * 2;
};

console.log(double(2).length);
