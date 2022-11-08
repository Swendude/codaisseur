const express = require("express");
const Pet = require("./models").Pet;
const Owner = require("./models").Owner;

const app = express();
app.use(express.json());

app.get("/pets", async (req, res) => {
  // should return a list of all the pets
  const allPets = await Pet.findAll();
  res.send(allPets);
});

app.get("/pets/:id", async (req, res) => {
  // Should return a specific pet
  const specificPet = await Pet.findByPk(req.params.id, {
    include: [Owner]
  });
  if (specificPet) {
    res.send(specificPet);
  } else {
    res.status(404).send("Pet with that ID not found");
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
