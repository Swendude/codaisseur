// MAP RECAP

// function double(num) {
//   return num * 3;
// }
// // console.log(double(5));
// // console.log(double);
// const myList = [1, 2, 3, 5, 7, 9, 11];
// // console.log(myList);
// const result = myList.map(double);
// console.log(result);

const axios = require("axios");

async function getYahoo() {
  try {
    const response = await axios.get("yahoo.com");

    console.log("response test:", response.data);
  } catch (error) {
    console.log("error test:", error.message);
  }
}

getYahoo();
