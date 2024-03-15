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
        email: 'adm',
        phone: '+7 961 1112',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 2,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Лидия Павловна',
        email: 'manag',
        phone: '+7 961 1113',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 3,
        propType: false,
        persDataAgr: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Иван Михалыч',
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
        email: 'client',
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
        name: 'Михаил Петрович',
        email: 'mih@petrov.ich',
        phone: '2-15-79',
        password: '$2b$10$bMip0vyjpPMksZ9et7p/W.M7SpzNHLq9AlkyND1354KD/97Vfp.5K',
        role_id: 3,
        propType: true,
        persDataAgr: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boss Филипович',
        email: 'boss',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
