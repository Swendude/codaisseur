"use strict";
const bcrypt = require("bcrypt");
const { owner } = require("../models");
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
          name: "John Doe",
          age: 42,
          password: "John123",
          email: "john@doe.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Doe",
          age: 45,
          password: "Janejane",
          email: "jane@doe.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const all_owners = await owner.findAll();
    // query all the users and pick from them
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "Wanda",
          kind: "fish",
          ownerId: all_owners[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom",
          kind: "cat",
          ownerId: all_owners[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scooby-Doo",
          kind: "dog",
          ownerId: all_owners[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
    await queryInterface.bulkDelete("pets", null, {});
    await queryInterface.bulkDelete("owners", null, {});
  },
};
