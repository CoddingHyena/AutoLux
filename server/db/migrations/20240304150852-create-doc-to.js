/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DocTOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cars',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      dateNow: {
        type: Sequelize.DATE,
      },
      dateSelected: {
        type: Sequelize.DATE,
      },
      manager: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      probegKm: {
        type: Sequelize.INTEGER,
      },
      ourComment: {
        type: Sequelize.STRING,
      },
      userScore: {
        type: Sequelize.INTEGER,
      },
      userComment: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DocTOs');
  },
};
