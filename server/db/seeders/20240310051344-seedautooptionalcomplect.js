'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    "AutoOptionsComplects",
    [
      {
        model_id: 1,
        complectationName: 'Complect1',
        price: 132500,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        complectationName: 'Exclusive',
        price: 182500,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        complectationName: 'Respect',
        price: 232500,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        complectationName: 'Origin',
        price: 351100,
        photo: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model_id: 2,
        complectationName: 'Status',
        price: 251100,
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
