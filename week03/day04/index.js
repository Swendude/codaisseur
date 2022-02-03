const express = require("express");
const ownerRouter = require("./routes/owners");
const petRouter = require("./routes/pets");
const authRouter = require("./routes/auth");
const app = express();

// Setup parser middleware
app.use(express.json());
// Setup routers
app.use("/owners", ownerRouter);
app.use("/pets", petRouter);
app.use("/auth", authRouter);

app.listen(4000, () => console.log("listening!"));
