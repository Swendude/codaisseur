const { Router } = require("express");
const { owner } = require("../models");
const { toJWT } = require("../auth/jwt");
const router = new Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Please provide a email and password");
  } else {
    const auth_owner = await owner.findOne({
      where: { email: email },
    });
    if (!auth_owner) {
      res.status(400).send("User not found");
    } else {
      if (password === auth_owner.password) {
        const token = toJWT({
          ownerId: auth_owner.id,
        });
        res.send({ token });
      } else {
        res.send("Password not correct");
      }
    }
  }
});

module.exports = router;
