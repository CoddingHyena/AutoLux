'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Иванов Иван Иванович',
        email: '123@321.ru',
        phone: '+7 961 1111',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Администратор',
        email: '1@4.ru',
        phone: '+7 961 1112',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 2,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Менеджер Анна',
        email: '1@5.ru',
        phone: '+7 961 1113',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 3,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Менеджер Ксения',
        email: '123@621.ru',
        phone: '+7 961 1114',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 3,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Руководитель',
        email: '123@721.ru',
        phone: '+7 961 1115',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 4,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ООО "Рога и Копыта"',
        email: '122@621.ru',
        phone: '2-15-37',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: true,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Петров Петр',
        email: '124@321.ru',
        phone: '+7 961 5544',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Чернова Инна',
        email: '1@2.ru',
        phone: '+7 965 6871',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Голованова Евгения Андреевна',
        email: '126@321.ru',
        phone: '+7 961 7891',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ОАО АвтоЛюкс',
        email: '120@321.ru',
        phone: '2-15-79',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: true,
        persDataAgr: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Чернов Игнат',
        email: '120@721.ru',
        phone: '2-15-79',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 1,
        propType: true,
        persDataAgr: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Иван тест',
        email: 'iv',
        phone: '2-15-79',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 4,
        propType: true,
        persDataAgr: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boss Филипович',
        email: 'boss@boss',
        phone: '2-15-79',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 4,
        propType: true,
        persDataAgr: false,
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
