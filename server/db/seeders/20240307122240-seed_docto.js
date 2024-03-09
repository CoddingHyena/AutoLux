'use strict';

const moment = require('moment');
const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
const yesterday = moment().subtract(1, 'days');
const monthAgo = moment().subtract(30, 'days');
const yearAgo = moment().subtract(365, 'days');
const halfYearAgo = moment().subtract(180, 'days');
const quoterYearAgo = moment().subtract(90, 'days');
console.log(typeof yesterday);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DocTOs', [
      {
        user_id: 7,
        car_id: 6,
        dateNow: new Date(yearAgo),
        probegKm: 52697,
        status: false,
        userComment: 'Всё отлично!',
        ourComment: 'Работы выполнены',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        car_id: 6,
        dateNow: new Date(halfYearAgo),
        probegKm: 72697,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Работы выполнены',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        car_id: 6,
        dateNow: new Date(quoterYearAgo),
        probegKm: 92697,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Работы выполнены',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        car_id: 6,
        dateNow: new Date(monthAgo),
        probegKm: 112697,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Работы выполнены',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        car_id: 1,
        dateNow: new Date(quoterYearAgo),
        probegKm: 80000,
        status: true,
        userComment: 'Всё хорошо!',
        ourComment: 'Работы выполнены',
        userScore: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        car_id: 1,
        dateNow: new Date(monthAgo),
        probegKm: 100000,
        status: true,
        userComment: 'Всё хорошо!',
        ourComment: 'Работы выполнены',
        userScore: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        car_id: 1,
        dateNow: new Date(yesterday),
        probegKm: 110000,
        status: true,
        userComment:
          'Механик уронил гайку в маслобак, сказал ничего страшного, вылетит из выхлопной',
        ourComment: 'Работы выполнены',
        userScore: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        car_id: 5,
        dateNow: new Date(yesterday),
        probegKm: 130000,
        status: false,
        userComment:
          'Механик уронил гайку в маслобак, сказал ничего страшного, вылетит из выхлопной',
        ourComment: 'Работы выполнены',
        userScore: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
