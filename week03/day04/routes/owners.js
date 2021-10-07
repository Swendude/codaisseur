const express = require("express");
const { owner } = require("../models");
const bcrypt = require("bcrypt");
const AuthMiddleware = require("../auth/middleware");
const { Router } = express;

const router = new Router();

router.get("/", async (req, res) => {
  const owners = await owner.findAll();
  res.send(owners);
});

router.get("/:id", async (req, res, next) => {
  const owners = await owner.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (!owners.length) {
    res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
  }
  res.send(owners[0]);
});

router.post("/",AuthMiddleware, async (req, res, next) => {
  try {
    const { name, age, email, password } = req.body;
    // Check if the password is longer then 5 characters
    console.log(req.owner_id);
    
    if (req.owner_id != 8 ) {
        //only Liza
        res.status(400).send('Only Liza can create owners');
    }
    if (password.length < 5) {
      res.status(400).send("Password too short");
    } else {
      const new_owner = await owner.create({
        name: name,
        age: age,
        email: email,
        password: bcrypt.hashSync(password, 10),
      });
      res.status(201).send(new_owner);
    }
  } catch (error) {
    // console.log(error);
    // res.status(400).send(`Validation errors`);
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const target_owner = await owner.findByPk(req.params.id);
    if (!target_owner) {
      res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
    }
    const updated_owner = await target_owner.update(req.body);
    res.status(200).send(updated_owner);
  } catch (error) {
    res
      .status(400)
      .send(
        `Validation errors: ${error.errors
          .map((error) => error.message)
          .join(", ")}`
      );
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const target_owner = await owner.findByPk(req.params.id);
    const target_id = target_owner.id;
    if (!target_owner) {
      res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
    }
    const updated_owner = await owner.create(req.body);
    res.status(200).send(updated_owner);
  } catch (error) {
    res
      .status(400)
      .send(
        `Validation errors: ${error.errors
          .map((error) => error.message)
          .join(", ")}`
      );
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const target_owner = await owner.findByPk(req.params.id);
    if (!target_owner) {
      res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
    }
    await target_owner.destroy();
    res.status(200).send("deleted succesfully");
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;
