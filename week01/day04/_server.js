const express = require("express");

const port = 3000;

// create a server
const app = express();

// our database
const flavours = [
  { flavour: "vanilla", price: 1 },
  { flavour: "chocolate", price: 2 },
  { flavour: "lemon", price: 0.5 },
];

console.log(flavours);
app.get("/", (request, response) => {
  console.log(`I got a request`);
  const json = JSON.stringify(flavours);
  response.send(json);
});

app.get("/flavours/:id", (request, response) => {
  console.log("I got a request");
  const id = request.params.id;
  response.send(flavours[id]);
});

app.listen(port, () => console.log("I am running"));
