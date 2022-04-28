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
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "John Doe",
          email: "jo@doe.com",
          password: "joe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Jane Doe",
          email: "ja@doe.com",
          password: "jane",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Alice Doe",
          email: "al@doe.com",
          password: "alice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
