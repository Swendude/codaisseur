const axios = require("axios");

const getAllAnimals = async () => {
  const response = await axios.get("http://localhost:4000/animals");
  console.log(response.data);
};

const getAnimalById = async (animalId) => {
  const response = await axios.get(`http://localhost:4000/animals/${animalId}`);
  const animalById = response.data;
  console.log(animalById);
};

const getAnimalsThatEatMore = async (foodValue) => {
  const response = await axios.get(
    `http://localhost:4000/animals/food/${foodValue}`
  );
  const allTheAnimals = response.data;
  const females = allTheAnimals.filter((animal) => animal.isFemale);
  console.log(females);
};

// getAllAnimals();
// getAnimalById(2);
getAnimalsThatEatMore(2);
