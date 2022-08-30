const axios = require("axios");

const createGarfield = async () => {
  try {
    const response = await axios.post("http://localhost:4000/pets", {
      name: "Garfield",
      kind: "Cat",
      food: 20,
      breed: "orange",
      gender: false
    });
    console.log(response.data);
  } catch (error) {
    console.log("ERROR", error);
  }
};

createGarfield();
