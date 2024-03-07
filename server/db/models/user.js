'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: 'role_id' });
      this.hasMany(models.PhoneNum, { foreignKey: 'user_id' });
      this.hasMany(models.Cars, { foreignKey: 'user_id' });
      this.hasMany(models.DocUserForm, { foreignKey: 'user_id' });
      this.hasMany(models.DocTestDrive, { foreignKey: 'user_id' });
      this.hasMany(models.DocTO, { foreignKey: 'user_id' });
      this.hasMany(models.DocFeedback, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    propType: DataTypes.BOOLEAN,
    persDataAgr: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};