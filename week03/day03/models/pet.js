"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pet.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  pet.init(
    {
      name: DataTypes.STRING,
      kind: DataTypes.STRING,
      food: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pet",
    }
  );
  return pet;
};
