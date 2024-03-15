'use strict';

const moment = require('moment');
const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
const yesterday = moment().subtract(1, 'days');
const monthAgo = moment().subtract(30, 'days');
const yearAgo = moment().subtract(365, 'days');
const halfYearAgo = moment().subtract(180, 'days');
const quoterYearAgo = moment().subtract(90, 'days');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DocTestDrives', [
      {
        user_id: 8,
        car_id: 10,
        dateNow: new Date(yearAgo),
        dateSelected: new Date(),
        probegKm: 233,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        car_id: 10,
        manager: 3,
        dateNow: new Date(halfYearAgo),
        dateSelected: new Date(),
        probegKm: 233,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        car_id: 10,
        manager: 4,
        dateNow: new Date(quoterYearAgo),
        dateSelected: new Date(),
        probegKm: 233,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        car_id: 10,
        dateNow: new Date(monthAgo),
        dateSelected: new Date(),
        probegKm: 233,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        car_id: 10,
        manager: 3,
        dateNow: new Date(yesterday),
        dateSelected: new Date(),
        probegKm: 233,
        status: true,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        car_id: 9,
        dateNow: new Date(yesterday),
        dateSelected: new Date(),
        probegKm: 235,
        status: false,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        car_id: 9,
        manager: 4,
        dateNow: new Date(yesterday),
        dateSelected: new Date(),
        probegKm: 235,
        status: false,
        userComment: 'Всё отлично!',
        ourComment: 'Тест драйв проведён',
        userScore: 5,
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
