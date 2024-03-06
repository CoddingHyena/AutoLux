'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AutoOptionsColor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.AutoOptionsComplect, { foreignKey: 'model_id' });
    }
  }
  AutoOptionsColor.init({
    model_id: DataTypes.INTEGER,
    colorName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AutoOptionsColor',
  });
  return AutoOptionsColor;
};