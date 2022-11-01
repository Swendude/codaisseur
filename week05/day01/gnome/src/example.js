const animals = ["cow", "sheep", "dog"];

const showLength = (a) => a.length;

// console.log(animals.map(showLength));

const add = (x, y) => x + y;
console.log(add(5, 7));

const addSpecial = (x) => {
  return (y) => x + y;
};
const add7 = addSpecial(7);
console.log(add7(90));
const add5 = addSpecial(5);
console.log(add5(10));
console.log(add5(12));

console.log(addSpecial(5)(7));
