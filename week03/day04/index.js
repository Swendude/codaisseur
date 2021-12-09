const express = require('express');
const ownerRouter = require('./routes/owners');

const app = express();

// Setup parser middleware
app.use(express.json());
app.use('/owners', ownerRouter);


app.listen(4000, () => console.log('listening!'));