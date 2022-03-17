const axios = require("axios");

const getAnimals = async () => {
  try {
    const response = await axios.get("http://localhost:5065/animals");
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getAnimal = async (animal_id) => {
  const response = await axios.get(
    `http://localhost:5065/animals/${animal_id}`
  );
  console.log(response.data);
};

console.log("first");
getAnimals();
console.log("second");
