const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const { owner } = require("../models");
const bcrypt = require('bcrypt');
const router = new Router();







// module.exports = router;

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