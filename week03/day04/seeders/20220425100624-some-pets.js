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
        name: "Lassie",
        kind: "Dog",
        food: 2,
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        OwnerId: 4
      },
      {
        name: "Balto",
        kind: "Dog",
        food: 3,
        gender: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        OwnerId: 1
      },
      {
        name: "Pooh",
        kind: "Bear",
        food: 5,
        gender: false,
        OwnerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tweety",
        kind: "Bird",
        food: 1,
        gender: true,
        OwnerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tom",
        kind: "Cat",
        food: 3,
        gender: false,
        OwnerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jerry",
        kind: "Mouse",
        food: 1,
        gender: false,
        OwnerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Maya",
        kind: "Bee",
        food: 1,
        gender: true,
        OwnerId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
  }
};
