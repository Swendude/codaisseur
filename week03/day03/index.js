const express = require("express");
const userRouter = require("./routers/userRouter");
const petRouter = require("./routers/petRouter");

const app = express();
// DONT FORGET THIS!
app.use(express.json());

app.use("/users", userRouter);
app.use("/pets", petRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
