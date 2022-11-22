// Parameterization || Currying || Partial Function Application

const add = (u, p) => u + p;

const add_ = (u) => (p) => u + p;

const add42 = add_(42);
const add19 = add_(19);

// console.log(add42(12));
// console.log(add19(12));

const initialState = {
  list: [
    { id: 1, name: "Diavola" },
    { id: 4, name: "Funghi" },
    { id: 19, name: "Hawaii" }
  ]
};

const selectPizzas = (reduxState) => reduxState.pizzas.list;
const selectPizza = (id) => (reduxState) =>
  reduxState.pizzas.list.find((pizza) => pizza.id === id);

const pizzaById = useSelector(selectPizza(4));
const pizzas = useSelector(selectPizzas);

// function add__(u) {
//   return function add__inner(p) {
//     return u + p;
//   };
// }

// console.log(add(5, 9));
// console.log(add_(5)(9));
