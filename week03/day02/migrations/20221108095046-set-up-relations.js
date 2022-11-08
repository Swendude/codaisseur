"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Pets", "OwnerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Owners",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Pets", "OwnerId");
  }
};
