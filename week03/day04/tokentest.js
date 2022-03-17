const { toJWT, toData } = require("./auth/jwt");

const our_data = { name: "Swen", city: "Utrecht" };
const keycard = toJWT(our_data);
console.log(keycard);
console.log(toData(keycard));
