"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Owners", [
      {
        name: "Bob",
        password: "test123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alice",
        password: "test123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe",
        password: "test123",
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
