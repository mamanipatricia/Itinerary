'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        username: 'cechus',
        email: "cechuscsc4@gmail.com",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username: 'pattty',
        email: "patttymq@gmail.com",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
