exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
            table.string('avatar').nullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.integer('active').notNullable().defaultTo(0);
            table.timestamps();

            table.unique('email');
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('users');
};
