const express = require('express');
const ownerRouter = require('./routes/owners');
const petRouter = require('./routes/pets')
const app = express();

// Setup parser middleware
app.use(express.json());
app.use('/owners', ownerRouter);
app.use('/pets', petRouter);


app.listen(4000, () => console.log('listening!'));