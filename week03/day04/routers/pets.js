const express = require("express");
const { toData } = require("../auth/jwt");
const Pet = require("../models").Pet;
const { Router } = express;
const AuthMiddleware = require("../auth/middleware");

const router = new Router();

// Middlewares can modify a request!!
// const myOwnMiddleWare = (req, res, next) => {
//   req.myAwesomeKey = "Hello class 62";
//   next();
// };

router.get("/", AuthMiddleware, async (req, res) => {
  // const auth = req.headers.authorization;

  // if (!auth) {
  //   res.status(401).send("Please send a valid token!");
  //   return;
  // }

  // if (auth.split(" ")[0] === "Bearer" && auth.split(" ")[1]) {
  //   try {
  //     const data = toData(auth.split(" ")[1]);
  // console.log("This token belongs to:", req.user.name);
  console.log(req.myAwesomeKey);
  const allPets = await Pet.findAll({ where: { OwnerId: req.user.id } });
  res.send(allPets);
  //   } catch (e) {
  //     res.status(400).send("Invalid JWT token");
  //   }
  // }

  // should return a list of all the pets
});

router.get("/:id", async (req, res) => {
  // Should return a specific pet
  const specificPet = await Pet.findByPk(req.params.id);
  if (specificPet) {
    res.send(specificPet);
  } else {
    res.status(404).send("Pet with that ID not found");
  }
});

router.post("/", async (req, res) => {
  const { name, kind, breed, gender, food } = req.body;
  if (name && kind && breed && food) {
    try {
      const newPet = await Pet.create({
        name: name,
        kind: kind,
        breed: breed,
        gender: gender,
        food: food,
        OwnerId: 1
      });
      res.status(201).send(newPet);
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  } else {
    res.status(400).send("Missing attributes for pet");
  }
});

module.exports = router;
