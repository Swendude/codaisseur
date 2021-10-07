const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    const token = auth[1];
    try {
        const user_data = toData(token);
        console.log(user_data);
        req.owner_id = user_data.ownerId
        next();
    }
    catch (error) {
        res.status(400).send('token invalid')
    }
    
}

module.exports = auth;

// const auth =
//     req.headers.authorization && req.headers.authorization.split(" ");
//   if (auth && auth[0] === "Bearer" && auth[1]) {
//     next()
//   } else {
//     res.status(401).send({
//       message: "Please supply some valid credentials",
//     });
//   }