const axios = require("axios");

const makePost = async () => {
  const response = await axios.post("http://localhost:4000/pets", {
    name: "Paddington",
    kind: "Bear",
    food: 5,
    gender: false
  });
  console.log(response);
};

makePost();
