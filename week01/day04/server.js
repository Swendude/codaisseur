const express = require("express");

// create a server
const app = express();

// our database
flavours = ["vanilla", "chocolate", "lemon"];

app.get("/", (request, response) => {
    const messages = flavours.map((flavour) => `I like ${flavour}`);
    response.send(messages);
});

app.listen(3000);