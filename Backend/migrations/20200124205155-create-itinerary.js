'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Itineraries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Places',
          key: 'id',
          as:'PlaceDepart'
        }
      },
      arriveId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Places',
          key: 'id',
          as: "PlaceArrive"
        }
      },

      date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.INTEGER
      },
      reserve: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Itineraries');
  }
};