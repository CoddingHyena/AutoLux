'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    "Users",
    [
      {
        name: 'Иванов Иван Иванович',
        email: '123@321.ru',
        password: '1',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Администратор',
        email: '123@421.ru',
        password: '1',
        role_id: 2,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Менеджер Анна',
        email: '123@521.ru',
        password: '1',
        role_id: 3,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Менеджер Ксения',
        email: '123@621.ru',
        password: '1',
        role_id: 3,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Руководитель',
        email: '123@721.ru',
        password: '1',
        role_id: 4,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ООО "Рога и Копыта"',
        email: '122@621.ru',
        password: '1',
        role_id: 1,
        propType: true,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Петров Петр',
        email: '124@321.ru',
        password: '1',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Чернова Инна',
        email: '125@321.ru',
        password: '1',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Голованова Евгения Андреевна',
        email: '126@321.ru',
        password: '1',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ОАО АвтоЛюкс',
        email: '120@321.ru',
        password: '1',
        role_id: 1,
        propType: true,
        persDataAgr: false,
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

// 'use strict';

// /* @type {import('sequelize-cli').Migration} */
// module.exports = {
//     async up(queryInterface, Sequelize) {
//         await queryInterface.bulkInsert(
//             "Users",
//             [
//                 { name: 'Иванов Иван Иванович', email: '123@321.ru', password: '1', role_id: 1, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Администратор', email: '123@421.ru', password: '1', role_id: 2, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Менеджер Анна', email: '123@521.ru', password: '1', role_id: 3, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Менеджер Ксения', email: '123@621.ru', password: '1', role_id: 3, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Руководитель', email: '123@721.ru', password: '1', role_id: 4, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'ООО "Рога и Копыта"', email: '122@621.ru', password: '1', role_id: 1, propType: true, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Петров Петр', email: '124@321.ru', password: '1', role_id: 1, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Чернова Инна', email: '125@321.ru', password: '1', role_id: 1, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() },
//                 { name: 'Голованова Евгения Андреевна', email: '126@321.ru', password: '1', role_id: 1, propType: false, persDataAgr: true, createdAt: new Date(), updatedAt: new Date() }
//             ]
//         );
//     },

//     async down(queryInterface, Sequelize) {
//         /* Add commands to revert seed here. */
//         /* Example: */
//         /* await queryInterface.bulkDelete('People', null, {}); */
//     }
// };