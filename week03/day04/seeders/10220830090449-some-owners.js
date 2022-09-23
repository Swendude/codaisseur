"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Owners", [
      {
        name: "Bob",
        password: bcrypt.hashSync("test123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alice",
        password: bcrypt.hashSync("test123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe",
        password: bcrypt.hashSync("test123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane",
        password: "test123",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Owners", null, {});
  }
};
