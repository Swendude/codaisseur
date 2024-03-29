"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Owner.hasMany(models.Pet);
    }
  }
  Owner.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Owner"
    }
  );
  return Owner;
};
