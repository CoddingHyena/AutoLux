'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AutoOptionsColors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AutoOptionsModels',
          key: 'id',
      },
      onDelete: 'cascade',
      allowNull: false,
      },
      colorName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AutoOptionsColors');
  }
};