exports.up = function(knex) {
    return knex.schema
        .createTable('groups', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.integer('active');
            table.timestamps();
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('groups');
};
