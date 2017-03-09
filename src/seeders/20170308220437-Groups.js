'use strict';

const mysqlDatetime = () => new Date().toISOString().split('.')[0].replace('T', ' ');

module.exports = {
  up: function (queryInterface, Sequelize) {
      const now = new Date();
      return queryInterface.bulkInsert('Groups', [{
        name: 'Philandyerers',
        active: true,
        createdAt: mysqlDatetime(),
        updatedAt: mysqlDatetime()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
