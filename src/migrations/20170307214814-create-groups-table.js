exports.up = function(knex) {
    return knex.schema
        .createTable('groups', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.integer('active');
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('groups');
};
