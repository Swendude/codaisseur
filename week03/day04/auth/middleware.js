// Header: {Authorization: 'Bearer ${TOKEN}'}
const { toData } = require("./jwt");

function auth(req, res, next) {
    try {
        const keycard = req.headers.authorization.split(" ");
        const token = keycard[1]
        const user_data = toData(token);
        // console.log('user data', user_data);
        req.owner_id = user_data.ownerID;
        next();
    } catch (error) {
        res.status(400).send('invalid token')
    }
}

module.exports = auth;