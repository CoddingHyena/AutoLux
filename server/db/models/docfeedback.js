'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocFeedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DocFeedback.init({
    userName: DataTypes.STRING,
    dateNow: DataTypes.DATE,
    manager: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    phoneNumber: DataTypes.STRING,
    ourComment: DataTypes.STRING,
    userComment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DocFeedback',
  });
  return DocFeedback;
};