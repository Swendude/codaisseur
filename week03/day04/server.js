const express = require("express");
const Pet = require("./models").Pet;
const Owner = require("./models").Owner;
const AuthRouter = require("./routers/auth");
const AuthMiddleware = require("./auth/middleware");

const app = express();
app.use(express.json());

app.use("/auth", AuthRouter);

app.get("/pets", AuthMiddleware, async (req, res) => {
  const user = req.user;
  const allPets = await Pet.findAll({ where: { UserId: user.id } });
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

app.post("/pets", AuthMiddleware, async (req, res) => {
  const { name, kind, food, gender } = req.body;
  if (!name) {
    res.status(400).send("The field name is required on Pets");
    return;
  }
  if (!kind) {
    res.status(400).send("The field kind is required on Pets");
    return;
  }
  try {
    const newPet = await Pet.create({
      name: name,
      kind: kind,
      food: food,
      gender: gender,
      UserId: req.user.id
    });

    res.status(201).send(newPet);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
    return;
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
