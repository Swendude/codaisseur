const express = require("express");
const { pet } = require("../models");
const AuthMiddleware = require("../auth/middleware");
const { Router } = express;

const router = new Router();
// router.use(AuthMiddleware);

router.get("/", AuthMiddleware, async(req, res) => {
    const pets = await pet.findAll();
    res.send(pets);
});

router.get("/:id", async(req, res) => {
    const pet_by_pk = await pet.findByPk(req.params.id);
    if (pet_by_pk == null) {
        res.status(404).send(`Pet with ID ${req.params.id} does not exist`);
    }
    res.send(pet_by_pk);
});

module.exports = router;