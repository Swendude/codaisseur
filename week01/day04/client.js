const axios = require("axios");
const animals = require("animals.json");

async function getFlavours() {
  try {
    const response = await axios.get(`http://localhost`); // Problem: this is no done yet
    const client_flavours = response.data;
    
  } catch (error) {
    console.log("We got an error!");
    console.log(error.code);
  }
}
getFlavours();

// async function getFlavour(id) {
//   try {
//     const response = await axios.get(`http://localhost:3000/flavours/${id}`); // Problem: this is no done yet
//     console.log(response.data);
//   } catch (error) {
//     console.log("We got an error!");
//     console.log(error.code);
//   }
// }
// getFlavour(0);
// getFlavour(1);
// getFlavour(2);
