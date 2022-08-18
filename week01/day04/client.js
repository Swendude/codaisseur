// We want to make an HTTP GET request from javascript
// WISH: const response = get("https://pokeapi.co/api/v2/pokemon/pikachu")

// const double = (x) => {
//   return x * 2;
// };

// const cow = 5;
// const sheep = double(cow);
// console.log(sheep);

const axios = require("axios");

const double = (x) => x * 2;

const getPikachuArrow = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  console.log(response.data);
};

async function getPikachu() {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  console.log(response.data);
}
console.log("first");
getPikachu();
console.log("second");
