const Pet = require("../models").pet;

const { Router } = require("express"); // just import the Router object

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await Pet.findAll());
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, kind, food, userId } = req.body;
    if (!(name.length > 2)) {
      res.status(400).send("Pet name too short");
    } else {
      const newPet = await Pet.create({
        name: req.body.name,
        kind: req.body.kind,
        food: req.body.food,
        userId: req.body.userId,
      });
      res.status(201).send(newPet);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
