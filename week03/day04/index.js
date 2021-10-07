const express = require('express');
const ownerRouter = require('./routes/owners');
const authRouter = require('./routes/auth');

const app = express();

// Middlewares
const loggingMiddleware = (req, res, next) => {
    console.log("request recieved at "+ new Date());
    next();
}


app.use(loggingMiddleware);
app.use(express.json());
app.use('/owners', ownerRouter);
app.use('/auth', authRouter);


app.listen(4000);