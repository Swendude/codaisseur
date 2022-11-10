const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "o0r238yf238yhfldj08^@644pjf0dfh";

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, secret);
}

module.exports = { toJWT, toData };
// const myToken = toJWT({ message: "Hello from token! Hello from token!" });
// console.log(myToken);

// secret = "swen";

// const myData = toData(myToken);
// console.log(myData);
