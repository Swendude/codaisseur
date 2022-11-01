export const selectBikes = (reduxState) => reduxState.bikes.bikes;
// export const selectBikeByIndex = (ix) => {
//   return (reduxState) => reduxState.bikes.bikes[ix];
// };

// export const selectRestaurantsWithPizzas = (reduxState) => {
//   const pizzas = reduxState.pizzas.pizzaList;
//   const restaurants = reduxState.restaurants.restaurantList;
// };

// export const selectPizzasById = (id) => (reduxState) => {
//   return reduxState.pizzas.pizzaList.find((pizza) => pizza.id === id);
// };

// const bike = useSelector(selectBikes)
// const bike = useSelector((reduxState) => reduxState.bikes.bikes);
// const bike = useSelector(selectBikeByIndex(1));
