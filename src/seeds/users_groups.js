
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_groups').insert([
        {id: 1, users_id: 1, groups_id: 1},
        {id: 2, users_id: 2, groups_id: 1}
      ]);
    });
};
