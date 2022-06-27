// functions

// DRY -> Don't Repeat Yourself
// WET -> Write Everything Twice

// is y is bigger then add x to y and return the result, else add x to z and return result

function doTheThing(x, y, z) {
  if (y > z) {
    console.log(x - y);
  } else {
    console.log(x - z);
  }
}

function getTheFirstThing(cow) {
  return cow[0];
}

const result = getTheFirstThing([5, 12, 45]);
console.log(result);
// doTheThing(62, 18, 12);
// // a million a lines of code

// doTheThing(64, 18, 12);

// // another million lines of code

// doTheThing(61, 18, 12);

// // Arrays of objects
// const farm = [
//   { name: "Lassy", type: "dog" },
//   { name: "Bella", type: "cow" },
//   { name: "Wanda", type: "fish" }
// ];

// console.log(farm[0].name);

// // OBJECTS
// const cow = { name: "Bella", age: 1, happy: true };
// const sameCow = { age: 1, happy: true, name: "Bella" };
// const worseCow = ["Bella", 1, true];
// const differentCow = [1, "Bella", true];
// console.log(cow.age);
// console.log(cow[1]);
// console.log(cow["age"]);
// ARRAYS
// const animals = ["pig", "cow", "sheep", ["fish", "crab", "seahorse"]];
// console.log(animals);

// SIMPLE DATATYPES
// const cow = 10; //number
// const sheep = false; //boolean
// const pig = "Hello, world!"; //string
// const fish = "10"; //string

// console.log(42 / 0);
