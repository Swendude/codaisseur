"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Bob",
        email: "b@b.com",
        password: bcrypt.hashSync("bob123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alice",
        email: "a@a.com",
        password: bcrypt.hashSync("alice123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe",
        email: "jo@jo.com",
        password: bcrypt.hashSync("joe123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane",
        email: "ja@ja.com",
        password: bcrypt.hashSync("jane123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
