'use strict';

const mysqlDatetime = () => new Date().toISOString().split('.')[0].replace('T', ' ');

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users_Groups', [{
        users_id: 1,
        groups_id: 1,
        createdAt: mysqlDatetime(),
        updatedAt: mysqlDatetime()
      }, {
        users_id: 2,
        groups_id: 1,
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
