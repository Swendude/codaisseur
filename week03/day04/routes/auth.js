const { Router } = require("express")
const owner = require("../models").owner;
const router = new Router();
const { toJWT } = require("../auth/jwt");
const jwt = require("jsonwebtoken")

router.post("/login", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        res.status(400).send('No email or password provided')
    }
    const auth_owner = await owner.findAll({
        where: { email: email, password: password }
    })
    if (auth_owner.length === 0) {
        res.status(400).send('No owner found')
    } else {
        //This is the user that we want to generate a keycard for
        const auth_user = auth_owner[0];

        const keycard = toJWT({ ownerId: auth_user.id });
        res.send(keycard);
    }
})

module.exports = router;