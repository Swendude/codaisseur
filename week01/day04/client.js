// We want to make an HTTP GET request from javascript
// WISH: const response = get("https://pokeapi.co/api/v2/pokemon/pikachu")

// const double = (x) => {
//   return x * 2;
// };

// const cow = 5;
// const sheep = double(cow);
// console.log(sheep);

const axios = require("axios");

const getPikachu = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  console.log(response.data);
};

const getCharacter = async (characterId) => {
  const response = await axios.get(
    `http://localhost:4000/characters/${characterId}`
  );
  console.log(response.data);
};

// ("http://localhost:4000/data/male");
// ("http://localhost:4000/data/female");
const getGender = async (patientGender) => {
  const response = await axios.get(
    `http://localhost:4000/data/${patientGender}`
  );
  console.log(response.data);
};

getGender("Male");

getCharacter(13);

// console.log("first");
// getPikachu();
// console.log("second");
