'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          accessUser: true,
          accessAdmin: false,
          accessManager: false,
          accessBoss: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          accessUser: false,
          accessAdmin: true,
          accessManager: false,
          accessBoss: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          accessUser: false,
          accessAdmin: false,
          accessManager: true,
          accessBoss: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          accessUser: false,
          accessAdmin: false,
          accessManager: false,
          accessBoss: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  }
};
