'use strict';

const moment = require('moment');
const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
const yesterday = moment().subtract(1, 'days');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DocFeedbacks",
      [
        {
          username: 1,
          datenow: yesterday,
          manager: '',
          status: true,
          phonenumber: '+7 961 1315',
          // usercomment: 'Сколько стоит дом построить?',
          ourcomment: 'Дана консультация',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   user_id: 2,
        //   phoneNumber: '+7 961 2222',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 3,
        //   phoneNumber: '+7 961 3333',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 4,
        //   phoneNumber: '+7 961 4444',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 5,
        //   phoneNumber: '+7 961 5555',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 6,
        //   phoneNumber: '+7 961 6666',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 6,
        //   phoneNumber: '+7 961 2258',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 10,
        //   phoneNumber: '2-22-52',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
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
