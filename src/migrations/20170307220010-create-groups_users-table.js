exports.up = function(knex) {
    return knex.schema
        .createTable('groups_users', function(table) {
            // table.increments('id').primary();
            table.integer('user_id');
            table.integer('group_id');
            // table.integer('users_id').references('users.id');
            // table.integer('groups_id').references('groups.id');
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('groups_users');
};
