exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.string('email');
            table.string('password');
            table.integer('active');
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable('users');
};
