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
    username: DataTypes.STRING,
    datenow: DataTypes.DATE,
    manager: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    phonenumber: DataTypes.STRING,
    ourcomment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocFeedback',
  });
  return DocFeedback;
};