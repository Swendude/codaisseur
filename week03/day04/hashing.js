const bcrypt = require("bcrypt");

const password = "Hello";

const hashed = bcrypt.hashSync(password, 10);
console.log(hashed);

const input = "Hello";
const hashedInput = bcrypt.hashSync(input, 10);

if (bcrypt.compareSync(input, hashed)) {
  console.log("Passwords match");
} else {
  console.log("Passwords don't match");
}
