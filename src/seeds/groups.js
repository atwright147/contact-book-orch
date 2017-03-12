
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {id: 1, name: 'group1', active: 1, created_at: knex.fn.now(), updated_at: knex.fn.now()},
      ]);
    });
};
