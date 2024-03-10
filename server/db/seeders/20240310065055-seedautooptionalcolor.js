'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    "AutoOptionsColors",
    [
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
        colorName: 'Pure White',
        price: 15000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Sunset Red',
        price: 35000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Deep Sea Blue',
        price: 25000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        colorName: 'Lemon Yelow',
        price: 29000,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  );


},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
