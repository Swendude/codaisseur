const { toData } = require("./jwt");

function authMiddleware(req, res, next) {
  try {
    // Get the value of the authorization header
    const tokenBearer = req.headers.authorization;
    // Split and get a clean token
    const token = tokenBearer.split(" ")[1];
    // Check it (toData)
    const data = toData(token);

    // HERE WE SET THE VALUE OF AUTH_ID TO THE ID OF THE USER THAT MADE THIS TOKEN
    req.auth_id = data.ownerId;

    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
  // ?
}

module.exports = authMiddleware;
