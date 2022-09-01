const express = require("express");
const Owner = require("../models").Owner;
const router = require("./pets");
const { toJWT, toData } = require("../auth/jwt");
const { Router } = express;

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const ownerToLogin = await Owner.findOne({ where: { name: username } });
  if (ownerToLogin) {
    if (password === ownerToLogin.password) {
      //succes
      const data = { ownerId: ownerToLogin.id };
      console.log("Data", data);
      const token = toJWT(data);
      res.send({ token: token });
    } else {
      res.status(400).send("Username or password not found");
    }
  } else {
    res.status(400).send("Username or password not found *");
  }
});

module.exports = router;
