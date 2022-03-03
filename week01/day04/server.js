const express = require("express");
const animals = require("./animals.json");

const app = express();

app.get("/animals/:id", (request, response) => {
  animal_id = request.params.id;
  response.send(animals.find((animal) => animal.id === parseInt(animal_id)));
});

app.get("/animals", (request, response) => {
  response.send(animals);
});

const port = 5065;
app.listen(port, () => console.log(`Listening on ${port}`));
