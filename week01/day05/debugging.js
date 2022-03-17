// DEBUGGING
// syntax error (easy) - we will get an error message
// type error (medium) - we will get an error message
// reference errors (easy) - we will get an error message
// logic errors (hard)
const axios = require("axios");
const getCDSR = async () => {
  try {
    const res = await axios.get("http:///www.codaisseur.com");
    console.log(res.data);
  } catch (error) {
    console.log("error: ", error.message);
  }
};

getCDSR();
