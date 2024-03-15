'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AutoOptionsModels', [
      {
        modelName: 'Folo',
        price: 1600000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelName: 'Feramont',
        price: 3600000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelName: 'Figuan',
        price: 2600000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AutoOptionsModels', null, {});
  },
};
