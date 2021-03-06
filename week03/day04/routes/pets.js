const express = require("express");
const { pet } = require("../models");
const { Router } = express;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const auth_ownerId = req.ownerId;
  const pets = await pet.findAll({ where: { ownerId: auth_ownerId } });
  res.send(pets);
});

router.get("/:id", async (req, res) => {
  const pet_by_pk = await pet.findByPk(req.params.id);
  if (pet_by_pk == null) {
    res.status(404).send(`Pet with ID ${req.params.id} does not exist`);
  }
  res.send(pet_by_pk);
});

router.patch("/:id", async (req, res) => {
  const pet_by_pk = await pet.findByPk(req.params.id);
  if (!pet_by_pk) {
    res.status(404).send(`Pet with ID ${req.params.id} does not exist`);
  } else {
    const new_name = req.body.name;
    const new_kind = req.body.kind;
    if (new_name || new_kind) {
      await pet_by_pk.update({
        name: new_name || pet_by_pk.name,
        kind: new_kind || pet_by_pk.kind,
      });
      res.send(pet_by_pk);
    } else {
      res.status(400).send("Please provide either kind or name");
    }
  }
});

router.delete("/:id", async (req, res) => {
  const pet_by_pk = await pet.findByPk(req.params.id);
  if (!pet_by_pk) {
    res.status(404).send(`Pet with ID ${req.params.id} does not exist`);
  } else {
    await pet_by_pk.destroy();
    res.send("Pet was destroyed");
  }
});

// router.get("/kind/:kindname", async (req, res) => {
//   const pets_by_kind = await pet.findAll({
//     where: { kind: req.params.kindname },
//   });
//   res.send(pets_by_kind);
// });

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, kind } = req.body;
    const ownerId = req.ownerId;
    if (!name || !kind) {
      res.status(400).send("not enough information provided");
      return;
    }
    const new_pet = await pet.create({
      name: name,
      kind: kind,
      ownerId: ownerId,
    });
    res.send(new_pet);
  } catch (error) {
    res.send("Something went wrong");
  }
});

// router.patch("/:id", async (req, res) => {
//   try {
//     const pet_to_be_updated = await pet.findByPk(req.params.id);
//     if (!pet_to_be_updated) {
//       res.status(400).send("Pet does not exist");
//     } else {
//       const updated_pet = await pet_to_be_updated.update(req.body);
//       res.send(updated_pet);
//     }
//   } catch (error) {
//     res.status(400).send("something went wrong");
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const pet_to_be_deleted = await pet.findByPk(req.params.id);
//     if (!pet_to_be_deleted) {
//       res.status(400).send("Pet does not exist");
//     } else {
//       await pet_to_be_deleted.destroy();
//       res.send("Pet was deleted");
//     }
//   } catch (error) {
//     res.send("Something went wrong");
//   }
// });

module.exports = router;
