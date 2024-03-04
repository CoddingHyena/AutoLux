'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Cars.init({
    mark: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    prodYear: DataTypes.INTEGER,
    gosNum: DataTypes.INTEGER,
    gear: DataTypes.STRING,
    engine: DataTypes.STRING,
    vin: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    probegTotal: DataTypes.INTEGER,
    ours: DataTypes.BOOLEAN,
    bu: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};