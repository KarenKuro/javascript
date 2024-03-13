// 1
abstract class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract getPerimetr(): void;
}

class Rectangle extends Shape {
  constructor(
    public color: string,
    public width: number,
    public height: number
  ) {
    super(color);
  }

  getPerimetr(): void {
    console.log((this.width + this.height) * 2);
  }
}

class Circle extends Shape {
  constructor(public color: string, public radius: number) {
    super(color);
  }

  getPerimetr(): void {
    console.log(Math.round(2 * Math.PI * this.radius * 100) / 100);
  }
}

let myRectangle = new Rectangle("red", 20, 25);
myRectangle.getPerimetr();
let myCircle = new Circle("blue", 20);
myCircle.getPerimetr();

// 2

abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;
}

class Tiger extends Animal {
  constructor(public name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`This tiger ${this.name} is roars like a tiger`);
  }
}

class Lion extends Animal {
  makeSound(): void {
    console.log(`This lion ${this.name} is roars like a lion`);
  }
}

const myTiger = new Tiger("Woods");
const myLion = new Lion("Mufasa");

myTiger.makeSound();
myLion.makeSound();

// 3
abstract class Employee {
  constructor(public name: string, public employeeid: number) {}

  abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee {
  calculateSalary(): number {
    return 10000;
  }
}

class PartTimeEmployee extends Employee {
  calculateSalary(): number {
    return 10000 * 0.5;
  }
}

const john = new FullTimeEmployee("John", 500);
const jimmy = new PartTimeEmployee("Jimmy", 200);

console.log(john.calculateSalary());
console.log(jimmy.calculateSalary());

