"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Owners", [
      {
        name: "Bob",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alice",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Owners", null, {});
  }
};
