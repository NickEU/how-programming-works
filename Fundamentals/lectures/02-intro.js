'use strict';

// notes for https://youtu.be/PzlLXQ3RaDs

// subroutines:
const welcome = person => {
  const name = person.name;
  const firstLetter = name[0].toUpperCase();
  const restOfTheName = name.slice(1);
  const capitalizedName = firstLetter + restOfTheName;
  console.log(`Ave, true to ${capitalizedName}!`);
};
welcome({ name: 'caesar' });

// functions:
{
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  console.log(capitalize('endure.'));

  const welcome = ({ name }) => `Welcome, ${capitalize(name)}!`;
  console.log(welcome({ name: 'Leo' }));
}

const states = ['Nebraska', 'Alaska', 'Idaho', 'Kentucky'];
console.log(states);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static from(point) {
    return new Point(point.x, point.y);
  }
}

const point = new Point(5, 6);
let anotherPoint = Point.from(point);
console.log(anotherPoint);
console.log(point === anotherPoint); // false
anotherPoint = point;
console.log(point === anotherPoint); // true

class Rect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

const shape = new Rect(5, 7);
shape.move(10, 9);
console.log(shape);
