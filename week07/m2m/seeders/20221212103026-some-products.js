"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Lamp",
          description: "Shines Light",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Desk",
          description: "To sit on",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Remote",
          description: "To control",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  }
};
