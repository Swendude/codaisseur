const meSelector = (state) => state.auth.me;

const tokenSelector = (state) => state.auth.token;

const amountOfPetsSelector = (state) => {
  return state.auth.pets.length;
};

const ageOfPetsSelector = (state) => {
  let total_age = 0;
  state.auth.pets.forEach((pet) => {
    total_age = total_age + pet.age;
  });
  return total_age;
};
export { meSelector, tokenSelector };
