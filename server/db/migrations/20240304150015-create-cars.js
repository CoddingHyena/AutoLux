/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mark: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      prodYear: {
        type: Sequelize.INTEGER,
      },
      gosNum: {
        type: Sequelize.INTEGER,
      },
      gear: {
        type: Sequelize.STRING,
      },
      engine: {
        type: Sequelize.STRING,
      },
      vin: {
        type: Sequelize.STRING,
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
      probegTotal: {
        type: Sequelize.INTEGER,
      },
      ours: {
        type: Sequelize.BOOLEAN,
      },
      bu: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Cars');
  },
};
