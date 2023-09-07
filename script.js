class Vehicle {
  constructor(height, width, weight, color) {
    this.height = height;
    this.width = width;
    this.weight = weight;
    this.color = color;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  getWeight() {
    return this.weight;
  }

  getColor() {
    return this.color;
  }
}

class Car extends Vehicle {
  constructor(height, width, weight, color, numberOfDoors, maxPassengers) {
    super(height, width, weight, color);
    this.numberOfCarDoors = numberOfDoors;
    this.maxPassengers = maxPassengers;
  }

  numberOfDoors() {
    return this.numberOfCarDoors;
  }

  getMaxPassengers() {
    return this.maxPassengers;
  }
}

class Bike extends Vehicle {
  constructor(height, width, weight, color, numberOfWheels) {
    super(height, width, weight, color);
    this.numberOfWheels = numberOfWheels;
  }

  getNumberOfWheels() {
    return this.numberOfWheels;
  }
}

const vehicle = new Vehicle(150, 200, 1000, 'red');
const car = new Car(140, 190, 1200, 'blue', 4, 5);
const bike = new Bike(100, 60, 15, 'green', 2);

console.log('Vehicle:');
console.log('Height:', vehicle.getHeight());
console.log('Width:', vehicle.getWidth());
console.log('Weight:', vehicle.getWeight());
console.log('Color:', vehicle.getColor());

console.log('\nCar:');
console.log('Height:', car.getHeight());
console.log('Width:', car.getWidth());
console.log('Weight:', car.getWeight());
console.log('Color:', car.getColor());
console.log('Number of Car Doors:', car.numberOfDoors());
console.log('Max Passengers:', car.getMaxPassengers());

console.log('\nBike:');
console.log('Height:', bike.getHeight());
console.log('Width:', bike.getWidth());
console.log('Weight:', bike.getWeight());
console.log('Color:', bike.getColor());
console.log('Number of Wheels:', bike.getNumberOfWheels());
