'use strict';

const mysqlDatetime = () => new Date().toISOString().split('.')[0].replace('T', ' ');

module.exports = {
  up: function (queryInterface, Sequelize) {
      const now = new Date();
      return queryInterface.bulkInsert('Users', [{
        id: 1,
        firstname: 'Andy',
        surname: 'Wright',
        email: 'atwright147@gmail.com',
        password: 'password',
        active: true,
        createdAt: mysqlDatetime(),
        updatedAt: mysqlDatetime()
      },
      {
        id: 2,
        firstname: 'Phil',
        surname: 'Clarke',
        email: 'info@phips.co.uk',
        password: 'password',
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
