// 1. Create a function in a second file, use export to export it
//=> see "export.js"
// 2. In your main file import and execute the function

import { randomNumber } from "./export.js";
console.log(randomNumber());

// 3. Write out a fat arrow function using the same line to return (as in no return keyword)
const add = (x, y) => x + y;
console.log(add(10, 20)); //<= expected result 30

//*Another fat arrow function test as the above is too simple.
const number = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    console.log("both numbers are even");
  } else {
    console.log("at least one of them is odd");
  }
};

number(2, 6); //<= expected result "both numbers are even"

// 4. Add default parameters to the above function
const number = (x = 2, y = 2) => {
  if (x % 2 === 0 && y % 2 === 0) {
    console.log("both numbers are even");
  } else {
    console.log("at least one of them is odd");
  }
};

// console.log(number()); //<= expected result "both numbers are even"

// 5. Create an object that has a child object, that itself has a child object (3 levels).
const uk = {
  name: "United Kingdom",
  Language: "English",
  constituent: {
    england: { capital: "London", population: "56 million" },
    scotland: { capital: "Edinburg", population: "5 million" },
  },
};

// 6. Use object destructuring to pull out the parts at level 3
const { capital, population } = uk.constituent.england;
console.log(
  `England is one of the constituents of UK, whose capital is${capital} and population is ${population}`
);

// 7. Add a default value to the above destructuring
const { capital, population, leader = "Rishi Sunak" } = uk.constituent.england;
console.log(
  `England is one of the constituents of UK, whose capital is${capital}, population is ${population}, and the learder is ${leader}`
);

// 8. Destructure an array
const progLang = ["JavaScript", "Java", "C", "Python", "PHP", "Ruby"];
const [lang1, lang2, lang3, lang4, lang5, lang6] = progLang;

console.log(`I'm learning ${lang1}`);

// 9. Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object. Use the spread operator.

const person1 = { name: "Bob", age: 50, country: "UK" };
const person2 = { job: "programmer", hobby: "programming", bloodType: "A" };

const person = { ...person1, ...person2 };
console.log(person); //<= result {name: 'Bob', age: 50, country: 'UK', job: 'programmer', hobby: 'programming', bloodType: 'A'}

const { name, age } = person;
console.log(name, age);

// 10. Send 5 arguments to a function and use the rest operator to group them
function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

const array = [1, 2, 3, 4, 5];

console.log(multiply(...array)); // <= result 120

// 11. Add a function to one of the objects, use the object method shorthand.
function add() {
  return this.number1 + this.number2;
}

const obj = { number1: 35, number2: 26, add };
console.log(obj.add()); //<= result 61
