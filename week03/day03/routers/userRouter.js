const { Router } = require("express"); // just import the Router object
const User = require("../models").user;
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).send("Something went wrong");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const oneUser = await User.findByPk(req.params.id);
    if (!oneUser) {
      res.status(404).send(`User with id ${req.params.id} not found`);
    } else {
      res.send(oneUser);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
