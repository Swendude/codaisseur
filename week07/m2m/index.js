const Users = require("./models").User;
const Products = require("./models").Product;

const getAllUsers = async () => {
  const allUsers = await Users.findAll({
    include: ["purchases"]
    // raw: true
  });
  console.log(allUsers[0].dataValues);
};

getAllUsers();
