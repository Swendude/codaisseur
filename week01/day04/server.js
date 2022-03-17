const characters = require("./characters.json");
const express = require("express");
const { request } = require("http");

const app = express();

app.get("/", (request, response) => {
  response.send(`Hello from Express server`);
});

const render = (message) => {
  const document = `<html>
    <head>
      <title>Home</title>
    </head>
    
    <body>
      <h1>Welcome! ${message}</h1>
    </body>
    </html>`;
  return document;
};

app.get("/message", (request, response) => {
  const message = `Welcome to class 57!!`;
  const page = render(message);
  response.send(message);
});

app.get("/characters", (request, response) => {
  const getCharacters = characters;
  response.send(request.params.id);
});

app.get("/characters/:id", (request, response) => {
  const getcharacter = characters.find((character) => {
    return character.id === Number.parseInt(request.params.id);
  });
});

app.get("/characters/blood/:iblood", (request, response) => {
  const getcharacter = characters.find((character) => {
    return character.blood === request.params.blood;
  });
});

const port = 3000;

app.listen(port, () => console.log(`Listening on :${port}`));
