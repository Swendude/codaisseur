const jwt = require("jsonwebtoken");

const secret = "voj66ldfihouh3pofdp&nf832*(swen";

// This is what they have behind the reception (data -> keycard)
function toJWT(data) {
  const new_token = jwt.sign(data, secret, { expiresIn: "2h" });
  return new_token;
}

// This is like a validator at the door where you hold your keycard (keycard -> data)
function toData(token) {
  const stored_data = jwt.verify(token, secret);
  return stored_data;
}

module.exports = { toJWT, toData };
