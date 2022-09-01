const express = require("express");

const PetRouter = require("./routers/pets");
const AuthRouter = require("./routers/auth");
const app = express();
app.use(express.json());

app.use("/pets", PetRouter);
app.use("/auth", AuthRouter);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
