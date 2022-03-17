const { Router } = require("express");
const { owner } = require("../models");
const router = new Router();

router.get("/", async (req, res) => {
  const owners = await owner.findAll();
  res.send(owners);
});

router.get("/:id", async (req, res) => {
  const owner_by_pk = await owner.findByPk(req.params.id);
  if (owner_by_pk == null) {
    res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
  }
  res.send(owner_by_pk);
});

module.exports = router;
