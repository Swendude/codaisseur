export const selectPizzas = (reduxState) => reduxState.pizzas.list;

export const selectPizza = (id) => (reduxState) =>
  reduxState.pizzas.list.find((pizza) => pizza.id === id);

export const selectIsThereHawaii = (reduxState) => {
  if (reduxState.pizzas.list.find((pizza) => pizza.name === "Hawaii")) {
    return true;
  }
  return false;
};
