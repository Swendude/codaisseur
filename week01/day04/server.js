const express = require("express");

const port = 3000;

// create a server
const app = express();

// our database
flavours = ["vanilla", "chocolate", "lemon"];

app.get("/", (request, response) => {
    console.log('I got a request');
    response.send(flavours[1]);
});




app.listen(port);