"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Bob",
        email: "b@b.com",
        password: "bob123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alice",
        email: "a@a.com",
        password: "alice123",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe",
        email: "jo@jo.com",
        password: "joe123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane",
        email: "ja@ja.com",
        password: "jane123",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
