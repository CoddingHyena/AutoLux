'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AutoOptionsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.AutoOptionsComplect, { foreignKey: 'model_id' });
      this.hasMany(models.AutoOptionsColor, { foreignKey: 'model_id' });
    }
  }
  AutoOptionsModel.init({
    modelName: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AutoOptionsModel',
  });
  return AutoOptionsModel;
};