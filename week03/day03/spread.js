// OBJECT

const myCar = {
  brandName: "Volvo",
  modelName: "144",
  nOfGears: 5,
  color: "white",
  productionYears: [1965, 1966, 1967],
};

const updatedCar = {
  ...myCar,
  productionYears: [...myCar.productionYears, 1968],
};
console.log(updatedCar);

// ARRAYS
// const students = ["Anna", "Tanya", "Wilson", "Fabio"];

// const students2 = ["Laurens", ...students, "Panos"];

// const myArguments = [1, 2, 4];

// function addNumbers(x, y) {
//   return x + y;
// }

// console.log(addNumbers(...myArguments)); // === addNumbers(1,2)

// console.log(students2);
