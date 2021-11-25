// Task: Write a route that returns 'Hello world!'
// Battleplan:
// require expressx
// initialize an express app x
// give it a port x
// start listening x
// give it a route x
// test it x

const express = require('express')
const characters = require('./characters.json')
    // Initialize an express app (waiter/server)
const app = express();

// App.get takes 2 arguments
// First argument is 'Route'
// Second argument is a function that takes a request and response argument
// app.get('/hello', (req, res) => {
//     console.log(`My path is ${req.path}`);
//     res.send('Hello, world!');
// })



app.get('/hello/:name', (req, res) => {
    console.log(req.params)
    res.send(`Hello, ${req.params.name}!`);
})

app.get('/characters/:id', (request, response) => {
    char_id = request.params.id
    response.send(characters.find((char) => char.id === parseInt(char_id)))
        // response.send({ name: "swen", age: 29, job: "teacher" })
})

app.get('/characters', (request, response) => {
    response.send(characters)
        // response.send({ name: "swen", age: 29, job: "teacher" })
})

app.get('/characters/patronus/:animal', (request, response) => {
    animal = request.params.animal
    response.send(characters.filter((char) => char.patronus === animal))
        // response.send({ name: "swen", age: 29, job: "teacher" })
})

app.get('/', (req, res) => {
    res.send('hi');
})



const port = 5065
app.listen(port, () => console.log(`Listening on ${port}`))