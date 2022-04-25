const express = require("express");
const Pet = require("./models").Pet;
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send({ message: "Hello express" });
});

app.get("/pets", async (req, res) => {
  try {
    const allPets = await Pet.findAll(); // Return type?
    res.send(allPets);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.get("/pets/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singlePet = await Pet.findByPk(parseInt(id)); // return type?
    if (singlePet) {
      res.send(singlePet);
    } else {
      res.status(404).send({ message: "pet with this ID does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log("listening on 4000");
});
