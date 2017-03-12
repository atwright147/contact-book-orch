exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.integer('active').notNullable().defaultTo(0);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

            table.unique('email');
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('users');
};
