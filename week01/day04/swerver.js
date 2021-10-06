const express = require("express");

const port = 3000;

const app = express();

const database = [
  { name: "Karla", teaching: true },
  { name: "Matias", teaching: false },
];


app.get("/teachers", (request, response) => response.send(database));

app.get("/teachers/:index", (request, response) => {
  response.send(database[request.params.index]);
});


app.listen(port);
