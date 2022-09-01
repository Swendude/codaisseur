const { toJWT, toData } = require("./auth/jwt");

const myData = {
  name: "Swen",
  school: "Codaisseur",
  job: "teacher",
  pets: true,
  city: "Utrecht",
  sister: 2
};

const token = toJWT(myData);
console.log("JWT", token);
console.log("---------");
console.log("Unpacked data", toData(rawToken));

const rawToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3dlbiIsInNjaG9vbCI6IkNvZGFpc3NldXIiLCJqb2IiOiJ0ZWFjaGVyIiwicGV0cyI6dHJ1ZSwiY2l0eSI6IlV0cmVjaHQiLCJzaXN0ZXIiOjIsImlhdCI6MTY2MjAyMTk4NCwiZXhwIjoxNjYyMDI5MTg0fQ.8bhRgdmhjrv88qK17wGkn5uBmkWzrZw1EHoR5FqkNvk";
console.log("Unpacked data", toData(rawToken));
