
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'Andy', lastName: 'Wright', email: 'andy@example.com', password: 'password', active: 1},
        {id: 2, firstName: 'Phil', lastName: 'Clarke', email: 'phil@example.com', password: 'password', active: 1},
      ]);
    });
};
