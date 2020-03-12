'use strict';

//1
const name = 'Nick';
//2
const YOB = 1985;

console.log(`${YOB} was a very good year`);
//3
const greet = name => {
  console.log(`Hello there, ${name}!`);
};

greet(name);

//4

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log(range(15, 30));

//5

function rangeOdd(start, end) {
  const result = [];
  for (let i = start; i <= end; i += 2) {
    result.push(i);
  }
  return result;
}

console.log(rangeOdd(15, 30));
