'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AutoOptionsComplect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.AutoOptionsComplect, { foreignKey: 'model_id' });

    }
  }
  AutoOptionsComplect.init({
    model_id: DataTypes.INTEGER,
    complectationName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AutoOptionsComplect',
  });
  return AutoOptionsComplect;
};