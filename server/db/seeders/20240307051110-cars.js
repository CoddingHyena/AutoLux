'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
     "Cars",
    [
      {
        mark: 'FolksFagen',
        model: 'Feramont',
        color: 'Midnight Blue',
        prodYear: 2020,
        gosNum: 'K502TB 53RUS',
        gear: '5x MANUAL',
        engine: '2.2 GASOLINE TURBO',
        vin: 'FF135879664AN97',
        user_id: 1,
        probegTotal: 158633,
        ours: false,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Folo',
        color: 'Pure White',
        prodYear: 2021,
        gosNum: 'M301TB 53RUS',
        gear: '5x MANUAL',
        engine: '1.6 GASOLINE TURBO',
        vin: 'FF9846514AN97',
        user_id: 6,
        probegTotal: 358633,
        ours: false,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Folo',
        color: 'Pure White',
        prodYear: 2021,
        gosNum: 'M306TB 53RUS',
        gear: '5x MANUAL',
        engine: '1.6 GASOLINE TURBO',
        vin: 'FF9732514AN97',
        user_id: 6,
        probegTotal: 158633,
        ours: false,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Folo',
        color: 'Pure White',
        prodYear: 2021,
        gosNum: 'M294TB 53RUS',
        gear: '5x MANUAL',
        engine: '1.6 GASOLINE TURBO',
        vin: 'FF989879AN97',
        user_id: 6,
        probegTotal: 258633,
        ours: false,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Folo',
        color: 'Sunset Red',
        prodYear: 2021,
        gosNum: 'M307TB 53RUS',
        gear: '5x MANUAL',
        engine: '1.6 GASOLINE TURBO',
        vin: 'FF98879884AN97',
        user_id: 6,
        probegTotal: 383633,
        ours: false,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'Kia',
        model: 'Sportage',
        color: 'Синий',
        prodYear: 2019,
        gosNum: 'T103KB 49RUS',
        gear: 'Автомат',
        engine: '2.2 Бензин',
        vin: 'Неизвестен',
        user_id: 7,
        probegTotal: 183633,
        ours: false,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Feramont',
        color: 'Midnight Blue',
        prodYear: 2022,
        gosNum: 'K102TB 53RUS',
        gear: '5x MANUAL',
        engine: '2.2 GASOLINE TURBO',
        vin: 'FF135872224AN97',
        user_id: 10,
        probegTotal: 633,
        ours: true,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Feramont',
        color: 'Midnight Blue',
        prodYear: 2022,
        gosNum: 'K107TB 53RUS',
        gear: '7x VARIATOR',
        engine: '2.2 GASOLINE TURBO',
        vin: 'FF135111664AN97',
        user_id: 10,
        probegTotal: 433,
        ours: true,
        bu: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mark: 'FolksFagen',
        model: 'Folo',
        color: 'Lemon Yelow',
        prodYear: 2022,
        gosNum: 'K807TB 53RUS',
        gear: '5x MANUAL',
        engine: '1.4 GASOLINE',
        vin: 'WL539111664AN97',
        user_id: 10,
        probegTotal: 233,
        ours: true,
        bu: true,
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