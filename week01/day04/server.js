const express = require("express");

const animals = require("./animals.json");
const PORT = 4000;
const app = express();

app.get("/animals", (request, response) => {
  console.log("Request on /animals");
  response.send(animals);
});

app.get("/animals/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const animalById = animals.find((animal) => animal.id === id);
  if (animalById) {
    response.send(animalById);
  } else {
    response.send(`Animal with id ${id} not found!`);
  }
});

app.get("/animals/food/:food", (request, response) => {
  const food = parseInt(request.params.food);
  const animalsThatEatMore = animals.filter((animal) => animal.food > food);
  if (animalsThatEatMore.length === 0) {
    response.send(`No animals found that eat more than ${food} food`);
  } else {
    response.send(animalsThatEatMore);
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
