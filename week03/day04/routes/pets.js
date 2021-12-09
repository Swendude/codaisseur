const express = require("express");
const { pet } = require("../models");
const { Router } = express;

const router = new Router();

router.get("/", async(req, res) => {
    const owners = await pet.findAll();
    res.send(owners);
});

router.get("/:id", async(req, res) => {
    const owners = await pet.findAll({
        where: {
            id: req.params.id,
        },
    });
    if (!owners.length) {
        res.status(404).send(`Pet with ID ${req.params.id} does not exist`);
    }
    res.send(owners[0]);
});

module.exports = router;