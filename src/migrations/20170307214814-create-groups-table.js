exports.up = function(knex) {
    return knex.schema
        .createTable('groups', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.integer('active');
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('groups');
};
