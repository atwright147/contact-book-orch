
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups_users').insert([
        {user_id: 1, group_id: 1},
        {user_id: 2, group_id: 1}
      ]);
    });
};
