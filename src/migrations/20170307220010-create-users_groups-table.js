exports.up = function(knex) {
    return knex.schema
        .createTable('users_groups', function(table) {
            // table.increments('id').primary();
            table.integer('users_id');
            table.integer('groups_id');
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('users_groups');
};
