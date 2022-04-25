"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Pets", [
      {
        name: "Ralph",
        kind: "Dog",
        food: 2,
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joy",
        kind: "Dog",
        food: 1,
        gender: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jooy",
        kind: "Turtle",
        food: 1,
        gender: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fido",
        kind: "Bird",
        food: 1,
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kazimier",
        kind: "Cat",
        food: 1,
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Pets", null, {});
  },
};
