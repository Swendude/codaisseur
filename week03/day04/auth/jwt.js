const jwt = require("jsonwebtoken");

const secret = process.env.secret || "f98howfe^@&#oirvhvlk$%&!#%dhv";

function toJWT(data) {
  const new_token = jwt.sign(data, secret, { expiresIn: "2h" });
  return new_token;
}

function toData(token) {
  const stored_data = jwt.verify(token, secret);
  return stored_data;
}

module.exports = { toJWT, toData };
