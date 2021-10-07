const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const { owner } = require("../models");
const bcrypt = require('bcrypt');
const router = new Router();

router.post("/login", async (req, res, next) => {
  if (!req.body.email || req.body.email === "") {
    res.status(400).send("Missing email or password");
  } else if (!req.body.password || req.body.password === "") {
    res.status(400).send("Missing email or password");
  }
  const auth_owners = await owner.findAll({ where: { email: req.body.email } });
  if (auth_owners.length === 0) {
    res.status(400).send("No user that with email or password exists");
  }
  else {
    const auth_owner_single = auth_owners[0];
    if (bcrypt.compareSync(req.body.password, auth_owner_single.password)) {
      res.send({token: toJWT({ownerId: auth_owner_single.id}) })
    }
    else {
      res.status(400).send("No user that with email or password exists");
    }
  }
  

  
});

module.exports = router;

// console.log('auth!')
//   console.log(req.body);
//   if (!req.body.email || req.body.email === "") {
//     res.status(400).send('Missing email or password');
//   }
//   else if (!req.body.password || req.body.password === "") {
//     res.status(400).send('Missing email or password');
//   }
//   const auth_owner = await owner.findAll({where:
//     {email:req.body.email}});
//   if (auth_owner.length === 0) {
//     res.status(400).send('No user with that passowrd or email exists');
//   }
//   else {
//     res.send({jwt: toJWT({userId: auth_owner.id})});
