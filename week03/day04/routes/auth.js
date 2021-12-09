const { Router } = require("express")
const owner = require("../models").owner;
const router = new Router();

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
        res.send('Here is a token!')
    }
})

module.exports = router;