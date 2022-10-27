const axios = require("axios");

const getAllPokemon = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  // console.log(response.data);
  console.log("Pokemon");
};

const getGoogle = async () => {
  const response = await axios.get("https://www.google.com");
  // console.log(response.data);
  console.log("google");
};

getGoogle();
getAllPokemon();

// console.log("Hello, world!");
