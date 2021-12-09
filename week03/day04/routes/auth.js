const { Router } = require("express")
const owner = require("../models").owner;
const router = new Router();
const { toJWT } = require("../auth/jwt");
const bcrypt = require('bcrypt');

router.post("/login", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        res.status(400).send('No email or password provided')
    }
    const auth_owner = await owner.findAll({
        where: { email: email }
    })
    if (auth_owner.length === 0) {
        res.status(400).send('No owner found')
    } else {
        //This is the user that we want to generate a keycard for
        const auth_user = auth_owner[0];
        const hashed_pw = auth_user.password;
        if (bcrypt.compareSync(password, hashed_pw)) {
            const keycard = toJWT({ ownerId: auth_user.id });
            res.send(keycard);
        } else {
            res.status(400).send('No owner found')
        }

    }
})

module.exports = router;