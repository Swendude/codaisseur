"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      "owners",
      [
        {
          id: 1,
          name: "John Doe",
          age: 42,
          password: 'John123',
          email: 'john@doe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Jane Doe",
          age: 45,
          password: 'Janejane',
          email: 'jane@doe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          id: 1,
          name: "Wanda",
          kind: 'fish',
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Tom",
          kind: 'cat',
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Scooby-Doo",
          kind: 'dog',
          ownerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('pets', null, {});
     await queryInterface.bulkDelete('owners', null, {});
  },
};
