const add = (x, y) => x + y;

const add6 = (x) => {
  return add(x, 6);
};

const addN = (x) => {
  return (y) => add(y, x);
};

const add12 = addN(12);

console.log(add12(5));

console.log(add(8, 4));
console.log(add6(8));
console.log(add6(10));
