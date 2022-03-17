const { toData } = require("./jwt");

function authMiddleware(req, res, next) {
  const tokenBearer = req.headers.authorization;
  if (!tokenBearer) {
    res.status(400).send("Token is not in headers");
    return;
  }
  const token = tokenBearer.split(" ")[1];
  try {
    const authData = toData(token);
    req.ownerId = authData.ownerId;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
    return;
  }
}
module.exports = authMiddleware;
