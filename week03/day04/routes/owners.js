const { Router } = require("express");
const { owner } = require("../models");
const bcrypt = require('bcrypt');
const router = new Router();

router.get("/", async(req, res) => {
    const owners = await owner.findAll();
    res.send(owners);
});

router.get("/:id", async(req, res) => {
    const owner_by_pk = await owner.findByPk(req.params.id)
    if (owner_by_pk == null) {
        res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
    }
    res.send(owner_by_pk);
});

router.post("/signup", async(req, res) => {
    try {
        const name = req.body.name;
        const age = req.body.age;
        const email = req.body.email;
        const password = req.body.password;
        if (!name || !age || !email || !password) {
            res.status(400).send('not enough information provided')
        } else {
            const new_owner = await owner.create({
                name: name,
                age: age,
                email: email,
                password: bcrypt.hashSync(password, 10)
            })
            res.send(new_owner)
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong');
    }
})

module.exports = router;