const express = require("express");
const { toJwt } = require("../auth/jwt");
const { Router } = express;
const Owner = require("../models").Owner;

const router = new Router();

router.post("/login", async (req, res) => {
  // get the user info from the body (name, password)
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(400).send("Please provide valid information");
    return;
  }
  // compare that info to check if the user exists in the db
  const ownerToAuthenicate = await Owner.findOne({ where: { name: name } });

  if (!ownerToAuthenicate) {
    res.status(400).send("Password or name! is incorrect");
    return;
  }
  // check the password
  if (password !== ownerToAuthenicate.password) {
    res.status(400).send("Password! or name is incorrect");
    return;
  }
  // generate a token
  const token = toJwt({ ownerId: ownerToAuthenicate.id });
  // send the token back
  res.send({ token: token });
});

module.exports = router;
