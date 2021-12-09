const express = require("express");
const { owner } = require("../models");
const { Router } = express;

const router = new Router();

router.get("/", async(req, res) => {
    const owners = await owner.findAll();
    res.send(owners);
});

router.get("/:id", async(req, res) => {
    const owners = await owner.findAll({
        where: {
            id: req.params.id,
        },
    });
    if (!owners.length) {
        res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
    }
    res.send(owners[0]);
});

module.exports = router;