const express = require("express");
const User = require("../models").User;
const { toJWT } = require("../auth/jwt");

const { Router } = express;

const router = new Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Check if the user exists
  const userToLogin = await User.findOne({ where: { email: email } });

  if (!userToLogin) {
    res.status(400).send("User with that password and/or email not found");
    return;
  }
  // Check if the password is correct
  if (userToLogin.password === password) {
    // Generate a token
    const token = toJWT({ userId: userToLogin.id });
    res.send({ token: token });
    return;
  }
  res.status(400).send("User with that password and/or email not found!");
});

module.exports = router;
