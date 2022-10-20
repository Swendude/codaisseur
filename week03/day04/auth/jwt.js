// Create a machine that can read and write to tokens
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "43094327rcuf39yf38hfpgh^32e043efhdf";

const toJwt = (data) => {
  const token = jwt.sign(data, secret, { expiresIn: "2h" });
  return token;
};

const toData = (token) => {
  const data = jwt.verify(token, secret);
  return data;
};

module.exports = { toJwt, toData };
