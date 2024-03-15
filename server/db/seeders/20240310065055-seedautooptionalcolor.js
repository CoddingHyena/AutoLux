'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AutoOptionsColors', [
      {
        model_id: 1,
        colorName: 'Pure White',
        price: 10000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Alaitoc Blue',
        price: 15000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Brass Scorpion',
        price: 35000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Corvus Black',
        price: 25000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Grey Knights Steel',
        price: 29000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Lothern Blue',
        price: 22700,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Warpfiend Grey',
        price: 21500,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'White Scar',
        price: 27000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Wild Rider Red',
        price: 20000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AutoOptionsColors', null, {});
  },
};
