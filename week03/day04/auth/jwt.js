const jwt = require("jsonwebtoken")

const secret = process.env.secret || 'fdeiueffewuinrvldshvou!@$*&'

// Create a token
function toJWT(data) {
    const keycard = jwt.sign(data, secret, { expiresIn: "2h" })
    return keycard
}

// Check if token is valid and return the data
function toData(token) {
    const tokendata = jwt.verify(token, secret);
    return tokendata
}

module.exports = { toJWT, toData };