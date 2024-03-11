'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocTO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.User, { foreignKey: 'manager' });
    }
  }
  DocTO.init(
    {
      user_id: DataTypes.INTEGER,
      car_id: DataTypes.INTEGER,
      dateNow: DataTypes.DATE,
      dateSelected: DataTypes.DATE,
      manager: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      probegKm: DataTypes.INTEGER,
      ourComment: DataTypes.STRING,
      userScore: DataTypes.INTEGER,
      userComment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'DocTO',
    }
  );
  return DocTO;
};
