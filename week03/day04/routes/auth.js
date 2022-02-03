const { Router } = require("express");
const { owner } = require("../models");
const { toJWT, toData } = require("../Auth/jwt");

const router = new Router();

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).send("no email or password provided");
  } else {
    const auth_owner = await owner.findOne({
      where: { email: email },
    });

    if (!auth_owner) {
      res.status(400).send("User not found");
    } else {
      if (auth_owner.password === password) {
        const keycard = toJWT({
          ownerId: auth_owner.id,
        });
        res.send(keycard);
      } else {
        res.send("Everything is not cool");
      }
    }
  }
});

router.get("/show-token", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const data = toData(token);
  const token_owner = await owner.findByPk(data.ownerId);
  if (token_owner.id === 1) {
    res.send(token_owner);
  } else {
    res.send("This owner does not have rights");
  }
});

module.exports = router;
