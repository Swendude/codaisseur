const fruits = [
  { name: "banana", qty: 50 },
  { name: "boconut", qty: 150 },
  { name: "mango", qty: 5000 },
  { name: "mandarin", qty: 500 },
  { name: "watermelon", qty: 100 },
  { name: "figs", qty: 0.5 },
];
const searchVal = "b";

const result = fruits.filter((fruit) => {
  return fruit.qty < 5;
});

console.log(result);

// function add(x, y) {
//   return x + y;
// }

// console.log(add(8, 9));
// console.log(add(1, 3));
