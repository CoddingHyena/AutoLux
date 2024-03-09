'use strict';

const moment = require('moment');
const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
const yesterday = moment().subtract(1, 'days');
const monthAgo = moment().subtract(30, 'days');
console.log(typeof yesterday);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DocFeedbacks', [
      {
        userName: 'Игнат Павлович Чепушной',
        dateNow: new Date(yesterday),
        status: false,
        phoneNumber: '+7 961 1315',
        userComment: 'Сколько стоит дом построить?',
        ourComment: 'Дана консультация, просил перезвонить еще раз',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Константин',
        dateNow: new Date(yesterday),
        status: false,
        phoneNumber: '+7 961 5577',
        userComment: 'Как записаться на тест драйв',
        ourComment: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Инокентий',
        dateNow: new Date(monthAgo),
        status: true,
        phoneNumber: '+7 965 3387',
        userComment: 'Как записаться на тест драйв',
        ourComment: 'Записан на 10.02.2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Валя суетной',
        dateNow: new Date(monthAgo),
        status: true,
        phoneNumber: '+7 961 5478 ',
        userComment: 'Почему всё так дорого?',
        ourComment: 'Время такое!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Эдуард Петров',
        dateNow: new Date(monthAgo),
        status: false,
        phoneNumber: '+7 982 6472 ',
        userComment: 'Хочу записаться на ТО',
        ourComment: 'Попросил позвонить в следующем месяце',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Семён Петров',
        dateNow: new Date(yesterday),
        status: true,
        phoneNumber: '+7 982 8214 ',
        userComment: 'Хочу записаться на ТО',
        ourComment: 'Записан на 08.03.2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Петр Семёнов',
        dateNow: new Date(yesterday),
        status: false,
        phoneNumber: '+7 983 4784 ',
        userComment: 'Хочу записаться на ТО',
        ourComment: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Владимир',
        dateNow: new Date(yesterday),
        status: false,
        phoneNumber: '+7 983 4784 ',
        userComment: 'Хочу записаться на тестдрайв Фоло',
        ourComment: '',
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
