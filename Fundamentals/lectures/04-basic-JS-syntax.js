'use strict';

// notes for https://youtu.be/xJn3k1f4BiM

const plusOperator = (a, b) => a + b;

console.log(`Sum integers: 3 + 7 = ${plusOperator(3, 7)}`);
console.log(`Sum floats: 3.2 + 7.5 = ${plusOperator(3.2, 7.5)}`);
console.log(
  `String Concatenation: '3' + '7' = ${plusOperator('3', '7')}`);
console.log(`'Subtraction': 7 + (-3) = ${plusOperator(7, -3)}\n`);


// chaining

const adder = (initial = 0) => ({
  sum: initial,
  values: [initial],
  add(newVal) {
    this.values.push(newVal);
    this.sum += newVal;
    return this;
  }
});

const Adder = class {
  constructor(initial = 0) {
    this.values = [initial];
    this.sum = initial;
  }

  add(newVal) {
    this.sum += newVal;
    this.values.push(newVal);
    return this;
  }
};


const { sum, values } = adder(5).add(7).add(-3);
const [first, second, third] = values;
console.log(`${first} + ${second} + ${third} -> ${sum}`);

console.log(new Adder(12).add(-7).add(-6).values + '\n');

// extending the class

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const movable = Class => class extends Class {
  move(x, y) {
    this.x += x;
    this.y += y;
  }
};

const serializable = Class => class extends Class {
  toString() {
    return `Point: [${this.x} ${this.y}]`;
  }
};

const FancyPoint = serializable(movable(Point));
const fancyPoint = new FancyPoint(5, 9);
fancyPoint.move(6, 1);
console.log(fancyPoint.toString());
const { x, y } = fancyPoint;
console.log(x, y);


// setInterval
const INTERVAL = 666;
let counter = 0;
const counterLimit = 5;
let timer = null;

console.log(
  `\nPrinting the date in ISO 8601 Extended Format ${counterLimit} times: `);

const printDateToConsole = () => {
  if (counter === counterLimit) {
    clearInterval(timer);
    return;
  }
  counter++;
  console.dir({ 'Nr.': counter, Date: new Date().toISOString() });
};

timer = setInterval(printDateToConsole, INTERVAL);

