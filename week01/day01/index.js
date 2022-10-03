// DRY Don't Repeat Yourself
// WET Write Everything Twice

function divide(cow, sheep) {
  const result = cow / sheep;
  return result;
}

const divide2 = (cow, sheep) => {
  const result = cow / sheep;
  return result;
};

function sayHi() {
  console.log("Hi!");
}

const whatever = divide(18, 2);
const whateverElse = divide(27, 9);
console.log(divide(whatever, 3));

console.log(divide(18, 2));

// double(18);

// a 1000 lines of code

// double(9);

// a 1000 lines of code

// double(-92);

// const animals = ["sheep", "cow", "pig"];
// //                 0        1      2
// const amountOfFood = [1, 2, 6];
// console.log("A " + animals[1] + " eats " + amountOfFood[1] + " kg per day");

// const animalsFood = { sheep: 1, cow: 2, pig: 6 };
// console.log(animalsFood[0]);

const student = {
  name: "Thanh",
  school: "Codaisseur",
  class: 61,
  present: true,
  teachers: [
    { name: "Swen", city: "Utrecht", age: 29 },
    { name: "Karla", city: "Apeldoorn", age: 27 },
    { name: "Maria", city: "Amersfoort", age: 26 }
  ]
};

// console.log(student.teachers.name);
